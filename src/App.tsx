import { useState } from 'react'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'
import { WhyUs } from './sections/WhyUs'
import { Portfolio } from './sections/Portfolio'
import { Process } from './sections/Process'
import { Pricing } from './sections/Pricing'
import { About } from './sections/About'
import { Expect } from './sections/Expect'
import { Faq } from './sections/Faq'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import type { ServiceId } from './data/services'

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceId | ''>('')
  const enquire = (id: ServiceId) => {
    setSelectedService(id)
    requestAnimationFrame(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }
  return <div className="site-shell"><Header/><main><Hero/><Services onEnquire={enquire}/><WhyUs/><Portfolio/><Process/><Pricing onEnquire={enquire}/><About/><Expect/><Faq/><Contact selectedService={selectedService}/></main><Footer/></div>
}
