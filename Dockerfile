
FROM node:10


WORKDIR /source/dndspells

COPY package*.json /source/dndspells/

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
