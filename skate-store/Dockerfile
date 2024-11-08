# Stage 1: Install dependencies and build the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN yarn build

# Stage 2: Create the production image
FROM node:18-alpine

# Set environment variables for production
ENV NODE_ENV=production
ENV PORT=80

# Set working directory
WORKDIR /app

# Copy the built files and production dependencies
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install only production dependencies
RUN yarn install --legacy-peer-deps --production

# Expose port 80 to the host
EXPOSE 80

# Start Next.js application
CMD ["yarn", "start", "-p", "80"]  # Use -p to specify the port for Next.js to listen on
