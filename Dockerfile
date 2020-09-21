FROM node:lts-alpine3.11
ARG PORT
ARG GITHUB_TOKEN
WORKDIR /usr/src/app
COPY package*.json ./
RUN echo "//npm.pkg.github.com/:_authToken=$GITHUB_TOKEN" > .npmrc
RUN echo "registry=https://npm.pkg.github.com/yggni" >> .npmrc
RUN if [ "$NODE_ENV" = "production" ] ; then npm ci ; else npm install ; fi
RUN rm -f .npmrc
COPY . .
RUN npm run build
EXPOSE ${PORT}
CMD [ "npm", "start"]