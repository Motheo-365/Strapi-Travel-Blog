FROM node:22

RUN apt-get update && apt-get install -y \
    build-essential \
    gcc \
    make \
    python3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# 2. Copy package files
COPY package*.json ./

RUN npm install
RUN npm install --os=linux --cpu=x64 sharp
RUN npm install @swc/core-linux-x64-gnu
RUN npm install @rollup/rollup-linux-x64-gnu

COPY . .

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "develop"]