# Use an official Node.js runtime as the base image
FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8080
ENV NODE_ENV=development

CMD ["npm", "run", "serve"]

# Production
# FROM node:16
# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build:tailwind
# RUN npm run build

# EXPOSE 8080
# ENV NODE_ENV production

# CMD ["npm", "run", "serve"]