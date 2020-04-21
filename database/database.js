const dotenv = require('dotenv');
var path = require('path');

dotenv.config({path: path.join(__dirname, "../.env")});

var setupDb = {
    DB_CONNECTION_ENV : process.env.DB_CONNECTION_ENV,
    DB_CONNECTION_PORT : process.env.DB_CONNECTION_PORT,
    DB_USERNAME : process.env.DB_USERNAME,
    DB_PASSWORD : process.env.DB_PASSWORD,
    DB_NAME : process.env.DB_NAME,
};

var checkProperties =  (obj)=>{
    for(var key in obj){
        if(obj[key] == null){
            return false;
        }
    }
    return true;
}
console.log(setupDb.DB_CONNECTION_URL);
module.exports.checkProperties = checkProperties;
module.exports.setupDb = setupDb; 
