# Fastify + React-Router 7 + TypeScript Starter

fastify와 React Router를 통합하여 SSR 구현을 위한 스타터 템플릿입니다.

## 프로젝트 구조

- 백엔드: Fastify
- 프론트엔드: React 19 + React Router 7
- 빌드 도구: esbuild, React Router 빌드 시스템
- 개발 환경: nodemon, TypeScript

## 디렉토리 구조

```text
app/
├── src/
│   ├── server/           # 서버 코드 (Fastify)
│   │   ├── index.ts      # 서버 진입점
│   │   ├── makeApp.ts    # Fastify 앱 생성 로직
│   │   └── plugins/      # Fastify 플러그인
│   └── web/             # 클라이언트 코드 (React)
│       ├── root.tsx      # React 앱 루트 컴포넌트
│       ├── routes.ts     # 라우트 설정
│       └── routes/       # 페이지 컴포넌트
├── dist/                 # 빌드 결과물
│   ├── server/           # 빌드된 서버 코드
│   └── web/             # 빌드된 클라이언트 코드
├── esbuild.config.js     # 서버 코드 빌드 설정
├── react-router.config.ts # React Router 빌드 설정
├── vite.config.ts        # Vite 개발 서버 설정
├── tsconfig.json         # TypeScript 설정
└── package.json          # 프로젝트 의존성 및 스크립트
```

## 시작하기

### 개발모드

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm run dev
```

### 프로덕션 빌드

```bash
# 프로덕션용 빌드
pnpm run build

# 빌드된 앱 실행
pnpm start
```

### Docker 실행

```bash
# Docker 이미지 빌드
docker build -t fastify-react-app .

# Docker 컨테이너 실행
docker run -p 10000:10000 fastify-react-app
```

## 빌드 도구

- esbuild: 서버 코드 빌드용 고성능 번들러
- React Router 빌드 시스템: 클라이언트 코드 빌드
- Vite: 개발 서버 및 HMR
