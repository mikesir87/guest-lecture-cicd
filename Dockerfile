FROM node
WORKDIR /usr/local/app
COPY package.json yarn.lock ./
RUN yarn install
COPY ./src ./src
CMD ["node", "src/index.mjs"]