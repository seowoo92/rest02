import { useState } from 'react'
import { Moon, Droplets, Plus, Trash2, Clock, TrendingUp } from 'lucide-react'

const TYPES = { sleep: '수면', feed: '수유' }

function formatTime(iso) {
  const d = new Date(iso)
  return d.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
}

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('ko-KR', { month: 'long', day: 'numeric' })
}

function durationLabel(mins) {
  if (mins < 60) return `${mins}분`
  return `${Math.floor(mins / 60)}시간 ${mins % 60}분`
}

const sampleData = [
  { id: 1, type: 'sleep', startTime: '2026-06-08T22:00', duration: 120, note: '잘 잠들었어요' },
  { id: 2, type: 'feed', startTime: '2026-06-08T00:30', duration: 20, note: '모유 수유' },
  { id: 3, type: 'sleep', startTime: '2026-06-08T02:00', duration: 90, note: '' },
  { id: 4, type: 'feed', startTime: '2026-06-08T04:00', duration: 25, note: '분유 60ml' },
]

export default function Tracker() {
  const [records, setRecords] = useState(sampleData)
  const [form, setForm] = useState({ type: 'sleep', startTime: '', duration: '', note: '' })
  const [activeTab, setActiveTab] = useState('all')

  const totalSleepMins = records.filter(r => r.type === 'sleep').reduce((s, r) => s + r.duration, 0)
  const totalFeedMins = records.filter(r => r.type === 'feed').reduce((s, r) => s + r.duration, 0)
  const feedCount = records.filter(r => r.type === 'feed').length

  const addRecord = () => {
    if (!form.startTime || !form.duration) return
    setRecords(prev => [
      { id: Date.now(), type: form.type, startTime: form.startTime, duration: Number(form.duration), note: form.note },
      ...prev,
    ])
    setForm({ type: form.type, startTime: '', duration: '', note: '' })
  }

  const remove = (id) => setRecords(prev => prev.filter(r => r.id !== id))

  const filtered = activeTab === 'all' ? records : records.filter(r => r.type === activeTab)

  const inputStyle = {
    padding: '10px 14px', borderRadius: '8px', border: '1px solid #D1D5DB',
    fontSize: '14px', outline: 'none', backgroundColor: '#fff', width: '100%',
    fontFamily: 'inherit',
  }

  return (
    <div style={{ backgroundColor: '#FFF8EF', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1B6B6B, #2A8B8B)', padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,255,255,0.15)', padding: '6px 16px', borderRadius: '24px', color: '#D4A422', fontSize: '13px', fontWeight: '600', marginBottom: '20px' }}>
            <Moon size={14} /> 수면·수유 기록
          </div>
          <h1 style={{ color: '#FFF8EF', fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: '700', margin: '0 0 12px' }}>
            아이의 패턴을 기록하세요
          </h1>
          <p style={{ color: '#C0E8E8', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
            수면과 수유 기록을 통해 아이의 리듬을 파악하고<br />더 나은 육아 계획을 세울 수 있어요.
          </p>
        </div>
      </section>

      {/* Summary Cards */}
      <section style={{ padding: '32px 24px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '14px', padding: '24px', border: '1px solid #E8D5BC', display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#EFF8F8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Moon size={24} color="#1B6B6B" />
            </div>
            <div>
              <div style={{ fontSize: '22px', fontWeight: '700', color: '#1B6B6B' }}>{durationLabel(totalSleepMins)}</div>
              <div style={{ fontSize: '13px', color: '#6B7280' }}>오늘 총 수면</div>
            </div>
          </div>
          <div style={{ backgroundColor: '#fff', borderRadius: '14px', padding: '24px', border: '1px solid #E8D5BC', display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#FEF0F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Droplets size={24} color="#F07070" />
            </div>
            <div>
              <div style={{ fontSize: '22px', fontWeight: '700', color: '#F07070' }}>{feedCount}회</div>
              <div style={{ fontSize: '13px', color: '#6B7280' }}>오늘 수유 횟수</div>
            </div>
          </div>
          <div style={{ backgroundColor: '#fff', borderRadius: '14px', padding: '24px', border: '1px solid #E8D5BC', display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#FDF6E3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <TrendingUp size={24} color="#D4A422" />
            </div>
            <div>
              <div style={{ fontSize: '22px', fontWeight: '700', color: '#D4A422' }}>{durationLabel(totalFeedMins)}</div>
              <div style={{ fontSize: '13px', color: '#6B7280' }}>오늘 총 수유 시간</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: '32px 24px 64px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '24px' }}>

          {/* Add Form */}
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid #E8D5BC', height: 'fit-content' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1a202c', margin: '0 0 24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Plus size={20} color="#1B6B6B" /> 새 기록 추가
            </h2>

            {/* Type Toggle */}
            <div style={{ display: 'flex', backgroundColor: '#F3F4F6', borderRadius: '10px', padding: '4px', marginBottom: '20px' }}>
              {Object.entries(TYPES).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setForm(f => ({ ...f, type: key }))}
                  style={{
                    flex: 1, padding: '8px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                    fontSize: '14px', fontWeight: '600', transition: 'all 0.15s',
                    backgroundColor: form.type === key ? (key === 'sleep' ? '#1B6B6B' : '#F07070') : 'transparent',
                    color: form.type === key ? '#fff' : '#6B7280',
                  }}
                >
                  {key === 'sleep' ? <Moon size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> : <Droplets size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />}
                  {label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#374151', display: 'block', marginBottom: '6px' }}>시작 시간</label>
                <input
                  type="datetime-local"
                  value={form.startTime}
                  onChange={e => setForm(f => ({ ...f, startTime: e.target.value }))}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#374151', display: 'block', marginBottom: '6px' }}>
                  {form.type === 'sleep' ? '수면 시간 (분)' : '수유 시간 (분)'}
                </label>
                <input
                  type="number"
                  value={form.duration}
                  onChange={e => setForm(f => ({ ...f, duration: e.target.value }))}
                  placeholder="예: 90"
                  min="1"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#374151', display: 'block', marginBottom: '6px' }}>메모 (선택)</label>
                <input
                  type="text"
                  value={form.note}
                  onChange={e => setForm(f => ({ ...f, note: e.target.value }))}
                  placeholder="예: 모유 수유, 잘 잠들었어요"
                  style={inputStyle}
                />
              </div>
              <button
                onClick={addRecord}
                style={{
                  padding: '12px', borderRadius: '10px', border: 'none', cursor: 'pointer',
                  backgroundColor: '#1B6B6B', color: '#fff', fontSize: '15px', fontWeight: '600',
                  marginTop: '4px',
                }}
              >
                기록 저장
              </button>
            </div>
          </div>

          {/* Records List */}
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #E8D5BC', overflow: 'hidden' }}>
            {/* Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid #E8D5BC', padding: '0 16px' }}>
              {[['all', '전체'], ['sleep', '수면'], ['feed', '수유']].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  style={{
                    padding: '16px 16px', border: 'none', background: 'none', cursor: 'pointer',
                    fontSize: '14px', fontWeight: '600',
                    color: activeTab === key ? '#1B6B6B' : '#9CA3AF',
                    borderBottom: activeTab === key ? '2px solid #1B6B6B' : '2px solid transparent',
                    marginBottom: '-1px',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* List */}
            <div style={{ padding: '16px', maxHeight: '420px', overflowY: 'auto' }}>
              {filtered.length === 0 && (
                <div style={{ textAlign: 'center', padding: '40px', color: '#9CA3AF', fontSize: '14px' }}>
                  기록이 없습니다
                </div>
              )}
              {filtered.map(({ id, type, startTime, duration, note }) => (
                <div key={id} style={{
                  display: 'flex', gap: '14px', alignItems: 'flex-start',
                  padding: '14px 0', borderBottom: '1px solid #F3F4F6',
                }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                    backgroundColor: type === 'sleep' ? '#EFF8F8' : '#FEF0F0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {type === 'sleep'
                      ? <Moon size={18} color="#1B6B6B" />
                      : <Droplets size={18} color="#F07070" />
                    }
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                      <div>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: '#1a202c' }}>
                          {TYPES[type]}
                        </span>
                        <span style={{ fontSize: '13px', color: '#9CA3AF', marginLeft: '8px' }}>
                          {durationLabel(duration)}
                        </span>
                      </div>
                      <button
                        onClick={() => remove(id)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', color: '#D1D5DB', flexShrink: 0 }}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6B7280', fontSize: '12px', marginTop: '4px' }}>
                      <Clock size={11} />
                      {formatDate(startTime)} {formatTime(startTime)} 시작
                    </div>
                    {note && <p style={{ fontSize: '13px', color: '#6B7280', margin: '4px 0 0' }}>{note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
