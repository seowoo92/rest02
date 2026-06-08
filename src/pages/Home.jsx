import { Link } from 'react-router-dom'
import { Heart, Moon, Brain, Bot, ArrowRight, Star, CheckCircle } from 'lucide-react'
import HeroParticles from '../components/HeroParticles'

const services = [
  {
    icon: Heart,
    title: '출산 후 회복루틴',
    desc: '주차별 맞춤 회복 프로그램으로 몸과 마음의 균형을 찾아드립니다.',
    color: '#F07070',
    bg: '#FEF0F0',
    path: '/recovery',
  },
  {
    icon: Moon,
    title: '수면·수유 기록',
    desc: '아이의 수면과 수유 패턴을 기록하고, 전문 코칭 리포트를 받아보세요.',
    color: '#1B6B6B',
    bg: '#EFF8F8',
    path: '/tracker',
  },
  {
    icon: Brain,
    title: '산후우울 체크',
    desc: '산후우울증 자가진단으로 마음의 신호를 조기에 발견하고 케어하세요.',
    color: '#D4A422',
    bg: '#FDF6E3',
    path: '/depression-check',
  },
  {
    icon: Bot,
    title: 'AI 육아코치',
    desc: '24시간 AI가 육아 질문에 답하고, 개인 맞춤 육아 조언을 제공합니다.',
    color: '#1B6B6B',
    bg: '#EFF8F8',
    path: '/ai-coach',
  },
]

const stats = [
  { value: '2026.06.08', label: '개업일' },
  { value: '1,200+', label: '가입 회원' },
  { value: '98%', label: '만족도' },
  { value: '24/7', label: 'AI 코치 운영' },
]

const testimonials = [
  {
    name: '김지영 (8개월 아기 엄마)',
    text: '산후 회복루틴 덕분에 6주 만에 몸이 놀랍도록 회복됐어요. 체계적인 프로그램이 정말 큰 도움이 됐습니다.',
    rating: 5,
  },
  {
    name: '박수현 (첫째 임신 중)',
    text: 'AI 코치가 새벽 3시에도 답변해줘서 너무 든든해요. 혼자가 아니라는 느낌이 들어서 위안이 됩니다.',
    rating: 5,
  },
  {
    name: '이민정 (쌍둥이 엄마)',
    text: '수면 기록을 분석해서 아이 수면 패턴을 파악하는 데 큰 도움이 됐어요. 이제 수면 교육도 자신 있어졌어요!',
    rating: 5,
  },
]

export default function Home() {
  return (
    <div style={{ backgroundColor: '#FFF8EF' }}>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #1B6B6B 0%, #2A8B8B 60%, #145252 100%)',
        padding: '80px 24px 100px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212,164,34,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(240,112,112,0.1) 0%, transparent 40%)',
        }} />
        <HeroParticles />
        <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block', padding: '6px 16px', borderRadius: '24px',
            backgroundColor: 'rgba(212,164,34,0.2)', border: '1px solid rgba(212,164,34,0.4)',
            color: '#E8BC3A', fontSize: '13px', fontWeight: '600', marginBottom: '24px',
          }}>
            2026년 6월 개업 — 육아 코칭의 새로운 시작
          </div>
          <h1 style={{ color: '#FFF8EF', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '700', lineHeight: '1.2', margin: '0 0 24px', letterSpacing: '-1px' }}>
            엄마의 회복,<br />
            <span style={{ color: '#D4A422' }}>우리가 함께합니다</span>
          </h1>
          <p style={{ color: '#C0E8E8', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: '1.7', margin: '0 0 40px' }}>
            출산 후 회복루틴부터 수면·수유 기록, 산후우울 체크, AI 육아 코칭까지<br />
            엄마와 아이의 건강한 출발을 아이봄이 함께합니다.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/ai-coach" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', borderRadius: '28px',
              backgroundColor: '#D4A422', color: '#1B6B6B',
              fontWeight: '700', fontSize: '16px', textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(212,164,34,0.4)',
            }}>
              무료로 시작하기 <ArrowRight size={18} />
            </Link>
            <Link to="/recovery" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', borderRadius: '28px',
              backgroundColor: 'transparent',
              border: '2px solid rgba(255,248,239,0.4)',
              color: '#FFF8EF', fontWeight: '600', fontSize: '16px', textDecoration: 'none',
            }}>
              서비스 둘러보기
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#FFF8EF', padding: '40px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '0', borderRadius: '16px', overflow: 'hidden',
            border: '1px solid #E8D5BC', backgroundColor: '#fff',
            boxShadow: '0 2px 12px rgba(27,107,107,0.08)',
          }}>
            {stats.map(({ value, label }, i) => (
              <div key={label} style={{
                padding: '28px 16px', textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid #E8D5BC' : 'none',
              }}>
                <div style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: '700', color: '#1B6B6B', marginBottom: '4px' }}>{value}</div>
                <div style={{ fontSize: '13px', color: '#7B8FA0', fontWeight: '500' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '64px 24px', backgroundColor: '#FFF8EF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: '700', color: '#1B6B6B', margin: '0 0 12px', letterSpacing: '-0.5px' }}>
              아이봄의 핵심 서비스
            </h2>
            <p style={{ color: '#6B7280', fontSize: '16px', margin: 0 }}>
              엄마와 아이를 위한 4가지 전문 케어 서비스
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {services.map(({ icon: Icon, title, desc, color, bg, path }) => (
              <Link key={path} to={path} style={{ textDecoration: 'none' }}>
                <div style={{
                  backgroundColor: '#fff', borderRadius: '16px', padding: '32px 24px',
                  border: '1px solid #E8D5BC', transition: 'all 0.2s',
                  cursor: 'pointer', height: '100%',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(27,107,107,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '14px',
                    backgroundColor: bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '20px',
                  }}>
                    <Icon size={26} color={color} strokeWidth={1.8} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1a202c', margin: '0 0 10px' }}>{title}</h3>
                  <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', margin: '0 0 16px' }}>{desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color, fontWeight: '600', fontSize: '14px' }}>
                    자세히 보기 <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '64px 24px', backgroundColor: '#EFF8F8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: '700', color: '#1B6B6B', margin: '0 0 12px', letterSpacing: '-0.5px' }}>
            아이봄 이용 방법
          </h2>
          <p style={{ color: '#6B7280', fontSize: '16px', marginBottom: '48px' }}>
            3단계로 간단하게 시작하세요
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {[
              { step: '01', title: '무료 가입', desc: '이메일 하나로 30초 만에 가입 완료' },
              { step: '02', title: '프로필 설정', desc: '출산일, 수유 방법, 건강 상태를 입력하세요' },
              { step: '03', title: '맞춤 케어 시작', desc: 'AI가 분석한 개인 맞춤 루틴과 코칭을 받으세요' },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ textAlign: 'center', padding: '24px' }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  backgroundColor: '#1B6B6B', color: '#D4A422',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px', fontWeight: '700', margin: '0 auto 16px',
                }}>
                  {step}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1a202c', margin: '0 0 8px' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '64px 24px', backgroundColor: '#FFF8EF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: '700', color: '#1B6B6B', margin: '0 0 12px', letterSpacing: '-0.5px' }}>
              엄마들의 실제 이야기
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {testimonials.map(({ name, text, rating }) => (
              <div key={name} style={{
                backgroundColor: '#fff', borderRadius: '16px', padding: '28px 24px',
                border: '1px solid #E8D5BC',
              }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#D4A422" color="#D4A422" />
                  ))}
                </div>
                <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.7', margin: '0 0 20px' }}>
                  "{text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    backgroundColor: '#EFF8F8', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#1B6B6B', fontWeight: '700', fontSize: '14px',
                  }}>
                    {name[0]}
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        margin: '0 24px 64px', borderRadius: '24px',
        background: 'linear-gradient(135deg, #1B6B6B, #2A8B8B)',
        padding: '56px 32px', textAlign: 'center',
        maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto',
      }}>
        <h2 style={{ color: '#FFF8EF', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '700', margin: '0 0 16px' }}>
          지금 바로 시작하세요
        </h2>
        <p style={{ color: '#C0E8E8', fontSize: '16px', marginBottom: '32px' }}>
          가입 후 30일 무료 체험 — 신용카드 불필요
        </p>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
          {['회복루틴 제공', '수면·수유 기록', '산후우울 체크', 'AI 코치 24/7'].map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#C0E8E8', fontSize: '14px' }}>
              <CheckCircle size={14} color="#D4A422" />
              {item}
            </div>
          ))}
        </div>
        <Link to="/ai-coach" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '14px 32px', borderRadius: '28px',
          backgroundColor: '#D4A422', color: '#1B6B6B',
          fontWeight: '700', fontSize: '16px', textDecoration: 'none',
        }}>
          무료로 시작하기 <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  )
}
