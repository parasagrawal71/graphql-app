FROM node:16-alpine

WORKDIR /opt
COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 6100
CMD ["npm", "start"]