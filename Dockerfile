FROM node:lts as common

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable


FROM common AS build

RUN pnpm i --frozen-lockfile -D

COPY . .

RUN pnpm build


FROM common AS module

RUN pnpm i --frozen-lockfile -P


FROM gcr.io/distroless/nodejs:18 AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=module /app/node_modules ./node_modules

EXPOSE 3000

CMD ["./node_modules/next/dist/bin/next", "start"]
