import { useState, useRef, useEffect } from 'react'
import { Bot, Send, User, Sparkles, RefreshCw } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const presets = [
  '생후 2개월 아기가 밤에 자주 깨요. 어떻게 하면 좋을까요?',
  '산후 4주인데 모유 수유가 너무 힘들어요',
  '아이가 분유를 잘 안 먹는데 걱정돼요',
  '육아 스트레스가 너무 심한데 어떻게 해야 할까요?',
  '생후 1개월 아기 수면 교육 시작해도 될까요?',
  '신생아 복통 신호 어떻게 구별하나요?',
]

const fakeResponses = {
  default: [
    '안녕하세요! 아이봄 AI 코치입니다. 육아에 관한 무엇이든 질문해 주세요.',
    '좋은 질문이에요! 전문가들의 견해와 최신 연구를 바탕으로 답변드릴게요.',
    '엄마의 마음이 느껴져요. 함께 생각해봐요.',
  ],
  sleep: `생후 2개월 아기의 잦은 야간 각성은 매우 정상적인 현상이에요. 이 시기 아기는 아직 일주기 리듬이 형성되지 않아 3~4시간마다 깨는 것이 일반적입니다.

**도움이 되는 방법들:**
• **일관된 취침 루틴** 만들기 — 목욕 → 수유 → 자장가 순서로
• **낮잠 패턴 관찰** — 낮에 너무 많이 자면 밤에 더 자주 깨요
• **배고픔 vs 편안함 욕구** 구별하기
• **화이트 노이즈** 활용 — 자궁 소리와 비슷해서 효과적이에요

3개월이 지나면 자연스럽게 더 긴 수면 구간이 생겨납니다. 지금은 아기의 신호에 응답해주는 것이 가장 중요해요. 힘내세요!`,
  breastfeeding: `산후 4주는 모유 수유에서 가장 힘든 시기 중 하나예요. 많은 엄마들이 비슷한 어려움을 겪으니 자책하지 마세요.

**지금 바로 확인해보세요:**
• **아기의 젖 물림(라치)** — 아기가 유두만이 아닌 유두 + 유륜을 충분히 물고 있는지 확인
• **수유 빈도** — 신생아는 2~3시간마다 수유 필요
• **유방 상태** — 유방울혈이나 유선염 증상이 있다면 빠른 치료 필요

**도움받을 수 있는 곳:**
모유수유 전문 상담사(IBCLC) 방문을 강력히 권장합니다. 직접 자세를 교정받으면 놀랍도록 빨리 개선돼요.`,
  stress: `육아 스트레스를 인정하고 도움을 요청하는 것 자체가 정말 용감한 일이에요. 엄마도 사람이기 때문에 힘든 것이 당연합니다.

**지금 당장 할 수 있는 것들:**
• **파트너 또는 가족에게 "지금 잠깐 쉬어야 해요"라고 말하기**
• 아기가 잘 때 같이 눕기 (집안일은 나중에!)
• 5분이라도 혼자만의 시간 갖기 — 산책, 좋아하는 음악

**중요한 것:** 스트레스가 너무 심하거나 2주 이상 지속된다면 산후우울증 체크를 해보시고, 필요하면 전문가 상담을 받으세요. 도움을 받는 것은 약함이 아니라 지혜예요.`,
}

function getResponse(text) {
  const lower = text.toLowerCase()
  if (lower.includes('밤에') || lower.includes('수면') || lower.includes('안 자') || lower.includes('깨')) {
    return fakeResponses.sleep
  }
  if (lower.includes('모유') || lower.includes('수유') || lower.includes('분유')) {
    return fakeResponses.breastfeeding
  }
  if (lower.includes('스트레스') || lower.includes('힘들') || lower.includes('우울') || lower.includes('지쳐')) {
    return fakeResponses.stress
  }
  return fakeResponses.default[Math.floor(Math.random() * fakeResponses.default.length)]
}

function Message({ msg }) {
  const isBot = msg.role === 'bot'
  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', flexDirection: isBot ? 'row' : 'row-reverse', marginBottom: '16px' }}>
      <div style={{
        width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
        backgroundColor: isBot ? 'var(--teal)' : 'var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {isBot ? <Bot size={18} color="var(--mustard)" /> : <User size={18} color="var(--teal)" />}
      </div>
      <div style={{
        maxWidth: '75%',
        backgroundColor: isBot ? 'var(--surface)' : 'var(--teal)',
        border: isBot ? '1px solid var(--border)' : 'none',
        borderRadius: isBot ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
        padding: '14px 16px',
        fontSize: '14px',
        color: isBot ? 'var(--text)' : 'var(--bg)',
        lineHeight: '1.7',
        whiteSpace: 'pre-wrap',
      }}>
        {msg.text}
      </div>
    </div>
  )
}

const features = [
  { icon: '🕐', title: '24시간 응답', desc: '새벽 3시에도 즉시 답변' },
  { icon: '🎯', title: '맞춤 조언', desc: '아기 월령·상황에 맞는 답변' },
  { icon: '📚', title: '전문 지식', desc: '소아과·산부인과 최신 가이드 기반' },
  { icon: '🔒', title: '비밀 보장', desc: '대화 내용 암호화 보관' },
]

export default function AICoach() {
  const { isDark } = useTheme()
  const [messages, setMessages] = useState([
    { id: 1, role: 'bot', text: '안녕하세요! 아이봄 AI 코치예요 🌱\n\n출산·육아에 관한 어떤 질문이든 편하게 물어보세요. 아래 자주 묻는 질문을 선택하셔도 됩니다.' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = (text) => {
    const msg = text || input.trim()
    if (!msg || loading) return
    setInput('')
    setMessages(prev => [...prev, { id: Date.now(), role: 'user', text: msg }])
    setLoading(true)
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'bot', text: getResponse(msg) }])
      setLoading(false)
    }, 1000 + Math.random() * 600)
  }

  const reset = () => {
    setMessages([{ id: 1, role: 'bot', text: '새 대화를 시작합니다. 무엇이든 질문해 주세요!' }])
  }

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: isDark ? 'linear-gradient(to bottom, #061A10, #0A2518)' : 'linear-gradient(to bottom, #0F6E56, #1D9E75)', padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(212,164,34,0.2)', border: '1px solid rgba(212,164,34,0.3)', padding: '6px 16px', borderRadius: '24px', color: '#E8BC3A', fontSize: '13px', fontWeight: '600', marginBottom: '20px' }}>
            <Sparkles size={14} /> AI 육아코치
          </div>
          <h1 style={{ color: 'var(--bg)', fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: '700', margin: '0 0 12px' }}>
            24시간 육아 파트너<br />AI 코치와 대화하세요
          </h1>
          <p style={{ color: '#C0E8E8', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
            새벽에 갑자기 아이가 울어도, 수유 고민이 생겨도<br />아이봄 AI 코치가 항상 곁에 있어요.
          </p>
        </div>
      </section>

      {/* Feature pills */}
      <section style={{ padding: '24px', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {features.map(({ icon, title, desc }) => (
            <div key={title} style={{
              display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 20px',
              backgroundColor: 'var(--surface)', borderRadius: '40px', border: '1px solid var(--border)',
              fontSize: '14px',
            }}>
              <span style={{ fontSize: '18px' }}>{icon}</span>
              <div>
                <span style={{ fontWeight: '600', color: 'var(--teal)' }}>{title}</span>
                <span style={{ color: 'var(--text-muted)', marginLeft: '6px' }}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chat */}
      <section style={{ padding: '32px 24px 64px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ backgroundColor: 'var(--surface)', borderRadius: '20px', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: '0 4px 20px rgba(27,107,107,0.08)' }}>

            {/* Chat header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '16px 20px', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--teal-50)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bot size={20} color="var(--mustard)" />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '15px', color: 'var(--text)' }}>아이봄 AI 코치</div>
                  <div style={{ fontSize: '12px', color: 'var(--teal)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22C55E', display: 'inline-block' }} />
                    온라인
                  </div>
                </div>
              </div>
              <button onClick={reset} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', padding: '6px 10px', borderRadius: '8px' }}>
                <RefreshCw size={14} /> 새 대화
              </button>
            </div>

            {/* Messages */}
            <div style={{ padding: '20px', height: '420px', overflowY: 'auto', backgroundColor: 'var(--bg-alt)' }}>
              {messages.map(msg => <Message key={msg.id} msg={msg} />)}
              {loading && (
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Bot size={18} color="var(--mustard)" />
                  </div>
                  <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px 16px 16px 16px', padding: '14px 18px' }}>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {[0, 1, 2].map(i => (
                        <div key={i} style={{
                          width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--teal)',
                          animation: `bounce 1.2s ${i * 0.2}s infinite`,
                        }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Presets */}
            <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
              <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
                {presets.map(p => (
                  <button
                    key={p}
                    onClick={() => send(p)}
                    style={{
                      flexShrink: 0, padding: '7px 14px', borderRadius: '20px',
                      border: '1px solid var(--teal-100)', backgroundColor: 'var(--teal-50)',
                      cursor: 'pointer', fontSize: '13px', color: 'var(--teal)', fontFamily: 'inherit',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {p.length > 22 ? p.slice(0, 22) + '...' : p}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div style={{ padding: '16px 20px', borderTop: '1px solid var(--border)', backgroundColor: 'var(--surface)', display: 'flex', gap: '10px' }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
                placeholder="육아 고민을 입력하세요..."
                style={{
                  flex: 1, padding: '12px 16px', borderRadius: '12px',
                  border: '1px solid var(--border)', fontSize: '14px', outline: 'none',
                  fontFamily: 'inherit', backgroundColor: 'var(--input-bg)', color: 'var(--text)',
                }}
              />
              <button
                onClick={() => send()}
                disabled={!input.trim() || loading}
                style={{
                  width: '48px', height: '48px', borderRadius: '12px', border: 'none',
                  backgroundColor: input.trim() && !loading ? 'var(--teal)' : 'var(--border)',
                  cursor: input.trim() && !loading ? 'pointer' : 'not-allowed',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}
              >
                <Send size={18} color="#fff" />
              </button>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)', marginTop: '16px' }}>
            AI 답변은 참고용이며 의학적 진단이나 처방을 대체하지 않습니다. 응급 상황 시 119에 연락하세요.
          </p>
        </div>
      </section>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  )
}
