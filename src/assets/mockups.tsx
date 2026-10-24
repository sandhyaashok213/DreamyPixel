import type { ReactNode } from 'react'

const palettes = {
  restaurant: ['#FFF0E7', '#E66D4A'],
  salon: ['#FFDDF0', '#C44B93'],
  developer: ['#E5EEFF', '#4966D5'],
  fashion: ['#F6F0FF', '#7B52C9'],
  coaching: ['#EDE5FF', '#6338D6'],
  dashboard: ['#E7F7F1', '#277E6A'],
} as const

export function BrowserMockup({ variant }: { variant: keyof typeof palettes }) {
  const [soft, strong] = palettes[variant]
  const isDashboard = variant === 'dashboard'
  const isDeveloper = variant === 'developer'
  return (
    <div className="mockup-shell" aria-hidden="true">
      <div className="mockup-browser">
        <div className="mockup-toolbar"><span/><span/><span/><div className="mockup-address"/></div>
        <div className="mockup-page" style={{ background: soft }}>
          <div className="mockup-nav"><div className="mockup-logo" style={{ background: strong }}/><div className="mockup-links"><i/><i/><i/></div></div>
          {isDashboard ? <DashboardPreview strong={strong} /> : isDeveloper ? <DeveloperPreview strong={strong}/> : <LandingPreview strong={strong}/>} 
        </div>
      </div>
    </div>
  )
}

function LandingPreview({ strong }: { strong: string }) {
  return <>
    <div className="mockup-hero"><div><div className="mockup-kicker" style={{ color: strong }}/><div className="mockup-title"/><div className="mockup-title short"/><div className="mockup-copy"/><div className="mockup-button" style={{ background: strong }}/></div><div className="mockup-photo" style={{ background: `linear-gradient(135deg, ${strong}, #fff)` }}/></div>
    <div className="mockup-cards"><span/><span/><span/></div>
  </>
}

function DeveloperPreview({ strong }: { strong: string }) {
  return <div className="mockup-dev"><div className="mockup-avatar" style={{ background: strong }}/><div className="mockup-title"/><div className="mockup-title short"/><div className="mockup-copy"/><div className="mockup-dev-grid"><span/><span/><span/></div></div>
}

function DashboardPreview({ strong }: { strong: string }) {
  return <div className="mockup-dashboard"><aside><b style={{ background: strong }}/><i/><i/><i/><i/></aside><main><div className="mockup-dash-top"><span/><span/><span/></div><div className="mockup-chart"><div style={{ background: strong }}/><div style={{ background: strong }}/><div style={{ background: strong }}/><div style={{ background: strong }}/><div style={{ background: strong }}/></div><div className="mockup-stats"><span/><span/></div></main></div>
}

export function DecorativePixel({ children }: { children?: ReactNode }) { return <span className="decorative-pixel">{children}</span> }
