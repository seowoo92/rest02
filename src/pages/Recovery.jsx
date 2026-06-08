import { useState } from 'react'
import { CheckCircle, Circle, Heart, Apple, Dumbbell, Wind, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const weeklyProgram = [
  {
    week: '1~2주차',
    title: '안정과 회복',
    focus: '충분한 휴식, 상처 회복',
    color: 'var(--coral)',
    bg: '#FEF0F0',
    items: [
      { icon: Heart, text: '하루 10시간 이상 휴식 취하기' },
      { icon: Apple, text: '고단백 식사 — 닭가슴살, 두부, 달걀' },
      { icon: Wind, text: '복식호흡 5분, 하루 3회' },
      { icon: Heart, text: '회음부 또는 제왕절개 상처 관리' },
    ],
  },
  {
    week: '3~4주차',
    title: '가벼운 활동 시작',
    focus: '혈액순환 촉진, 부종 감소',
    color: 'var(--mustard)',
    bg: '#FDF6E3',
    items: [
      { icon: Dumbbell, text: '케겔 운동 10회 × 3세트 (일 2회)' },
      { icon: Sun, text: '실내 걷기 10~15분' },
      { icon: Apple, text: '수분 섭취 하루 2리터 이상' },
      { icon: Wind, text: '스트레칭 — 목, 어깨, 허리 위주' },
    ],
  },
  {
    week: '5~6주차',
    title: '체력 회복',
    focus: '근력 회복, 체형 관리 시작',
    color: 'var(--teal)',
    bg: '#EFF8F8',
    items: [
      { icon: Dumbbell, text: '산후 필라테스 or 요가 (20분)' },
      { icon: Sun, text: '야외 산책 20~30분' },
      { icon: Apple, text: '철분 · 칼슘 영양제 섭취' },
      { icon: Heart, text: '6주 산후 검진 받기' },
    ],
  },
  {
    week: '7~8주차',
    title: '일상 복귀 준비',
    focus: '체력 강화, 정서 안정',
    color: 'var(--coral)',
    bg: '#FEF0F0',
    items: [
      { icon: Dumbbell, text: '유산소 운동 30분 (주 3회)' },
      { icon: Heart, text: '사회적 연결 — 친구·가족과 외출' },
      { icon: Wind, text: '명상 또는 마음챙김 10분' },
      { icon: Apple, text: '수면 루틴 확립 — 아이와 함께 자기' },
    ],
  },
]

const dailyTips = [
  { title: '아침', tips: ['기상 후 따뜻한 물 한 잔', '가벼운 스트레칭 5분', '영양가 있는 아침 식사'] },
  { title: '낮', tips: ['아이 낮잠 시간에 함께 휴식', '15~20분 햇볕 쬐기', '수분 보충'] },
  { title: '저녁', tips: ['따뜻한 반신욕 (20분)', '감사 일기 쓰기', '11시 이전 취침'] },
]

export default function Recovery() {
  const [checked, setChecked] = useState({})
  const { isDark } = useTheme()

  const toggle = (key) => setChecked(prev => ({ ...prev, [key]: !prev[key] }))

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: isDark ? 'linear-gradient(135deg, #3D1010, #4A1A1A)' : 'linear-gradient(135deg, #F07070, #F59595)', padding: '56px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,255,255,0.2)', padding: '6px 16px', borderRadius: '24px', color: 'var(--surface)', fontSize: '13px', fontWeight: '600', marginBottom: '20px' }}>
            <Heart size={14} /> 출산 후 회복루틴
          </div>
          <h1 style={{ color: 'var(--surface)', fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: '700', margin: '0 0 16px', letterSpacing: '-0.5px' }}>
            내 몸을 되찾는<br />8주 회복 프로그램
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>
            출산 후 신체는 큰 변화를 겪습니다. 단계별 회복루틴으로<br />안전하고 효과적으로 건강을 회복하세요.
          </p>
        </div>
      </section>

      {/* Weekly Program */}
      <section style={{ padding: '56px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--teal)', margin: '0 0 8px', textAlign: 'center' }}>주차별 회복 프로그램</h2>
          <p style={{ color: 'var(--text-sub)', fontSize: '15px', textAlign: 'center', marginBottom: '40px' }}>
            각 항목을 체크하며 오늘의 루틴을 완성해보세요
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {weeklyProgram.map(({ week, title, focus, color, bg, items }) => (
              <div key={week} style={{ backgroundColor: 'var(--surface)', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                <div style={{ backgroundColor: isDark ? 'var(--surface-alt)' : bg, padding: '20px 24px', borderBottom: `3px solid ${color}` }}>
                  <div style={{ fontSize: '12px', fontWeight: '600', color, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{week}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text)', margin: '0 0 4px' }}>{title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-sub)', margin: 0 }}>{focus}</p>
                </div>
                <div style={{ padding: '20px 24px' }}>
                  {items.map(({ icon: Icon, text }, idx) => {
                    const key = `${week}-${idx}`
                    const done = checked[key]
                    return (
                      <button
                        key={idx}
                        onClick={() => toggle(key)}
                        style={{
                          display: 'flex', alignItems: 'flex-start', gap: '12px',
                          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                          padding: '10px 0', textAlign: 'left', borderBottom: idx < items.length - 1 ? '1px solid var(--border-light)' : 'none',
                        }}
                      >
                        {done
                          ? <CheckCircle size={20} color={color} fill={color} style={{ flexShrink: 0, marginTop: '1px' }} />
                          : <Circle size={20} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '1px' }} />
                        }
                        <span style={{ fontSize: '14px', color: done ? 'var(--text-muted)' : 'var(--text)', textDecoration: done ? 'line-through' : 'none', lineHeight: '1.5' }}>
                          {text}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Tips */}
      <section style={{ padding: '0 24px 64px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--teal)', margin: '0 0 8px', textAlign: 'center' }}>하루 루틴 가이드</h2>
          <p style={{ color: 'var(--text-sub)', fontSize: '15px', textAlign: 'center', marginBottom: '40px' }}>
            하루를 아침·낮·저녁으로 나누어 실천해보세요
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {dailyTips.map(({ title, tips }) => (
              <div key={title} style={{
                backgroundColor: 'var(--surface)', borderRadius: '16px', padding: '28px 24px',
                border: '1px solid var(--border)',
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--teal)', margin: '0 0 16px' }}>{title}</h3>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {tips.map(tip => (
                    <li key={tip} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--text)', lineHeight: '1.5' }}>
                      <span style={{ color: 'var(--mustard)', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice */}
      <div style={{ maxWidth: '1100px', margin: '0 24px 48px', padding: '20px 24px', backgroundColor: isDark ? 'var(--mustard-50)' : '#FDF6E3', border: '1px solid var(--mustard-l)', borderRadius: '12px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '20px' }}>⚠️</span>
        <p style={{ margin: 0, fontSize: '14px', color: isDark ? 'var(--mustard)' : '#6B4C00', lineHeight: '1.6' }}>
          본 프로그램은 일반적인 산후 회복 가이드입니다. 제왕절개, 합병증, 특수 상황이 있는 경우 반드시 의료진과 상담 후 진행하세요.
        </p>
      </div>
    </div>
  )
}
