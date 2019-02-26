//avialable options are all the alphabet keys
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//the data we are keeping track of are: win score, loss score, guess so far, rounds left, computer pick
var winScore = 0;
var lossScore = 0;
var roundLeft = 9;
var guessSoFar = "";
var computerPick

//create variables to hold reference on DOM
var updateWin = document.getElementById("win-text");
var updateLoss = document.getElementById("loss-text");
var updateRoundLeft = document.getElementById("gLeft-text");

//FUNCTIONS goes here
//update guess left and display on DOM
function updateGSF() {
    document.getElementById("gSFar-text").innerHTML = guessSoFar;
};

//generate random letter
function randomLetter() {
    computerPick = options[Math.floor(Math.random()*options.length)]
    console.log("Computer Pick: " + computerPick);
}

//reset guess left to 9, computer pick again, guess so far is empty
function reset() {
    roundLeft = 9;
    randomLetter();
    guessSoFar = "";
    updateGSF();
}

//MAIN PROCESS STARTS ===========================================================================
//1.) When the game start with default of 9 rounds, computer pick a letter, empty guesses so far
reset();


//EVENT
//2.) when a key is released it will tiger the event
document.onkeyup = function(event) {
    // the key which is pressed is the event
    var keyPressed = event.key.toLowerCase();
    // the keys pressed are data of variable guessSoFar
    guessSoFar += (keyPressed + " ,");
    //display guessSoFar
    updateGSF();

    //loop through the available options, if the key which is pressed is one of the available options then..
    for (var i = 0; i<options.length; i++) {

        if ( keyPressed === options[i] ) {

            //if keyPressed is same as computerPick then win score add 1, round left go back to 9, computer pick a new letter
            if ( keyPressed === computerPick) {
                winScore++;
                reset()
            }
            //or else, round left minus 1
            else {
                roundLeft--;
                //if round left reaches 0, then user lose one score. Everything goes back to default
                if (roundLeft === 0) {
                    lossScore++;
                    reset()
                }
            }
        }
    }

    //display the win score, loss score and rounds left onto DOM
    updateWin.textContent = winScore;
    updateLoss.textContent = lossScore;
    updateRoundLeft.textContent = roundLeft;
}