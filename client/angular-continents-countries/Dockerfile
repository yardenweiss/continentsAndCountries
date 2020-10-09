# base image
FROM node:12.2.0

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json ./

RUN npm install

# add app
COPY . .

# start app
CMD ["npm", "start", "--host=0.0.0.0"]
EXPOSE 80

