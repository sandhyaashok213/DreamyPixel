import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BrandLogo } from '../components/Logo'
import { navItems } from '../config/site'

export function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => { const close = () => setOpen(false); window.addEventListener('resize', close); return () => window.removeEventListener('resize', close) }, [])
  return <header className="site-header"><div className="container nav-inner"><BrandLogo/><nav className={open ? 'mobile-open' : ''} aria-label="Primary navigation">{navItems.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's Talk</a></nav><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? <X/> : <Menu/>}</button></div></header>
}
