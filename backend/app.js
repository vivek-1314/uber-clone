const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const {connectingmongodb} = require("./connection");
const userroutes = require("./routes/user");

//port and app
const app = express();
const port = 4000 ;

//connecting to database
const url = "mongodb://127.0.0.1:27017/uber-clone" ;
connectingmongodb(url) ;

//get request
app.use(cors()) ;
app.use(express.json()) ;
app.use(express.urlencoded({ extended: true})) ;
app.use("/users" , userroutes) ;

//app listening
app.listen(port , () =>console.log(`server listening at ${port}`))
