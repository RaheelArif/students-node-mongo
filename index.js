const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require('body-parser')
const server = express();

const db = require("./config/config").mongooseURI
server.use(bodyParser.json())

mongoose.connect(db ,  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
         } )
        .then(() => {console.log("database connected")})
        .catch(err  => console.log(err))

server.use("/" , require("./router/studentRouter"));


const port = process.env.PORT || 8000 ;

server.listen(port , () => console.log("server started"))