ARG TOKEN
ARG INSTANCE

FROM node:18 as base
WORKDIR /home/node/app

COPY package*.json ./
RUN npm i
COPY . .
ENV TOKEN=$TOKEN
ENV INSTANCE=$INSTANCE
CMD [ "npm", "start"]
