# Stage 1: Build Angular application
FROM node:20.9 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build --prod

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist/frontend/browser /usr/share/nginx/html
EXPOSE 88
