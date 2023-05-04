FROM node:18 AS build


WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npx astro sync

RUN npm run build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80
