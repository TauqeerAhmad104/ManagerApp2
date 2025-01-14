# Stage 1: Use Node.js 14 as base image for building
FROM node:14 AS build-stage

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY ./ /app/

# Build the Angular app
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

# Stage 2: Nginx for serving the app in production
FROM nginx:alpine

# Copy the build output to Nginx directory
COPY --from=build-stage /app/dist/out /usr/share/nginx/html

# Expose Nginx port
EXPOSE 80
