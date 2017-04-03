var twitterkeys = require('./keys.js');
var Twitter = require('twitter');
var log = require('./log.js');

var twitterFunc = function(){
var client = new Twitter({
      consumer_key: 'KiFGMkIP6CHwa0lLKv7P7fjzR',
      consumer_secret: 'PDwQMZJ7Oo5R6b0lWwVhFWBhlsWKnp8cpC9GPl4qLeDYEUMi6Q',
	  access_token_key: '847990364241833984-hczWLvEMh6VNMcR250U4WN4qWwSwMmg',
	  access_token_secret: '5xnvfxQKAYls26vn8yjmc8dJdIKBhdHtfdV8HbFb9QfnW'
	    });

//console.log(client);

client.get('https://api.twitter.com/1.1/statuses/user_timeline.json', {screen_name:'bodhimonk',count:20},function(error, tweets, response) {
  if(!error && response.statusCode){
   //console.log(JSON.stringify(tweets,null,3));
   tweets.forEach(function(element){  
   console.log(element.text + "----> "+element.created_at);
   log(element.text + "----> "+element.created_at);
   });
  }else{
   console.log("ERROR: "+ error + " RESPONSE CODE: "+response.statusCode);
   log("ERROR: "+ error +" RESPONSE CODE: "+response.statusCode)
  }
  //console.log("Response obj: "+ JSON.stringify(response,null,3));
});

};

module.exports = twitterFunc;