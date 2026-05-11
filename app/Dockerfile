# Stage 1: Build & Run
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
ENV PORT=3000
CMD ["npm", "start"]
