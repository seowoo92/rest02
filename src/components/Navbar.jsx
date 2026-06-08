import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Leaf, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { path: '/recovery', label: '회복루틴' },
  { path: '/tracker', label: '수면·수유 기록' },
  { path: '/depression-check', label: '산후우울 체크' },
  { path: '/ai-coach', label: 'AI 육아코치' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { isDark, toggle } = useTheme()

  return (
    <header style={{ backgroundColor: 'var(--nav-bg)', boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '50%',
              backgroundColor: 'var(--mustard)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Leaf size={20} color="var(--nav-bg)" strokeWidth={2.5} />
            </div>
            <span style={{ color: 'var(--bg)', fontSize: '20px', fontWeight: '700', letterSpacing: '-0.5px' }}>
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
                  padding: '8px 16px', borderRadius: '8px', textDecoration: 'none',
                  fontSize: '14px', fontWeight: '500', transition: 'background 0.15s',
                  color: pathname === path ? 'var(--mustard)' : 'var(--nav-text)',
                  backgroundColor: pathname === path ? 'rgba(212,164,34,0.12)' : 'transparent',
                }}
              >
                {label}
              </Link>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
              title={isDark ? '라이트 모드' : '다크 모드'}
              style={{
                marginLeft: '4px',
                width: '36px', height: '36px', borderRadius: '50%',
                border: '1.5px solid rgba(255,255,255,0.2)',
                backgroundColor: 'rgba(255,255,255,0.08)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
                color: 'var(--nav-text)',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.18)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'}
            >
              {isDark
                ? <Sun size={16} color="var(--mustard)" strokeWidth={2} />
                : <Moon size={16} color="var(--nav-text)" strokeWidth={2} />
              }
            </button>

            <Link
              to="/ai-coach"
              style={{
                marginLeft: '8px', padding: '9px 20px', borderRadius: '24px',
                textDecoration: 'none', fontSize: '14px', fontWeight: '600',
                backgroundColor: 'var(--mustard)', color: 'var(--teal-dark)',
              }}
            >
              무료 시작하기
            </Link>
          </nav>

          {/* Mobile right controls */}
          <div style={{ display: 'none', alignItems: 'center', gap: '8px' }} className="show-mobile">
            <button
              onClick={toggle}
              aria-label={isDark ? '라이트 모드' : '다크 모드'}
              style={{
                width: '34px', height: '34px', borderRadius: '50%',
                border: '1.5px solid rgba(255,255,255,0.2)',
                backgroundColor: 'rgba(255,255,255,0.08)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              {isDark
                ? <Sun size={15} color="var(--mustard)" />
                : <Moon size={15} color="var(--nav-text)" />
              }
            </button>
            <button
              onClick={() => setOpen(!open)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
              aria-label="메뉴 열기"
            >
              {open ? <X color="var(--bg)" size={24} /> : <Menu color="var(--bg)" size={24} />}
            </button>
          </div>
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
                  display: 'block', padding: '12px 16px', borderRadius: '8px',
                  textDecoration: 'none', fontSize: '15px', fontWeight: '500',
                  color: pathname === path ? 'var(--mustard)' : 'var(--nav-text)',
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
                display: 'block', marginTop: '8px', padding: '12px 16px', borderRadius: '8px',
                textDecoration: 'none', fontSize: '15px', fontWeight: '600',
                backgroundColor: 'var(--mustard)', color: 'var(--teal-dark)', textAlign: 'center',
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
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
