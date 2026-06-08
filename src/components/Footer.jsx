import { Link } from 'react-router-dom'
import { Leaf, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text)', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '40px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--mustard)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Leaf size={18} color="var(--teal)" strokeWidth={2.5} />
              </div>
              <span style={{ color: 'var(--bg)', fontSize: '18px', fontWeight: '700' }}>아이봄</span>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
              출산 후 회복부터 AI 육아 코칭까지,<br />
              엄마와 아이의 건강한 출발을 함께합니다.
            </p>
            <p style={{ fontSize: '12px', marginTop: '12px', color: 'var(--footer-text)', opacity: 0.7 }}>
              개업일: 2026년 6월 8일
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'var(--bg)', fontSize: '14px', fontWeight: '600', marginBottom: '16px', marginTop: 0 }}>서비스</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { to: '/recovery', label: '출산 후 회복루틴' },
                { to: '/tracker', label: '수면·수유 기록' },
                { to: '/depression-check', label: '산후우울 체크' },
                { to: '/ai-coach', label: 'AI 육아코치' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} style={{ color: 'var(--footer-text)', textDecoration: 'none', fontSize: '14px' }}
                    onMouseEnter={e => e.target.style.color = 'var(--mustard)'}
                    onMouseLeave={e => e.target.style.color = 'var(--footer-text)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'var(--bg)', fontSize: '14px', fontWeight: '600', marginBottom: '16px', marginTop: 0 }}>연락처</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                <Mail size={14} />
                <span>hello@ibom.kr</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                <Phone size={14} />
                <span>1588-0000</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px' }}>
                <MapPin size={14} style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>서울특별시 마포구<br />서울창업허브 3층</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <p style={{ margin: 0, fontSize: '13px' }}>© 2026 아이봄. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px', fontSize: '13px' }}>
            <span style={{ cursor: 'pointer' }}>개인정보처리방침</span>
            <span style={{ cursor: 'pointer' }}>이용약관</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
