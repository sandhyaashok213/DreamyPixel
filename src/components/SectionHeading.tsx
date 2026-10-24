import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, description, align = 'center' }: { eyebrow: string; title: string; description?: string; align?: 'center' | 'left' }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} className={`section-heading ${align === 'left' ? 'text-left' : ''}`}>
      <span className="eyebrow"><i/> {eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  )
}
