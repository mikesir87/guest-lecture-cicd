FROM node:lts-alpine
WORKDIR /usr/local/app
COPY package.json yarn.lock ./
ENV NODE_ENV=production
RUN yarn install && yarn cache clean
COPY ./src ./src
CMD ["node", "src/index.mjs"]