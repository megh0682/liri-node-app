var fs = require('fs');
var request = require('request');
var log = require('./log.js');

//Lets configure and request the movie
var omdbFunc = function(moviename){
request({
    url: 'http://www.omdbapi.com', //URL to hit
    qs: {t: moviename}, //Query string data
    method: 'GET'//Specify the method    
}, function(error, response, body){
    if(error) {
        console.log(error);
        log("ERROR: "+error);
    } else {
        //console.log(response.statusCode + body);
        if(response.statusCode!==200){
             console.log("Not a valid status code.. " + response.statusCode+  " Try another query");
             log("ERROR: Not a valid status code.. " + response.statusCode+  " Try another query");
             return;
        }else{
            if(body !== null){
               //console.log(typeof(body));
               //console.log(JSON.parse(body));
               var movieObject = JSON.parse(body);
               for(var element in movieObject){
                  console.log(element + " : " +movieObject[element]);
                  log(element + " : " +movieObject[element]);
               }
            }
        }
    }
});
};

module.exports = omdbFunc;