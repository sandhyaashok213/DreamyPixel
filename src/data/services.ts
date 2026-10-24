export type ServiceId = 'business' | 'portfolio' | 'ecommerce' | 'advanced'

export type Service = {
  id: ServiceId
  title: string
  shortTitle: string
  price: string
  audience: string
  description: string
  features: string[]
  note?: string
  accent: 'pink' | 'blue' | 'peach' | 'lavender'
}

export const services: Service[] = [
  {
    id: 'business',
    title: 'Business Websites',
    shortTitle: 'Business Website',
    price: '₹3,000–₹8,000',
    audience: 'Restaurants, salons, boutiques, bakeries, tuition centres, and local shops.',
    description: 'A polished online home for local businesses that need a clear, mobile-friendly presence.',
    features: ['Homepage', 'About & services sections', 'Contact information', 'WhatsApp enquiry button', 'Contact form', 'Responsive design', 'Optional Google Maps integration'],
    accent: 'pink',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Websites',
    shortTitle: 'Portfolio Website',
    price: '₹2,000–₹6,000',
    audience: 'Students, developers, photographers, designers, and freelancers.',
    description: 'A focused portfolio that presents your work, skills, story, and contact details with personality.',
    features: ['Personal introduction', 'Skills & experience', 'Projects gallery', 'Resume link', 'Social links', 'Contact section', 'Responsive design'],
    accent: 'blue',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Websites',
    shortTitle: 'E-commerce Website',
    price: '₹8,000–₹25,000+',
    audience: 'Clothing shops, jewellery stores, boutiques, and online sellers.',
    description: 'A storefront experience for showcasing products, categories, and order enquiries online.',
    features: ['Product listings', 'Product categories', 'Product details', 'Shopping cart interface', 'Mobile-friendly layouts', 'Order enquiry options', 'Optional checkout & payment integration'],
    note: 'Payment gateways, hosting, domain registration, inventory integrations, and third-party services may involve additional costs. A demo cart is not a real payment system.',
    accent: 'peach',
  },
  {
    id: 'advanced',
    title: 'Advanced Websites & AI Tools',
    shortTitle: 'Advanced / AI Tools',
    price: '₹10,000–₹40,000+',
    audience: 'Startups and businesses needing custom digital solutions.',
    description: 'Custom web applications and productivity tools for more involved workflows and integrations.',
    features: ['Admin dashboards', 'Booking systems', 'Business management applications', 'Database-driven websites', 'AI chatbots', 'AI-powered productivity tools', 'Custom API integrations'],
    note: 'Custom Quote — actual cost depends on requirements, integrations, and delivery scope.',
    accent: 'lavender',
  },
]

export const budgetOptions = ['Under ₹5,000', '₹5,000–₹10,000', '₹10,000–₹20,000', '₹20,000–₹40,000', '₹40,000+ / Custom']
