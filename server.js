var quotes = [
    {
        who: "Dorothy Zbornak",
        quote: "Go to sleep sweetheart, pray for brains.",
        season: 3,
        episode: "title",
    },
    {
        who: "Dorothy Zbornak",
        quote: "Put it in the Smithsonian, Blanche. Its got more miles on it than the Spirit of St. Louis!",
        season: 7,
        episode: "title",
    }
]

console.log("server is starting");

var express = require ('express');
var app = express();

var server = app.listen(3000, listening);

function listening(){
    console.log('listening...');
}

app.use(express.static("public"));

// app.get("/dorothy", sendQuote);

// function sendQuote (request, response) {
//     response.send("Some dorothy quote");
// }

// app.get("/search/:gg", searchGirl);

// function searchGirl (request, response){
//     let data = request.params;
//     let gg = data.gg;
//     response.send("You have searched for quotes from: " + gg);
// }

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


    quotes.push(quoteObj);

    reply = "Thanks for the quote!";

    response.send(reply);

}


app.get("/all", sendAll);

function sendAll (request, response){
    response.send(quotes);
}