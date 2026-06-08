import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Leaf } from 'lucide-react'

const navItems = [
  { path: '/recovery', label: '회복루틴' },
  { path: '/tracker', label: '수면·수유 기록' },
  { path: '/depression-check', label: '산후우울 체크' },
  { path: '/ai-coach', label: 'AI 육아코치' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header style={{ backgroundColor: '#1B6B6B', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '50%',
              backgroundColor: '#D4A422', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Leaf size={20} color="#1B6B6B" strokeWidth={2.5} />
            </div>
            <span style={{ color: '#FFF8EF', fontSize: '20px', fontWeight: '700', letterSpacing: '-0.5px' }}>
              아이봄
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="hidden-mobile">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'background 0.15s',
                  color: pathname === path ? '#D4A422' : '#E0F2F2',
                  backgroundColor: pathname === path ? 'rgba(212,164,34,0.12)' : 'transparent',
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/ai-coach"
              style={{
                marginLeft: '8px',
                padding: '9px 20px',
                borderRadius: '24px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '600',
                backgroundColor: '#D4A422',
                color: '#1B6B6B',
              }}
            >
              무료 시작하기
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'none' }}
            className="show-mobile"
            aria-label="메뉴 열기"
          >
            {open ? <X color="#FFF8EF" size={24} /> : <Menu color="#FFF8EF" size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div style={{ paddingBottom: '16px', display: 'none' }} className="show-mobile">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: '500',
                  color: pathname === path ? '#D4A422' : '#E0F2F2',
                  backgroundColor: pathname === path ? 'rgba(212,164,34,0.12)' : 'transparent',
                  marginBottom: '2px',
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/ai-coach"
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                marginTop: '8px',
                padding: '12px 16px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '600',
                backgroundColor: '#D4A422',
                color: '#1B6B6B',
                textAlign: 'center',
              }}
            >
              무료 시작하기
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  )
}
