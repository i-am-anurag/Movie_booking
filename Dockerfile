FROM node:alpine

WORKDIR /usr/src/index

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3012

CMD ["npm", "start"]
