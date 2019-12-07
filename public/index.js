let submit = document.querySelector(".submit");
let person = document.querySelector("#person");
let quote = document.querySelector("#quote");
let season = document.querySelector("#season");
let episode = document.querySelector("#episode");
let msg = document.querySelector(".message");

// window.location = window.location.href;

submit.addEventListener("click", e => {
    e.preventDefault();
    submitQuote();
    person.value = "";
    quote.value="";
    season.value = "";
    episode.value = "";

});

function submitQuote (){
    let personName = person.value;
    let quoteText = quote.value;
    let seasonNum = season.value;
    let episodeTitle = episode.value;

    if (personName === "" || quoteText === "" || seasonNum === "" || episodeTitle === "") {
        msg.textContent = "Please fill out all sections";

    } else {
        let data = {
            who: personName,
            quote: quoteText,
            season: seasonNum,
            episode: episodeTitle
        }
        $.post('addquote', data, success);
    
        function success(){
            msg.textContent = "Thank you for your submission"
        }


    }

    
    

}

    

$.getJSON('all', gotData);
let allQuotes;
function gotData(data){
    allQuotes = data;
    console.log(allQuotes);
}