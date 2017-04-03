var twitterFunc = require('./twitterfn.js');
var spotifyFunc= require('./spotifyfn.js');
var omdbFunc = require('./omdbfn.js');
var readRandomText = require('./readRandomText.js');
var log = require('./log.js');

//Fetch terminal arguments
var userOption = process.argv[2];

switch (userOption) {
    case "spotify-this-song":
       if(process.argv[3]===null){
           console.log("You did not specify the song...No problem... let's hear 'I want it that way'");
           return;
       }
       var trackName = process.argv[3] === null ? "i want it that way" : process.argv[3];
       log("********************************************************************************************");
       log(userOption + " : "+trackName);
       log("********************************************************************************************");
       spotifyFunc(trackName);
       break;
    case "do-what-it-says":
       log("********************************************************************************************");
       log(userOption);
       log("********************************************************************************************");
        readRandomText();        
        break;
    case "movie-this":
        if(process.argv[3]===null){
           console.log("You did not specify the movie...No problem... let's gets details on 'matrix'");
           return;
       }
       var movieName = process.argv[3] === null ? "matrix" : process.argv[3];
       log("********************************************************************************************");
       log(userOption + " : "+movieName);
       log("********************************************************************************************");
       omdbFunc(movieName);
       break;
    case "my-tweets":
       log("********************************************************************************************");
       log(userOption);
       log("********************************************************************************************");
        twitterFunc();
        break;
    default:
        break;
}


