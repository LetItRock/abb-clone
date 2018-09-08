FROM node

WORKDIR /abb

# Creating yarn workspace
COPY ./package.json .
COPY ./packages/server/package.json ./packages/server/
COPY ./packages/common/package.json ./packages/common/

# Install only production dependencies (without development)
RUN npm i -g yarn
RUN yarn install --production

# Copy compiled files
COPY ./packages/server/dist ./packages/server/dist
COPY ./packages/common/dist ./packages/common/dist

# Copy env file and orm config
COPY ./packages/server/.env.prod ./packages/server/.env
COPY ./ormconfig.json .

WORKDIR ./packages/server

ENV NODE_ENV production

EXPOSE 4000

CMD ["node", "dist/index.js"]