var http = require("http");
const https = require('https');

var server = http.createServer(async function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    await getSomeData(response);
    //response.end("Hollo\n");
});

server.listen(7000);


function getSomeData(response) {
        https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        let data = '';
       
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
       
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          //console.log(JSON.parse(data).explanation);
          response.end(JSON.parse(data).explanation);
        });
       
       }).on("error", (err) => {
        console.log("Error: " + err.message);
        response.end("Error: " + err.message);
       });
}

