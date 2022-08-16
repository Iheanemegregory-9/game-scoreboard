let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let scoreBoard = document.querySelector(".bg-black");
let hScore = 15;
let gScore = 5;


function add1(){
    let score = hScore + 1;

    homeScore.innerText = score;

    scoreBoard.classList.add("scored")
    
}

function add2(){
    let score = hScore + 2;

    homeScore.innerText = score;
    scoreBoard.classList.add("scored")
}

function add3(){
    let score = hScore + 3;

    homeScore.innerText = score;
    scoreBoard.classList.add("scored")
}

function gscore1(){
    let score = gScore + 1;

    guestScore.innerText = score;
    scoreBoard.classList.add("scored")
}

function gscore2(){
    let score = gScore + 2;

    guestScore.innerText = score;
    scoreBoard.classList.add("scored")
}


function gscore3(){
    let score = gScore + 3;

    guestScore.innerText = score;
    scoreBoard.classList.add("scored")
}







