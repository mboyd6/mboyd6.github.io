function game() {
var anchor = prompt("Welcome to the game of Guess my Number!! To start, player one, choose your number! (Don't Look, Player two!)");
var guess  = prompt("Ok. Player Two, you have five guesses to figure out what number player one entered:");
if( guess === anchor )
{
    console.log("Correct! P2 wins!")
}
else
{
        if(guess > anchor)
    {
        var guess = prompt("too high! You have four chances left. Guess again:")
    }
    else
    {
        var guess = prompt("too low! you have four chances left. Guess again:")
    }

}

// round two

if( guess === anchor )
{
    console.log("Correct! P2 wins!")
}
else
{
        if(guess > anchor)
    {
        var guess = prompt("too high! You have three chances left. Guess again:")
    }
    else
    {
        var guess = prompt("too low! you have three chances left. Guess again:")
    }

}

//round three

if( guess === anchor )
{
    console.log("Correct! P2 wins!")
}
else
{
        if(guess > anchor)
    {
        var guess = prompt("too high! You have two chances left. Guess again:")
    }
    else
    {
        var guess = prompt("too low! you have two chances left. Guess again:")
    }

}

//round four
if( guess === anchor )
{
    console.log("Correct! P2 wins!")
}
else
{
        if(guess > anchor)
    {
        var guess = prompt("too high! This is your last chance! make it count. Guess again:")
    }
    else
    {
        var guess = prompt("too low! this is your last chance Guess again:")
    }

}

//round five

if( guess === anchor )
{
    var repeat = prompt("Nice job p2!!!, You totally guess what p1 was thinking... want to play again? (y if yes)")
}
else
{
       var repeat = prompt("Nice try p2, but p1 got the better of you this time... want to play again? (y if yes)")
}

//play again
if(repeat === "y")
{ 
    game();
}
else
{
console.log("thanks for playing!")
}

}
game();
    // Remember, the order and punctuation matter.
// If you get an error, check carefully, line by line.
// If you're really stuck, click "Stuck? Get a hint!"