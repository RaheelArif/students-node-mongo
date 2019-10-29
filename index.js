const express = require("express");
const mongoose = require("mongoose");

const server = express();

const db = require("./config/config").mongooseURI

mongoose.connect(db ,  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
         } )
        .then(() => {console.log("database connected")})
        .catch(err  => console.log(err))

const port = process.env.PORT || 8000 ;

server.listen(port , () => console.log("server started"))