    // make all the options you can key into an array
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Create variables to hold the number of wins, losses, guesses left, and guesses so far. Set the values to starting values.
    var wins = 0;
    var losses = 0;
    var gLeft = 9;
    var gsFar = "";
    
    var computerGuess;

    // Create variables that hold references to the places in the HTML where we want to display things.
   
    var userChoiceText = document.getElementById("userchoice-text");
    //var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var gLeftText = document.getElementById("gLeft-text");
    var gsFarText = document.getElementById("gsFar-text");

        
    //the event is when the user pressed a key
    document.onkeyup = function(event) {
    //capture the key
    var userGuess = event.key;
    gsFar += userGuess + ", ";
      

            
        // Computer randomly chooses a choice each round(9 guesses) from the options array.
        if (gLeft === 9) {
            computerGuess = options[Math.floor(Math.random() * options.length)];
        }



        //if userGuess the same as computerGuess then user win one point
        if (userGuess === computerGuess) {
            computerGuess = options[Math.floor(Math.random() * options.length)];
            wins++;
            gLeft = 9;
            gsFar = "";
        }


        // if your max guess reach 0 then you lose one point
        if (gLeft === 0){
            computerGuess = options[Math.floor(Math.random() * options.length)];
            losses++;
            gLeft = 9;
            gsFar = "";
        }
            
            
            // Display the user and computer choices to DOM. Call all revelent properties above
            //hides the directions
          
            userChoiceText.textContent = "You choose: " + userGuess;
            //computerChoiceText.textContent = "Computer choose: " + computerGuess;
            winsText.textContent = "Wins: " + wins;
            lossesText.textContent = "Losses: " + losses;
            gLeftText.textContent = "Guesses left: " + gLeft;
            gsFarText.textContent = "Your Guesses so far: " + gsFar;


            //9 max guesses; each guess is subtract from max guesses
            gLeft -= 1;
            
    };