import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { PortfolioCard } from '../components/PortfolioCard'
import { portfolioProjects, type PortfolioCategory } from '../data/portfolio'

const filters = ['All', 'Business', 'Portfolio', 'E-commerce', 'AI Tools'] as const
export function Portfolio(){ const [filter,setFilter]=useState<typeof filters[number]>('All'); const projects=useMemo(()=>filter==='All'?portfolioProjects:portfolioProjects.filter(p=>p.category===filter),[filter]); return <section id="portfolio" className="section-pad section-lavender"><div className="container"><SectionHeading eyebrow="Selected concepts" title="A glimpse of what Dreamy Pixel can create." description="These are clearly labelled demo concepts, not client work or live projects."/><div className="filter-row" role="group" aria-label="Portfolio categories">{filters.map(item=><button key={item} className={filter===item?'active':''} onClick={()=>setFilter(item)}>{item}</button>)}</div><div className="portfolio-grid"><AnimatePresence mode="popLayout">{projects.map(project=><PortfolioCard key={project.id} project={project}/>)}</AnimatePresence></div></div></section> }
