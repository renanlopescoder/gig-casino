FROM node:10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PORT 8080
ENV HOST 0.0.0.0

COPY package.json .
RUN npm install
COPY . ./

RUN npm install -g serve
RUN npm install --only=production
RUN npm run build


# Start the service
CMD serve -s build