import { FormEvent, useEffect, useState } from 'react'
import { CheckCircle2, Mail, Send, TriangleAlert } from 'lucide-react'
import { budgetOptions, services, type ServiceId } from '../data/services'
import { siteConfig } from '../config/site'

type FormState = { name: string; email: string; service: ServiceId | ''; budget: string; description: string }
const initial: FormState = { name: '', email: '', service: '', budget: '', description: '' }

export function ContactForm({ selectedService }: { selectedService: ServiceId | '' }) {
  const [form, setForm] = useState<FormState>({ ...initial, service: selectedService })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  useEffect(() => setForm(prev => ({ ...prev, service: selectedService })), [selectedService])

  const update = (key: keyof FormState, value: string) => { setForm(prev => ({ ...prev, [key]: value })); setStatus('idle'); setError('') }

  const submit = (event: FormEvent) => {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.service || !form.description.trim()) { setStatus('error'); setError('Please complete your name, email, service, and project description.'); return }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) { setStatus('error'); setError('Please enter a valid email address.'); return }
    const serviceName = services.find(s => s.id === form.service)?.shortTitle ?? form.service
    const subject = encodeURIComponent(`Website enquiry — ${serviceName}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nService: ${serviceName}\nBudget: ${form.budget || 'Not specified'}\n\nProject details:\n${form.description}`)
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setStatus('success')
  }

  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-grid"><label>Name<input value={form.name} onChange={e => update('name', e.target.value)} placeholder="Your name" autoComplete="name" /></label><label>Email<input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="you@example.com" autoComplete="email" /></label></div>
    <div className="form-grid"><label>Service<select value={form.service} onChange={e => update('service', e.target.value)}><option value="">Choose a service</option>{services.map(s => <option key={s.id} value={s.id}>{s.shortTitle}</option>)}</select></label><label>Budget<select value={form.budget} onChange={e => update('budget', e.target.value)}><option value="">Choose a range</option>{budgetOptions.map(b => <option key={b}>{b}</option>)}</select></label></div>
    <label>Project description<textarea rows={6} value={form.description} onChange={e => update('description', e.target.value)} placeholder="Tell us what you want to build, who it is for, and any important features." /></label>
    {status === 'error' && <div className="form-message error" role="alert"><TriangleAlert size={17}/>{error}</div>}
    {status === 'success' && <div className="form-message success" role="status"><CheckCircle2 size={17}/>Your email app should open with the enquiry prepared. No form submission is stored on this site.</div>}
    <div className="form-actions"><button className="button button-primary" type="submit"><Send size={17}/> Prepare enquiry email</button><a className="button button-ghost" href={`mailto:${siteConfig.email}`}><Mail size={17}/> Email directly</a></div>
    <p className="form-footnote">This site uses an email-based fallback rather than pretending to store or send submissions without a configured backend.</p>
  </form>
}
