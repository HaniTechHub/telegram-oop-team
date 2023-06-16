# # syntax=docker/dockerfile:1
   
# FROM node:16.20.0-alpine
# WORKDIR /app
# COPY package.json /app
# RUN npm install
# RUN npm run build
# COPY . /app 
# CMD ["node", "dist/src/main.js"]
# EXPOSE 3000
   
FROM node:14.17.3-alpine as build
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json /app
RUN npm install --omit=dev
COPY . /app 
RUN npm run build
# RUN npm install --frozen-lockfile --production

FROM node:14.17.3-alpine
WORKDIR /app
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
COPY --from=build /app/.env /app
EXPOSE 3000
CMD ["node", "dist/src/main.js"]