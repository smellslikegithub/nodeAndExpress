
const dotenv = require('dotenv');
dotenv.config();
const EXPRESS_FALLBACK_PORT = 3000;
const DATABASE = require('./database/database');
const USERS = require('./routes/users'); 



var express = require('express');
var routes = require('routes');
var http = require('http');
var url = require('url');
var pathModule = require('path');
var bodyParser = require('body-parser');
var json = require('json');
var logger = require('logger');
var cors = require('cors');
var methodOverride = require('method-override');
var mongodb = require('mongodb');


const router = express.Router();

var mongoClient = mongodb.MongoClient; //database client
const DB_CONNECTION_URL = "mongodb://"
                          +DATABASE.setupDb.DB_USERNAME+":"
                          +DATABASE.setupDb.DB_PASSWORD+"@"
                          +DATABASE.setupDb.DB_CONNECTION_ENV+":"
                          +DATABASE.setupDb.DB_CONNECTION_PORT+"/"
                          +DATABASE.setupDb.DB_NAME
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view enginer', 'handlebars');

app.use('/users', USERS); // Everyting related to the users route will be handles by the USERS variable
app.use(bodyParser.json()); // body parser no requires me to seperately declare the use of JSON, and url encoded
app.use(bodyParser.urlencoded(
    {extended:true}
    ));
app.use(methodOverride());

//Middle ware 
app.use(cors());

//Set static folders
app.use(express.static(pathModule.join(__dirname, 'public')));

//routes
app.use('/root' , async (req,res,next) => {
 
});

//Mongo Clinet configure

mongoClient.connect(DB_CONNECTION_URL, (err,db)=>{
  if(err){
    console.log(DB_CONNECTION_URL);
    console.log("Connection failed to esatablish with Database instance. More info: " + err);
  }
  else{
    console.log("Connection Successfully established");
  }
});

//App Start
app.listen(3000, (err, response)=>{
    if(err){
        console.log("Error Occured; " +err);
    }
    else{
        console.log("Server Started at Port: " + 3000);
    }
})


