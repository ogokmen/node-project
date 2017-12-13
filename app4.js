const https = require('https');

function getData(substr) {
    https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`, (res) => {
        let responseData;
    let totalPages;
    let titles = [];
    res.on('data', (data) => {
        responseData = JSON.parse(data);
    console.log(responseData.total) ;
    
    });
    
    
    });
}


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function getData2(substr) {
    var result = -1;
    await https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`, (res) => {
        let responseData;
        let totalPages;
        let titles = [];
        res.on('data', (data) => {
            responseData = JSON.parse(data);
            //return responseData.total;    
            //console.log("url result:", responseData.total);
            result = responseData.total;    
        });            
    });
    while (result == -1) {
        console.log("waiting...");
        await sleep(100);
    }
    
    return result;
}

async function data(){
    var aa = await getData2("maze");    
    console.log(aa);
}

function data2(substr){
    var prom = new Promise((resolve,reject) => {
        https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`, (res) => {
            let responseData;
            let totalPages;
            let titles = [];
            res.on('data', (data) => {
                responseData = JSON.parse(data);
                //return responseData.total;    
                //console.log("url result:", responseData.total);
                //result = responseData.total;    
                resolve(responseData.total);
            });            
        });
    });

    prom.then((message) => {
        console.log(message);
    }, (errormessage) => {

    });
}

data2("maze");