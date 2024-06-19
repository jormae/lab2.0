FROM node:alpine as BUILD_IMAGE
WORKDIR /app
COPY package.json yarn.lock ./
# install dependencies
RUN yarn install --check-files --frozen-lockfile --network-timeout 100000

ARG NEXT_PUBLIC_API_URL
ARG NEXT_HOST_NAME
ARG NEXT_DB_USER
ARG NEXT_DB_PASSWORD
ARG NEXT_DB_NAME
ARG NEXT_DB_PORT

ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV NEXT_HOST_NAME=${NEXT_HOST_NAME}
ENV NEXT_DB_USER=${NEXT_DB_USER}
ENV NEXT_DB_PASSWORD=${NEXT_DB_PASSWORD}
ENV NEXT_DB_NAME=${NEXT_DB_NAME}
ENV NEXT_DB_PORT=${NEXT_DB_PORT}

COPY . .
# build
RUN yarn build 
# remove dev dependencies
RUN npm prune --production
FROM node:alpine
WORKDIR /app
# copy from build image
COPY --from=BUILD_IMAGE /app/package.json ./package.json
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public
EXPOSE 3000

CMD ["npm", "start"]