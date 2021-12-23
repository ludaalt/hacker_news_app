FROM node:16.13.1

WORKDIR /app

COPY package.json ./

RUN npm install --force

COPY . .

ENV PORT 3000

EXPOSE $PORT

CMD ["npm", "start"]