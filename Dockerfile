FROM node:alpine AS development

WORKDIR /news-app

COPY ./package.json /news-app
RUN npm install

COPY . .

EXPOSE 3000

CMD npm start