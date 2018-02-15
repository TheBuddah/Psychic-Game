alert("you have 10 guesses, what's your guess?");

var answer = 3;
var guess = prompt("What's your guess?");

for(i=0; i<10; i++){
	if(answer = = guess) {
		alert("you guessed correctly");
		break;
	} else {
		guess = prompt("please try again");
	}
}

