//buttons
let search1 = document.querySelector(".search");
let random = document.querySelector(".random");
let submit = document.querySelector(".submit");
let all = document.querySelector(".all");
let back = document.querySelector(".back");
let cardDiv = document.querySelector(".cardDiv");

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
let randomOk = document.querySelector(".randomOk");
let clear = document.querySelector(".clear");


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




//random button functionality
randomBlanche.addEventListener("click", e=>{
    $.getJSON('/random/blanche', gotData);
    function gotData (data){
        let index = Math.floor(Math.random() * data.length);
        // console.log(data[index]);
        currentObj = data[index];
        randomDorothy.disabled = true;
        randomRose.disabled = true;
        randomSophia.disabled=true;
        randomAll.disabled=true;
    }
})

randomDorothy.addEventListener("click", e=>{
    $.getJSON('/random/dorothy', gotData);
    function gotData (data){
        let index = Math.floor(Math.random() * data.length);
        // console.log(data[index]);
        currentObj = data[index];
        randomBlanche.disabled = true;
        randomRose.disabled = true;
        randomSophia.disabled=true;
        randomAll.disabled=true;
    }
})

randomRose.addEventListener("click", e=>{
    $.getJSON('/random/rose', gotData);
    function gotData (data){
        let index = Math.floor(Math.random() * data.length);
        // console.log(data[index]);
        currentObj = data[index];
        randomBlanche.disabled = true;
        randomDorothy.disabled = true;
        randomSophia.disabled=true;
        randomAll.disabled=true;
    }
})

randomSophia.addEventListener("click", e=>{
    $.getJSON('/random/sophia', gotData);
    function gotData (data){
        let index = Math.floor(Math.random() * data.length);
        // console.log(data[index]);
        currentObj = data[index];
        randomBlanche.disabled = true;
        randomRose.disabled = true;
        randomDorothy.disabled=true;
        randomAll.disabled=true;
    }
})

randomAll.addEventListener("click", e=>{
    $.getJSON('/random/all', gotData);
    function gotData (data){
        randomBlanche.disabled = true;
        randomRose.disabled = true;
        randomSophia.disabled=true;
        randomDorothy.disabled=true;
        let randomP = Math.floor(Math.random()* 4);
        let keys = Object.keys(data);
        let girl = keys[randomP];
        let index = Math.floor(Math.random() * data[girl].length);
        // console.log(data[index]);
        currentObj = data[girl][index];
        // console.log(index);
    }
})

clear.addEventListener("click", e=>{
    randomDorothy.disabled=false;
    randomBlanche.disabled=false;
    randomRose.disabled=false;
    randomSophia.disabled=false;
    randomAll.disabled=false;
})

randomOk.addEventListener("click", e=>{
    randomDorothy.disabled=false;
    randomBlanche.disabled=false;
    randomRose.disabled=false;
    randomSophia.disabled=false;
    randomAll.disabled=false;


    console.log(currentObj.who, currentObj.quote, currentObj.season, currentObj.episode);
    appendCard();
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
})


//submit search buttons

submitPerson.addEventListener("click", e=>{
    e.preventDefault();
    $.getJSON('/search/who/'+ person.value, gotData);
    function gotData (data){
        console.log(data);
        data.map(obj =>{
            currentObj = obj;
            appendCard();
        })
    }

})






//card creator

function createCard(obj){
    let card = document.createElement("div");
    card.classList.add("card");

    let name = document.createElement("h3");
    name.classList.add("name");
    name.textContent = obj.who;

    let quote = document.createElement("p");
    quote.classList.add("quote");
    quote.textContent = '"' + obj.quote + '"';

    let season = document.createElement("p");
    season.classList.add("season");
    season.textContent = "Season: " + obj.season;

    let episode = document.createElement("p");
    episode.classList.add("episode");
    episode.textContent = "Episode: " + obj.episode;

    let textDiv = document.createElement("div");
    textDiv.classList.add("textDiv");

    let quoteDiv = document.createElement("div");
    quoteDiv.classList.add("quoteDiv");

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("imgDiv");

    let img = document.createElement("img");

    let leftDiv = document.createElement("div");
    leftDiv.classList.add("leftDiv");

    if (obj.who === "Dorothy Zbornak"){
        img.src = "https://i.pinimg.com/originals/66/65/a1/6665a1072dd19d3075812c903235c01f.jpg";
    } else {
        img.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-golden-girls-house-1564425239.jpg?crop=0.598xw:0.883xh;0.225xw,0.0102xh&resize=480:*";
    }

    imgDiv.appendChild(img);
    textDiv.appendChild(name);
    textDiv.appendChild(season);
    textDiv.appendChild(episode);
    quoteDiv.appendChild(quote);
    leftDiv.appendChild(textDiv);
    leftDiv.appendChild(quoteDiv);
    card.appendChild(leftDiv);
    card.appendChild(imgDiv);

    return card;
}

function appendCard(){
    let newCard = createCard(currentObj);
    cardDiv.appendChild(newCard);
}






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