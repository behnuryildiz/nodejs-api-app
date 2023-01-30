#on which image worked
FROM node

#first working directory when the container starts
WORKDIR /node-app    

#copy the depencensies and libs from json packages into that dir
COPY package*.json ./


RUN npm install


COPY . .   


#this part is optinal
EXPOSE 3000


CMD ./table_create.sh


CMD [ "npm", "start" ]