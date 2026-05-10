FROM node:22-slim

WORKDIR /app

# Copy both package.json AND package-lock.json
COPY package*.json ./

RUN npm install --include=dev --ignore-scripts

COPY . .

RUN npx nuxt prepare
RUN npm run build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]