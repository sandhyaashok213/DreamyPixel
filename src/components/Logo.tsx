import logoMark from '../assets/logo-mark.svg'

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="brand-logo" aria-label="Dreamy Pixel Studio home">
      <img src={logoMark} alt="" className={compact ? 'brand-mark compact' : 'brand-mark'} />
      <span className="brand-wordmark">
        <span><strong>Dreamy</strong> <em>Pixel</em></span>
        {!compact && <small>STUDIO</small>}
      </span>
    </a>
  )
}
