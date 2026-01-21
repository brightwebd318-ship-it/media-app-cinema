// import json-server
const jsonserver=require('json-server')

// create a app 
const server=jsonserver.create()

// set a path
const router=jsonserver.router('db.json')

// set middleware
const middleware=jsonserver.defaults()

// set port number
const port=process.env.PORT || 4000;


server.use(middleware)
server.use(router)

server.listen(port,()=>{
    console.log(port,'running');
})