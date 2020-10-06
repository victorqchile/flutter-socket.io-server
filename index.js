const express= require('express');
const path=require('path');
require('dotenv').config();


//App de Express
const app= express();

//Node Servern
const server= require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/sockets');

//Path publico
const publicPach = path.resolve(__dirname,'public');
app.use(express.static(publicPach));


server.listen(process.env.PORT,(err) =>{
if (err) throw Error(err);
console.log("corriendo en el servidor porto",process.env.PORT)
});