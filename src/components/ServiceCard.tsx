import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Sparkles } from 'lucide-react'
import type { Service } from '../data/services'

export function ServiceCard({ service, onEnquire }: { service: Service; onEnquire: (serviceId: Service['id']) => void }) {
  return (
    <motion.article whileHover={{ y: -7 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className={`service-card accent-${service.accent}`}>
      <div className="service-card-top"><span className="service-icon"><Sparkles size={20}/></span><span className="service-number">0{['business','portfolio','ecommerce','advanced'].indexOf(service.id)+1}</span></div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="service-price">{service.price}</div>
      <div className="service-audience"><strong>Best for</strong>{service.audience}</div>
      <ul>{service.features.map(feature => <li key={feature}><Check size={15}/>{feature}</li>)}</ul>
      {service.note && <div className="service-note">{service.note}</div>}
      <button className="button button-secondary full" onClick={() => onEnquire(service.id)}>Enquire about this <ArrowUpRight size={17}/></button>
    </motion.article>
  )
}
