# Use Node base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
RUN npm install

# Copy the rest of the source
COPY . .

# Build Prisma client
RUN npx prisma generate

# Expose port
EXPOSE 3000

# Run the NestJS app
CMD ["npm", "run", "start:dev"]
