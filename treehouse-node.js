var https = require('https');

/* Adding a function that we will use to print a message*/
  function printMessage(username,badgeCount,points){
    console.log( username + ' has ' + badgeCount + " total badges, and " + points + " javascript points");
  }


  printMessage("bbleds",26,20000000000);


https.get('https://teamtreehouse.com/benjaminbledsoe.json', function(response){
      var body = "";
      var parsed;

    response.on('data', (chunk) => {
    //console.log(`BODY: ${chunk}`);
    body+=chunk;
  });
    response.on('end', function(){
       //console.log("body: "+body);
       parsed = JSON.parse(body);

       console.log("parsed: ", parsed.badges);
    });



});








