import { useEffect, useRef } from 'react'

// 다크 모드: 밝은 파티클 (어두운 배경 위)
const COLORS_DARK = [
  [255, 248, 239],  // warm ivory
  [234, 177, 44],   // gold    #EAB12C
  [240, 153, 123],  // coral   #F0997B
  [240, 153, 123],  // coral   (비중 2×)
  [160, 220, 210],  // teal light
]

// 라이트 모드: 딥 컬러 파티클 (밝은 배경 위)
const COLORS_LIGHT = [
  [15,  110, 86],   // deep teal  #0F6E56
  [29,  158, 117],  // teal mid   #1D9E75
  [234, 177, 44],   // gold       #EAB12C
  [240, 153, 123],  // coral      #F0997B
  [240, 153, 123],  // coral      (비중 2×)
]

function newParticle(canvas, isDark, scatterY = false) {
  const palette = isDark ? COLORS_DARK : COLORS_LIGHT
  const color = palette[Math.floor(Math.random() * palette.length)]
  return {
    x: Math.random() * canvas.width,
    y: scatterY ? Math.random() * canvas.height : canvas.height + Math.random() * 40,
    size: Math.random() * 3.5 + 1.5,
    speedY: Math.random() * 0.65 + 0.2,
    speedX: (Math.random() - 0.5) * 0.3,
    maxAlpha: isDark
      ? Math.random() * 0.55 + 0.30   // 다크: 0.30–0.85
      : Math.random() * 0.40 + 0.18,  // 라이트: 0.18–0.58
    alpha: 0,
    color,
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.022,
    type: Math.random() < 0.35 ? 'leaf' : 'circle',
  }
}

// 잎 모양 경로 (canvas 중심 기준)
function drawLeaf(ctx, size) {
  ctx.beginPath()
  ctx.moveTo(0, -size)
  ctx.bezierCurveTo( size * 1.3, -size * 0.5,  size * 1.3,  size * 0.5, 0,  size)
  ctx.bezierCurveTo(-size * 1.3,  size * 0.5, -size * 1.3, -size * 0.5, 0, -size)
  ctx.fill()
}

export default function HeroParticles({ isDark = false }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let rafId

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // 초기 배치 시 캔버스 전체에 분산
    const PARTICLE_COUNT = 60
    const particles = Array.from({ length: PARTICLE_COUNT }, () =>
      newParticle(canvas, isDark, true)
    )

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.y -= p.speedY
        p.x += p.speedX
        p.rotation += p.rotSpeed

        // 높이 비율 기반 페이드 인·아웃
        const ratio = p.y / canvas.height          // 1 = 하단, 0 = 상단
        p.alpha = p.maxAlpha * Math.min(ratio * 4, (1 - ratio) * 3, 1)

        // 화면 밖으로 나가면 하단에서 다시 생성
        if (p.y < -10) Object.assign(p, newParticle(canvas, isDark))

        ctx.save()
        ctx.globalAlpha = Math.max(0, p.alpha)
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)

        const [r, g, b] = p.color
        ctx.fillStyle = `rgb(${r},${g},${b})`

        if (p.type === 'leaf') {
          drawLeaf(ctx, p.size)
        } else {
          ctx.beginPath()
          ctx.arc(0, 0, p.size, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.restore()
      }

      rafId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}
