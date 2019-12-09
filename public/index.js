//buttons
let search1 = document.querySelector(".search");
let random = document.querySelector(".random");
let submit = document.querySelector(".submit");
let all = document.querySelector(".all");
let back = document.querySelector(".back");

//search form buttons
let submitPerson = document.querySelector(".submitPerson");
let submitQuote = document.querySelector(".submitQuote");
let submitSeason = document.querySelector(".submitSeason");
let submitEpisode = document.querySelector(".submitEpisode");

//random buttons
let randomBtns = document.querySelector(".randomBtns");
let randomBlanche = document.querySelector(".randomBlanche");
let randomDorothy = document.querySelector(".randomDorothy");
let randomRose = document.querySelector(".randomRose");
let randomSophia = document.querySelector(".randomSophia");
let randomAll = document.querySelector(".randomAll");


//search values
let person = document.querySelector("#person");
let quote = document.querySelector("#quote");
let season = document.querySelector("#season");
let episode = document.querySelector("#episode");
let msg = document.querySelector(".message");
let searchForm = document.querySelector(".searchForm");

let currentObj;


//reveals the search form
search1.addEventListener("click", e =>{
    e.preventDefault();
    searchForm.classList.remove("hide");
    search1.classList.add("hide");
    random.classList.add("hide");
    all.classList.add("hide");
    back.classList.remove("hide");
});


//reveals the random buttons
random.addEventListener("click", e =>{
    e.preventDefault();
    randomBtns.classList.remove("hide");
    search1.classList.add("hide");
    random.classList.add("hide");
    all.classList.add("hide");
    back.classList.remove("hide");
});


randomBlanche.addEventListener("click", e=>{
    $.getJSON('/random/blanche', gotData);
    function gotData (data){
        let index = Math.floor(Math.random() * data.length);
        // console.log(data[index]);
        currentObj = data[index];
    }
})

randomDorothy.addEventListener("click", e=>{
    $.getJSON('/random/dorothy', gotData);
    function gotData (data){
        let index = Math.floor(Math.random() * data.length);
        // console.log(data[index]);
        currentObj = data[index];
    }
})

randomRose.addEventListener("click", e=>{
    $.getJSON('/random/rose', gotData);
    function gotData (data){
        let index = Math.floor(Math.random() * data.length);
        // console.log(data[index]);
        currentObj = data[index];
    }
})

randomSophia.addEventListener("click", e=>{
    $.getJSON('/random/sophia', gotData);
    function gotData (data){
        let index = Math.floor(Math.random() * data.length);
        // console.log(data[index]);
        currentObj = data[index];
    }
})
//click to be redirected to /all to see all the quotes
all.addEventListener("click", e=>{
    e.preventDefault();
    $.getJSON('/all', gotData);
    let allQuotes;
    function gotData(data){
        allQuotes = data;
        console.log(allQuotes);
        let link = document.createElement("a");
        link.textContent="click to see all";
        link.href = "/all";
        msg.appendChild(link);
    }

})




//back button
back.addEventListener("click", e =>{
    e.preventDefault();
    searchForm.classList.add("hide");
    randomBtns.classList.add("hide");
    back.classList.add("hide");
    search1.classList.remove("hide");
    random.classList.remove("hide");
    all.classList.remove("hide");
    console.log(currentObj);
})










// window.location = window.location.href;
//related to addQuote functionality
// submit.addEventListener("click", e => {
//     e.preventDefault();
//     submitQuote();
//     person.value = "";
//     quote.value="";
//     season.value = "";
//     episode.value = "";

// });

// function submitQuote (){
//     let personName = person.value;
//     let quoteText = quote.value;
//     let seasonNum = season.value;
//     let episodeTitle = episode.value;

//     if (personName === "" || quoteText === "" || seasonNum === "" || episodeTitle === "") {
//         msg.textContent = "Please fill out all sections";

//     } else {
//         let data = {
//             who: personName,
//             quote: quoteText,
//             season: seasonNum,
//             episode: episodeTitle
//         }
//         $.post('/addquote', data, success);
    
//         function success(){
//             msg.textContent = "Thank you for your submission"
//         }


//     }

    
    

// }