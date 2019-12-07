var fs = require('fs');
var data = fs.readFileSync('quotes.json');
var quotes = JSON.parse(data);
console.log(quotes);

console.log("server is starting");

var express = require ('express');
var app = express();

var server = app.listen(3000, listening);

function listening(){
    console.log('listening...');
}

app.use(express.static("public"));


//add a new quote
app.get("/add/:who/:quote/:season/:episode", addQuote);

function addQuote (request, response){
    let data = request.params;
    let newWho = data.who;
    let newQuote = data.quote;
    let newSeason = data.season;
    let newEpisode = data.episode;

    let quoteObj = {}
    quoteObj.who = newWho;
    quoteObj.quote = newQuote;
    quoteObj.season = Number(newSeason);
    quoteObj.episode = newEpisode;


    let arr = quotes[newWho];
    arr.push(quoteObj);

    reply = {"status": "successful", "submission": newQuote};
    console.log(reply);

    response.send(reply);

}

//show all quotes currently saved to database
app.get("/all", sendAll);

function sendAll (request, response){
    response.send(quotes);
}

//search for quotes by who said them
app.get("/search/who/:name", searchWho);

function searchWho (request, response) {
    let name = request.params.name;
    let reply;

    // function test (arr, name){
    //     let answer = [];
    //     for (let i=0; i < arr.length; i++){
    //         if (arr[i].who === name) {
    //             answer.push(arr[i]);
    //         }
    //     } 
    //     if (answer.length > 0){
    //     reply = answer;
    //     } else {
    //     reply = {msg: "Sorry. No results found."}
    //     }
    // }

    // test(quotes, name);

    function test (){
        if (quotes[name]){
          reply = quotes[name];
        } else {
          reply = {"msg": "sorry no one by that name"};
        }
      }
      
      test();


    response.send(reply);
}

