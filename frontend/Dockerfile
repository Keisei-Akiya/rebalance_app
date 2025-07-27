FROM node:18

WORKDIR /app

COPY package.json bun.lock ./

RUN npm install -g bun
RUN bun install

COPY . .

CMD ["bun", "run", "dev"]
