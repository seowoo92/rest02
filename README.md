# 🌱 아이봄 (ibom)

> 출산 후 회복루틴 · 수면·수유 기록 · 산후우울 체크 · AI 육아코치  
> 엄마와 아이의 건강한 출발을 함께하는 코칭 플랫폼

[![Deploy](https://img.shields.io/badge/배포-GitHub%20Pages-2A8B8B?style=flat-square&logo=github)](https://seowoo92.github.io/rest02)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)](https://vite.dev)

**라이브 데모 →** https://seowoo92.github.io/rest02

---

## 서비스 소개

아이봄은 2026년 6월 8일 개업한 출산·육아 코칭 스타트업의 공식 웹사이트입니다.  
산모와 신생아 부모를 위한 4가지 핵심 서비스를 제공합니다.

| 서비스 | 경로 | 설명 |
|--------|------|------|
| 출산 후 회복루틴 | `/recovery` | 8주 단계별 신체 회복 체크리스트 |
| 수면·수유 기록 | `/tracker` | 수면·수유 시간 기록 및 일일 요약 |
| 산후우울 체크 | `/depression-check` | EPDS 10문항 자가진단 + 결과 안내 |
| AI 육아코치 | `/ai-coach` | 24시간 육아 상담 AI 채팅 인터페이스 |

---

## 기술 스택

```
Frontend   React 19 + Vite 8
Styling    Tailwind CSS v4 (@tailwindcss/vite)
Routing    React Router v7
Icons      Lucide React
Hosting    GitHub Pages
Deploy     gh-pages
```

### 디자인 시스템

| 색상 | HEX | 용도 |
|------|-----|------|
| 딥 틸 | `#1B6B6B` | 주 색상 — 네비게이션, 제목, 버튼 |
| 웜 아이보리 | `#FFF8EF` | 배경 |
| 머스타드 골드 | `#D4A422` | 포인트 — CTA, 강조, 별점 |
| 코랄핑크 | `#F07070` | 포인트 — 건강·회복 섹션 |

---

## 시작하기

### 요구 사항

- Node.js 18 이상
- npm 9 이상

### 설치 및 실행

```bash
# 리포지토리 클론
git clone https://github.com/seowoo92/rest02.git
cd rest02

# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

개발 서버: `http://localhost:5173/rest02/`

> `vite.config.js`의 `base: '/rest02/'` 설정으로 인해 로컬에서도 `/rest02/` 경로로 접근해야 합니다.

---

## 빌드 및 배포

```bash
# 프로덕션 빌드만
npm run build

# 빌드 + GitHub Pages 배포 (한 번에)
npm run deploy
```

`npm run deploy` 실행 시:
1. `predeploy` — `npm run build` 자동 실행
2. `deploy` — `dist/` 폴더를 `gh-pages` 브랜치에 푸시

배포 URL: `https://seowoo92.github.io/rest02`

---

## 프로젝트 구조

```
rest02/
├── public/
│   └── favicon.svg          # 브랜드 파비콘 (딥 틸 + 머스타드 새싹)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # 글로벌 네비게이션
│   │   └── Footer.jsx       # 글로벌 푸터
│   ├── pages/
│   │   ├── Home.jsx         # 랜딩 페이지
│   │   ├── Recovery.jsx     # 출산 후 회복루틴
│   │   ├── Tracker.jsx      # 수면·수유 기록
│   │   ├── DepressionCheck.jsx  # 산후우울 체크
│   │   └── AICoach.jsx      # AI 육아코치 채팅
│   ├── App.jsx              # 라우터 설정
│   ├── index.css            # Tailwind v4 + 커스텀 테마
│   └── main.jsx             # 엔트리포인트
├── index.html
├── package.json
├── vite.config.js
├── DEVLOG.md                # 개발일지
└── README.md
```

---

## 향후 개발 예정

- [ ] Firebase Auth 기반 회원가입 / 로그인
- [ ] 수면·수유 기록 클라우드 동기화
- [ ] Claude API 연동 실제 AI 코치
- [ ] 산후우울 검사 결과 히스토리
- [ ] 수유 타이머 + 푸시 알림
- [ ] React Native 모바일 앱

---

## 개발일지

상세 개발 기록은 [DEVLOG.md](./DEVLOG.md)를 참고하세요.

---

© 2026 아이봄. All rights reserved.
