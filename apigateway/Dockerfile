FROM node:21-alpine3.17
WORKDIR /app
COPY package.json .
COPY service.js .
RUN npm install && npm cache verify
EXPOSE 3000
CMD ["node", "service.js"]
