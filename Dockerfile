# Base image
FROM node:20-alpine

# Working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install deps (fix peer dependency conflict)
RUN npm ci --legacy-peer-deps

# Copy source code
COPY . .

# Build app
RUN npm run build

# Expose port (Next.js default)
EXPOSE 3000

# Start app
CMD ["npm", "start"]
