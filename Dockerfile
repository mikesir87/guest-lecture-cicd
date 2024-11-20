FROM node:lts-alpine AS base
WORKDIR /usr/local/app
COPY package.json yarn.lock ./

FROM base AS dev
RUN yarn install
COPY ./src ./src
CMD ["yarn", "dev"]

FROM base AS final
ENV NODE_ENV=production
RUN yarn install && yarn cache clean
COPY ./src ./src
CMD ["node", "src/index.mjs"]