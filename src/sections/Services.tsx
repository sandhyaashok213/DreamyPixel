import { SectionHeading } from '../components/SectionHeading'
import { ServiceCard } from '../components/ServiceCard'
import { services, type ServiceId } from '../data/services'

export function Services({ onEnquire }: { onEnquire: (id: ServiceId) => void }) {
  return <section id="services" className="section-pad section-soft"><div className="container"><SectionHeading eyebrow="What we build" title="Digital experiences made to fit your goals." description="Choose a focused website package or tell us what you need for a custom quote."/><div className="services-grid">{services.map(service => <ServiceCard key={service.id} service={service} onEnquire={onEnquire}/>)}</div><p className="pricing-disclaimer">Prices are indicative starting ranges. Final quotations depend on project scope, features, integrations, and delivery requirements.</p></div></section>
}
