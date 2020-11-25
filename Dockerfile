FROM node:10 AS builder

WORKDIR /app

COPY *.json ./
COPY *.conf ./
COPY src src

RUN mv /app/src/environments/environment.prod.ts /app/src/environments/environment.ts && \
    npm install && \
    npm run build

FROM nginx

COPY --from=builder /app/dist/* /usr/share/nginx/html/
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
