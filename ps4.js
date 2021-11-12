const express = require('express');
const router = express.Router();

const request = require('request');
const {response} = require("express");
//const document = require("")

const nodeFetch = require('node-fetch');
//const {param} = require("express");

//taken out of package.json
//"node-fetch": "^3.0.0",


/* Route for Part B with Promise */
router.get('/', function (req, res, next){
    let param = "miami";
    return new Promise((resolve, reject) => {
        let APIendpt = 'https://api.fbi.gov/@wanted?field_offices=' + param;
        console.log("the endpt value is ", APIendpt);
        request(APIendpt, (err, response, body) => {
            if (response.statusCode == 200) {
                resolve(body);
            } else {
                reject(response);
            }
        });
    })
        .then((result) => {
                //resolve
                console.log("Result was resolved")
                let data = JSON.parse(result);
                console.log("data items is ", data.items[0].title);
                res.render('ps4', {route_var: "b", title: "FBI MOST WANTED", dataTitle:data.items[0].title,
                dataDescription: data.items[0].description, dataCaution: data.items[0].caution}); //result
            },
                //reject
                (result) => {
                console.log("Result was rejected")
                res.render('ps4', {title: "FBI MOST WANTED", data: result.statusMessage});
            }
        );
});


/* Route for Part C with Async/Await syntax */
async function getWantedPeople() {
    let param = "miami";
    const data = await nodeFetch('https://api.fbi.gov/@wanted?field_offices=' + param, {method: "GET"});
    //let ndata = await JSON.parse(response.);
    console.log("response", response.items[0].title);
        return data;
}
//let param = "miami";
getWantedPeople()
    .then(function(data){
            //let data = JSON.parse(response);
            console.log(`Response is ${data}`) //resolve
            //res.render('ps4', {route_var: "c", title: "FBI MOST WANTED", dataTitle:data.items[0].title,
                //dataDescription: data.items[0].description, dataCaution: data.items[0].caution});
    },
        (err) => console.log(`${err}`) //reject
    )
    .then(() => console.log('All done.'))



/* Route for Part D that uses callback and request package */
//let param_val="miami";
const callAPI = function (param_val, callback){
    const APIendpt = "https://api.fbi.gov/@wanted?field_offices=" + param_val;
    request(APIendpt,function(err, response, body){
        return callback(err, body);
    });
}
router.get('/ps4', function(request, response){

    callAPI(param_val, function(err, result){
        if(err){
            response.send("There was an error!!")
        }
        else{
            console.log("the result is ", result);
            response.render("ps4", {route_var: "d", title: "FBI MOST WANTED", dataTitle: result.title, data});
        }
    });
});


module.exports = router;