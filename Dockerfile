FROM node:12.9.0-alpine as build-stage
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16.1-alpine as prod-stage
COPY --from=build-stage /app/dist/jwt-login /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]