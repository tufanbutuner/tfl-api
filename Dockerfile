FROM node:17.9.1-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "start"]