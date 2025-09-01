import { Menu } from 'lucide-react'

const FratelliNav = ({ onMenuClick }) => {
  return (
    <nav className="flex items-center justify-between px-4 nav-wrapper" style={{ height: '86px', background: '#fffff8' }}>
      <div
        className="nav-title text-white uppercase tracking-wider font-bold"
        style={{ fontSize: '28px' }}
      >
        Fratelli
      </div>

      <button
        aria-label="Open menu"
        onClick={onMenuClick}
        className="nav-icon text-white focus:outline-none"
      >
        <Menu />
      </button>
    </nav>
  )
}

export default FratelliNav
