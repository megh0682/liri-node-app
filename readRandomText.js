var fs = require('fs');
var twitterFunc = require('./twitterfn.js');
var spotifyFunc= require('./spotifyfn.js');
var omdbFunc = require('./omdbfn.js');
var log = require('./log.js');

var readRandomText = function(){

// Asynchronous read
fs.readFile('random.txt','utf-8', function (err, data) {
   if (err) {
      return console.error(err);
   }
   //console.log(data);
   //split the string with , separator
   var dataArray = data.split(',');
   var userOption = dataArray[0];

   switch (userOption) {
    case "spotify-this-song":
       if(dataArray[1]===null){
           //console.log("song name not present... let's hear 'I want it that way'");
       }
       var trackName = dataArray[1] === null ? "i want it that way" : dataArray[1];
       log("********************************************************************************************");
       log(userOption + " : "+dataArray[1]);
       log("********************************************************************************");
       spotifyFunc(trackName);
       break;
    case "movie-this":
        if(dataArray[1]===null){
           console.log("movie name not present... let's check 'matrix'");
        }
       var movieName = dataArray[1] === null ? "matrix" : dataArray[1];
       log("********************************************************************************************");
       log(userOption + " : "+dataArray[1]);
       log("********************************************************************************");
       omdbFunc(movieName);
       break;
    case "my-tweets":
       log("********************************************************************************************");
       log(userOption);
       log("********************************************************************************");
        twitterFunc();
        break;
    default:
        break;
}
});

};

//readRandomText();

module.exports = readRandomText;