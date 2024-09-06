FROM node:22

COPY . .

COPY package*.json ./

COPY prisma ./prisma/

RUN npm install

RUN npm install -g prisma

CMD [  "npm", "run", "start:migrate:dev" ]

EXPOSE 3000