FROM node:15.2.1-alpine3.10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8083
CMD [ "node", "express.js" ]