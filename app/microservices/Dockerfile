FROM node:12
ARG MICROSERVICE
WORKDIR /app

COPY $MICROSERVICE/package*.json ./
RUN npm install

COPY $MICROSERVICE/ .

EXPOSE 3000
CMD [ "node", "index.js" ]