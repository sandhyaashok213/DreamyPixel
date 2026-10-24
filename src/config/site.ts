export const siteConfig = {
  name: 'Dreamy Pixel Studio',
  email: 'dreamypixel1504@gmail.com',
  tagline: 'Beautiful Websites. Creative Designs. Real Growth.',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER ?? '',
} as const

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const
