import { useState } from 'react'
import { Brain, AlertCircle, CheckCircle, ArrowRight, RotateCcw } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const questions = [
  {
    id: 1,
    text: '웃을 수 있었고, 사물의 재미있는 면을 볼 수 있었다.',
    reversed: true,
    options: ['항상 그럴 수 있었다', '대부분 그럴 수 있었다', '별로 그렇지 못했다', '전혀 그럴 수 없었다'],
  },
  {
    id: 2,
    text: '앞날에 대해 기쁜 마음으로 기대할 수 있었다.',
    reversed: true,
    options: ['예전처럼 그럴 수 있었다', '예전보다 좀 덜 했다', '예전보다 상당히 덜 했다', '거의 그럴 수 없었다'],
  },
  {
    id: 3,
    text: '일이 잘못될 때, 필요 이상으로 자신을 탓했다.',
    reversed: false,
    options: ['아니다, 전혀 그렇지 않았다', '거의 그렇지 않았다', '때때로 그랬다', '예, 대부분 그랬다'],
  },
  {
    id: 4,
    text: '특별한 이유 없이 불안하거나 걱정이 되었다.',
    reversed: false,
    options: ['아니다, 그렇지 않았다', '거의 그렇지 않았다', '때때로 그랬다', '매우 자주 그랬다'],
  },
  {
    id: 5,
    text: '특별한 이유 없이 무섭거나 두려웠다.',
    reversed: false,
    options: ['아니다, 전혀 그렇지 않았다', '가끔 그랬다', '자주 그랬다', '매우 자주 그랬다'],
  },
  {
    id: 6,
    text: '별것도 아닌 일이 너무 벅차게 느껴졌다.',
    reversed: false,
    options: ['아니다, 아주 잘 해냈다', '대부분 잘 해냈다', '때로는 평소만큼 잘 못 했다', '아니다, 거의 처리할 수 없었다'],
  },
  {
    id: 7,
    text: '너무 불행하여 잠을 잘 자지 못했다.',
    reversed: false,
    options: ['아니다, 전혀 그렇지 않았다', '자주 그렇지 않았다', '때때로 그랬다', '대부분 그랬다'],
  },
  {
    id: 8,
    text: '슬프거나 비참하다는 느낌이 들었다.',
    reversed: false,
    options: ['아니다, 전혀 그렇지 않았다', '자주 그렇지 않았다', '꽤 자주 그랬다', '대부분 그랬다'],
  },
  {
    id: 9,
    text: '너무 불행하여 울었다.',
    reversed: false,
    options: ['아니다, 전혀 그렇지 않았다', '가끔 그랬다', '자주 그랬다', '대부분 그랬다'],
  },
  {
    id: 10,
    text: '자해를 하겠다는 생각이 들었다.',
    reversed: false,
    options: ['전혀 그런 생각이 없었다', '거의 없었다', '때때로 그랬다', '자주 그랬다'],
    warning: true,
  },
]

function calcScore(answers) {
  let total = 0
  questions.forEach(q => {
    const val = answers[q.id]
    if (val === undefined) return
    const score = q.reversed ? 3 - val : val
    total += score
  })
  return total
}

function getResult(score) {
  if (score <= 8) return {
    level: '정상 범위',
    color: 'var(--teal)',
    bg: 'var(--teal-50)',
    border: '#2A8B8B',
    desc: '현재 산후우울증 증상이 낮은 수준입니다. 규칙적인 수면, 운동, 사회적 지지를 유지하세요.',
    icon: CheckCircle,
  }
  if (score <= 12) return {
    level: '경미한 수준',
    color: 'var(--mustard)',
    bg: 'var(--mustard-50)',
    border: '#E8BC3A',
    desc: '경미한 산후우울 증상이 있습니다. 스트레스 관리와 충분한 휴식이 중요합니다. 가까운 사람에게 도움을 요청해보세요.',
    icon: AlertCircle,
  }
  return {
    level: '주의 필요',
    color: 'var(--coral)',
    bg: 'var(--coral-50)',
    border: '#F59595',
    desc: '전문 상담이 필요할 수 있습니다. 가까운 정신건강복지센터 또는 산부인과를 방문해 전문가 상담을 받아보세요.',
    icon: AlertCircle,
  }
}

export default function DepressionCheck() {
  const { isDark } = useTheme()
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [current, setCurrent] = useState(0)

  const answered = Object.keys(answers).length
  const allAnswered = answered === questions.length
  const score = calcScore(answers)
  const result = getResult(score)
  const ResultIcon = result.icon

  const handleAnswer = (qId, val) => {
    setAnswers(prev => ({ ...prev, [qId]: val }))
    if (current < questions.length - 1) {
      setTimeout(() => setCurrent(c => c + 1), 300)
    }
  }

  const reset = () => { setAnswers({}); setSubmitted(false); setCurrent(0) }

  if (submitted) {
    return (
      <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh', padding: '48px 24px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: 'var(--surface)', borderRadius: '20px', padding: '40px',
            border: `2px solid ${result.border}`, textAlign: 'center',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          }}>
            <div style={{
              width: '72px', height: '72px', borderRadius: '50%',
              backgroundColor: result.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px',
            }}>
              <ResultIcon size={36} color={result.color} />
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>검사 결과</div>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: result.color, margin: '0 0 8px' }}>
              {result.level}
            </h2>
            <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--text)', margin: '0 0 24px' }}>
              {score}점 <span style={{ fontSize: '16px', color: 'var(--text-muted)', fontWeight: '400' }}>/ 30점</span>
            </div>

            {/* Score bar */}
            <div style={{ backgroundColor: 'var(--surface-alt)', borderRadius: '8px', height: '12px', marginBottom: '8px', position: 'relative', overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: '8px',
                width: `${(score / 30) * 100}%`,
                backgroundColor: result.color,
                transition: 'width 0.8s ease',
              }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '28px' }}>
              <span>0 (정상)</span><span>9</span><span>13</span><span>30 (주의)</span>
            </div>

            <p style={{ fontSize: '15px', color: 'var(--text)', lineHeight: '1.7', margin: '0 0 32px', padding: '16px', backgroundColor: result.bg, borderRadius: '12px' }}>
              {result.desc}
            </p>

            {answers[10] >= 2 && (
              <div style={{ backgroundColor: 'var(--coral-50)', border: '1px solid var(--coral-l)', borderRadius: '12px', padding: '16px', marginBottom: '24px', fontSize: '14px', color: isDark ? 'var(--coral)' : '#7F1D1D', lineHeight: '1.6' }}>
                <strong>긴급 안내:</strong> 자해 관련 생각이 있으신 경우, 즉시 정신건강 위기상담 전화 <strong>1577-0199</strong>로 연락하시거나 가까운 응급실을 방문해 주세요.
              </div>
            )}

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={reset}
                style={{
                  display: 'flex', alignItems: 'center', gap: '6px', padding: '12px 24px',
                  borderRadius: '10px', border: '2px solid var(--border)', background: 'var(--surface)',
                  cursor: 'pointer', fontSize: '14px', fontWeight: '600', color: 'var(--text)',
                }}
              >
                <RotateCcw size={16} /> 다시 검사
              </button>
              <a
                href="tel:1577-0199"
                style={{
                  display: 'flex', alignItems: 'center', gap: '6px', padding: '12px 24px',
                  borderRadius: '10px', border: 'none', backgroundColor: 'var(--teal)',
                  cursor: 'pointer', fontSize: '14px', fontWeight: '600', color: '#fff',
                  textDecoration: 'none',
                }}
              >
                전문가 상담 <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const q = questions[current]

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: isDark ? 'linear-gradient(135deg, #1C1400, #252000)' : 'linear-gradient(135deg, #D4A422, #E8BC3A)', padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,255,255,0.2)', padding: '6px 16px', borderRadius: '24px', color: '#fff', fontSize: '13px', fontWeight: '600', marginBottom: '20px' }}>
            <Brain size={14} /> EPDS 산후우울 자가검사
          </div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: '700', margin: '0 0 12px' }}>
            마음의 신호를<br />확인해보세요
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
            에딘버러 산후우울 척도(EPDS) 기반의 자가검사입니다.<br />
            지난 7일 동안의 상태를 기준으로 답해주세요.
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section style={{ padding: '48px 24px 64px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>

          {/* Progress */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-sub)', marginBottom: '8px' }}>
              <span>질문 {current + 1} / {questions.length}</span>
              <span>답변 완료: {answered}개</span>
            </div>
            <div style={{ backgroundColor: 'var(--border)', borderRadius: '8px', height: '8px', overflow: 'hidden' }}>
              <div style={{ height: '100%', backgroundColor: 'var(--mustard)', borderRadius: '8px', width: `${((current + 1) / questions.length) * 100}%`, transition: 'width 0.3s' }} />
            </div>
          </div>

          {/* Question Card */}
          <div style={{ backgroundColor: 'var(--surface)', borderRadius: '20px', padding: '36px', border: '1px solid var(--border)', marginBottom: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
            {q.warning && (
              <div style={{ backgroundColor: 'var(--coral-50)', border: '1px solid var(--coral-l)', borderRadius: '8px', padding: '10px 14px', marginBottom: '20px', fontSize: '13px', color: isDark ? 'var(--coral)' : '#7F1D1D' }}>
                이 질문은 민감한 내용을 포함합니다. 편안하게 솔직하게 답변해주세요.
              </div>
            )}
            <p style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text)', lineHeight: '1.5', margin: '0 0 28px' }}>
              {current + 1}. {q.text}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(q.id, i)}
                  style={{
                    padding: '14px 18px', borderRadius: '10px', textAlign: 'left',
                    border: `2px solid ${answers[q.id] === i ? 'var(--mustard)' : 'var(--border)'}`,
                    backgroundColor: answers[q.id] === i ? (isDark ? 'var(--surface-alt)' : '#FDF6E3') : 'var(--surface)',
                    cursor: 'pointer', fontSize: '15px', color: 'var(--text)',
                    transition: 'all 0.15s', fontFamily: 'inherit',
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between' }}>
            <button
              onClick={() => setCurrent(c => Math.max(0, c - 1))}
              disabled={current === 0}
              style={{
                padding: '12px 24px', borderRadius: '10px', border: '2px solid var(--border)',
                background: 'var(--surface)', cursor: current === 0 ? 'not-allowed' : 'pointer',
                fontSize: '14px', fontWeight: '600', color: 'var(--text)', opacity: current === 0 ? 0.4 : 1,
              }}
            >
              이전
            </button>
            {current < questions.length - 1 ? (
              <button
                onClick={() => setCurrent(c => Math.min(questions.length - 1, c + 1))}
                style={{
                  padding: '12px 24px', borderRadius: '10px', border: 'none',
                  backgroundColor: 'var(--teal)', cursor: 'pointer',
                  fontSize: '14px', fontWeight: '600', color: '#fff',
                  display: 'flex', alignItems: 'center', gap: '6px',
                }}
              >
                다음 <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                disabled={!allAnswered}
                style={{
                  padding: '12px 24px', borderRadius: '10px', border: 'none',
                  backgroundColor: allAnswered ? 'var(--mustard)' : '#D1D5DB',
                  cursor: allAnswered ? 'pointer' : 'not-allowed',
                  fontSize: '14px', fontWeight: '700', color: allAnswered ? 'var(--teal)' : 'var(--text-muted)',
                  display: 'flex', alignItems: 'center', gap: '6px',
                }}
              >
                결과 보기 <ArrowRight size={16} />
              </button>
            )}
          </div>

          <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)', marginTop: '24px', lineHeight: '1.6' }}>
            본 검사는 참고용이며 의학적 진단을 대체하지 않습니다.<br />
            결과에 관계없이 불편함을 느끼신다면 전문가와 상담하세요.
          </p>
        </div>
      </section>
    </div>
  )
}
