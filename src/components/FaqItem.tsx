import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return <div className={`faq-item ${open ? 'open' : ''}`}><button aria-expanded={open} onClick={() => setOpen(v => !v)}><span>{question}</span><ChevronDown size={19}/></button><div className="faq-answer" hidden={!open}><p>{answer}</p></div></div>
}
