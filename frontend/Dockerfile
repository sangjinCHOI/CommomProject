from node:alpine
workdir /app
copy package*.json ./
copy ./ ./
run npm i
cmd ["npm", "run", "start"]
