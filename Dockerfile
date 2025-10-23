
FROM node:20-alpine AS base

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

FROM base AS builder

ARG NEXT_PUBLIC_URL_EHARMON
ARG NODE_ENV=production

ENV NEXT_PUBLIC_URL_EHARMON=${NEXT_PUBLIC_URL_EHARMON}
ENV NODE_ENV=${NODE_ENV}

RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate

ENV NODE_ENV=production
ENV PORT=3000

ENV NEXT_PRIVATE_TOKEN_EHARMON=${NEXT_PRIVATE_TOKEN_EHARMON}

COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["pnpm", "start"]
