export type PortfolioCategory = 'Business' | 'Portfolio' | 'E-commerce' | 'AI Tools'

export type PortfolioProject = {
  id: number
  title: string
  category: PortfolioCategory
  description: string
  technologies: string[]
  variant: 'restaurant' | 'salon' | 'developer' | 'fashion' | 'coaching' | 'dashboard'
}

export const portfolioProjects: PortfolioProject[] = [
  { id: 1, title: 'Good Food Restaurant', category: 'Business', description: 'A warm restaurant landing page with menu highlights, story, and enquiry-focused CTAs.', technologies: ['React', 'Tailwind CSS'], variant: 'restaurant' },
  { id: 2, title: 'Bloom Beauty Studio', category: 'Business', description: 'A soft, appointment-friendly salon concept with service cards and a polished visual identity.', technologies: ['React', 'Responsive UI'], variant: 'salon' },
  { id: 3, title: 'Arjun Dev Portfolio', category: 'Portfolio', description: 'A developer portfolio concept focused on projects, capabilities, and a clear contact path.', technologies: ['React', 'TypeScript'], variant: 'developer' },
  { id: 4, title: 'Lumière Fashion', category: 'E-commerce', description: 'A boutique storefront concept for product discovery, categories, and order enquiries.', technologies: ['React', 'Cart UI'], variant: 'fashion' },
  { id: 5, title: 'BrightPath Coaching', category: 'Business', description: 'A coaching-centre website concept designed to make programmes and enquiries easy to explore.', technologies: ['React', 'SEO-ready'], variant: 'coaching' },
  { id: 6, title: 'Pulse AI Dashboard', category: 'AI Tools', description: 'A SaaS-style dashboard concept for insights, workflow metrics, and AI-assisted actions.', technologies: ['React', 'Charts UI'], variant: 'dashboard' },
]
