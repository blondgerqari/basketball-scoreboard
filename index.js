let homeScoreOne = document.getElementById("home-score-one");
let homeScoreTwo = document.getElementById("home-score-two");
let homeScoreThree = document.getElementById("home-score-three");
let guestScoreOne = document.getElementById("guest-score-one");
let guestScoreTwo = document.getElementById("guest-score-two");
let guestScoreThree = document.getElementById("guest-score-three");
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let homeScore=0;
let guestScore=0;

function plusOneHome(){
    homeScore+=1;
    homeScoreEl.innerText=homeScore;
}

function plusTwoHome(){
    homeScore+=2;
    homeScoreEl.textContent=homeScore;
}

function plusThreeHome(){
    homeScore+=3;
    homeScoreEl.textContent=homeScore;
}

function plusOneGuest(){
    guestScore+=1;
    guestScoreEl.textContent = guestScore;
}

function plusTwoGuest(){
    guestScore+=2;
    guestScoreEl.textContent = guestScore;
}

function plusThreeGuest(){
    guestScore+=3;
    guestScoreEl.textContent = guestScore;
}

function newGame(){
    guestScore=0;
    homeScore=0;
    homeScoreEl.textContent=homeScore;
    guestScoreEl.textContent = guestScore;
}