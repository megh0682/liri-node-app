var fs = require('fs');

var log = function(data){
    
fs.appendFile('./log.txt',data,function(err){
  if(err)
    console.error(err);
  //console.log('Appended!');
});

};

module.exports = log;