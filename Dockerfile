FROM node:8-alpine

RUN apk update
RUN apk add --no-cache --virtual .gyp \
  python \
  make \
  g++
COPY package.json /tmp/package.json
RUN cd /tmp && yarn
RUN apk del .gyp
RUN mkdir -p /usr/app && cp -a /tmp/node_modules /usr/app

WORKDIR /usr/app
COPY ./ /usr/app

EXPOSE 3033
CMD yarn start
