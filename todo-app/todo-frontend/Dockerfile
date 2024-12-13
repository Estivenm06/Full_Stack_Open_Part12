FROM node:20 AS building

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_BACKEND_URL="http://localhost:8080/api/"

RUN npm run build

FROM building AS test

RUN npm run test

CMD ["npm", "run", "dev", "--", "--host"]