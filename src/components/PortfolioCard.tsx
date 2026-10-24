import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { PortfolioProject } from '../data/portfolio'
import { BrowserMockup } from '../assets/mockups'

export function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <motion.article layout initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} className="portfolio-card">
      <div className="portfolio-preview"><BrowserMockup variant={project.variant}/><span className="demo-badge">Demo concept</span></div>
      <div className="portfolio-body"><div className="portfolio-meta"><span>{project.category}</span><span>Sample</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tech-list">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div><button className="text-button" type="button" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>Discuss a similar project <ArrowUpRight size={16}/></button></div>
    </motion.article>
  )
}
