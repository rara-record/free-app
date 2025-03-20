FROM node:20-alpine

WORKDIR /usr/src/app

# pnpm 설치
RUN corepack enable && corepack prepare pnpm@latest --activate

# 필요한 설정 파일 복사
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json tsconfig.json /usr/src/app/
COPY app/package.json /usr/src/app/app/package.json

# 의존성 설치
RUN pnpm install --frozen-lockfile

# 소스코드 복사 및 빌드
COPY app/ /usr/src/app/app/
RUN pnpm --filter @free-app/app build

# 환경변수 설정
ENV NODE_ENV production
ENV NODE_OPTIONS=--max-old-space-size=2048
ENV PORT=10000

EXPOSE 10000

# 서버 실행
CMD ["pnpm", "--filter", "@free-app/app", "start"]
