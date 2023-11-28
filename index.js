// import json-server library in index.js file
const jsonServer = require('json-server')

// create json-server
const freelanceServer = jsonServer.create()

// Create path to json file
const router = jsonServer.router('db.json')

// middleware to convert json to js
const middleware = jsonServer.defaults()

// use middleware and router in server - connection
freelanceServer.use(middleware)
freelanceServer.use(router)

// setup port for running server 
const port = 5000 || process.env.PORT

// to listen server for resolving requests from clients
freelanceServer.listen(port,()=>{
    console.log(`Freelancer started at ${port} and waiting for the request`);
})