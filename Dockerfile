# Use Node.js 16 (latest LTS version) to ensure compatibility with Angular CLI
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --no-optional

# Copy the rest of the application files
COPY ./ /app/

# Run Angular build command
RUN npm run build -- --output-path=./dist/out --configuration production

# Use Nginx to serve the application in production
FROM nginx:1.15

# Copy the build output from the previous build stage to Nginx's directory
COPY --from=0 /app/dist/out /usr/share/nginx/html

