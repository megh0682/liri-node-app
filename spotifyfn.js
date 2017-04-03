var spotify = require('spotify');
var fs = require('fs');
var request = require('request');
const opn = require('opn');
var log = require('./log.js');


var spotifyFunc = function(trackname){ 
spotify.search({ type: 'track', query: trackname }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        log('ERROR: ' + err);
        return;
    }
    //console.log(JSON.stringify(data,null,3));
    if(data.tracks.items !== null){
      //console.log(data.tracks.items[0].preview_url);
      request.get(data.tracks.items[0].preview_url).on('error', function(err) {
    // handle error
     }).pipe(fs.createWriteStream('usersong.mp3'));
      console.log("Now playing..."+ trackname);
      log("Now playing..."+ trackname);
      //opn('https://p.scdn.co/mp3-preview/46a2c637536f1cbe5543de63f2c803c250b3d844?cid=null');
      opn(data.tracks.items[0].preview_url, {app: ['chrome', '--incognito']});
      //opn('usersong.mp3', {app: ['chrome', '--incognito']});
     
    }else{
      console.log("no results returned...")
      log("ERROR: no results returned...");
    }

});
};
module.exports = spotifyFunc;
