# use node runtime
FROM node:20

# set working directory
WORKDIR /app

# copy package files
COPY package*.json ./

# install dependencies
RUN npm install

# copy rest of the code
COPY . .

# expose port (change if your server uses different)
EXPOSE 4000

# default command
CMD ["npm", "start"]
