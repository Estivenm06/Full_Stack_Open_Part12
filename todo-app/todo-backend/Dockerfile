FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm ci

USER node

CMD npm run start