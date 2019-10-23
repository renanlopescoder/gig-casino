FROM node:10

WORKDIR /usr/src/app

ENV PORT 8080
ENV HOST 0.0.0.0

COPY package*.json ./

RUN npm install -g serve
RUN npm install --only=production
RUN npm run build

# Copy the local code to the container
COPY . .


# Start the service
CMD serve -s build