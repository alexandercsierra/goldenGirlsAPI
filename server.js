var fs = require('fs');
var data = fs.readFileSync('quotes.json');
var quotes = JSON.parse(data);
var bodyParser = require('body-parser');




console.log(quotes);

console.log("server is starting");

var express = require ('express');
var app = express();

var server = app.listen(process.env.PORT || 3000, listening);

function listening(){
    console.log('listening...');
}

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());






//show all quotes currently saved to database
app.get("all", sendAll);

function sendAll (request, response){
    response.send(quotes);
}



//add a new quote
// app.get("/add/:who/:quote/:season/:episode", addQuote);

// function addQuote (request, response){
//     let data = request.params;
//     let newWho = data.who;
//     let newQuote = data.quote;
//     let newSeason = data.season;
//     let newEpisode = data.episode;

//     let quoteObj = {}
//     quoteObj.who = newWho;
//     quoteObj.quote = newQuote;
//     quoteObj.season = Number(newSeason);
//     quoteObj.episode = newEpisode;


//     let arr = quotes[newWho];
//     arr.push(quoteObj);
//     let quotesData = JSON.stringify(quotes, null, 4);
//     fs.writeFile('quotes.json', quotesData, finished);

//     function finished(){
//         reply = {
//             status: "successful", 
//             submission: quoteObj
//         };

//         response.send(reply);
//     }

    

// }

app.post('addquote', addQuote);

function addQuote (request, response){
    let data = request.body;
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
    let quotesData = JSON.stringify(quotes, null, 4);
    fs.writeFile('quotes.json', quotesData, finished);

    function finished(){
        reply = {
            status: "successful", 
            submission: quoteObj
        };

        response.send(reply);
    }

    

}






//search for quotes by who said them
app.get("search/who/:name", searchWho);

function searchWho (request, response) {
    let name = request.params.name;
    let reply;

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

