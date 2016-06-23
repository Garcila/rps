var userScore = 0;
var compScore = 0;

$(document).ready(function(){
	$('.circle_rock').click(function() {
		$('.middle_rectangle').empty();
		var userChoice = "rock";
		var computerChoice = computerPick();
		$('.middle_rectangle').append('User chooses: ' + userChoice + ('<br>')
		+ 'Computer chooses: ' + computerChoice + ('<br>')
	  + compare(userChoice, computerChoice));
		scoreBoard();
	})

	$('.circle_paper').click(function() {
		$('.middle_rectangle').empty();
		var userChoice = "paper";
		var computerChoice = computerPick();
		$('.middle_rectangle').append('User chooses: ' + userChoice + ('<br>')
		+ 'Computer chooses: ' + computerChoice + ('<br>')
		+ compare(userChoice, computerChoice));
		scoreBoard();
	})

	$('.circle_scissors').click(function() {
		$('.middle_rectangle').empty();
		var userChoice = "scissors";
		var computerChoice = computerPick();
		$('.middle_rectangle').append('User chooses: ' + userChoice + ('<br>')
		+ 'Computer chooses: ' + computerChoice + ('<br>')
		+ compare(userChoice, computerChoice));
		scoreBoard();
	})

	$('.bottom_rectangle').click(function() {
		resetGame();
	})
});

var scoreBoard = function() {
	$('.top_rectangle').empty();
	$('.top_rectangle').append('User Score: ' + userScore + ('<br>') + 'Computer Score: ' + compScore);
}

var resetGame = function() {
	$('.top_rectangle').empty();
	$('.middle_rectangle').empty();
	var userScore = 0;
	var compScore = 0;
}

//var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerPick = function() {
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		return("rock");
	} else if(computerChoice <= 0.67) {
		return("paper");
	} else {
		return("scissors");
	}
};

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return("The result is a Tie!");
    } else if(choice1 === "rock") {
        if(choice2 === "scissors") {
						userScore++;
						return("ROCK WINS!");
        } else {
						compScore++;
            return("PAPER WINS!");
        }
    } else if(choice1 === "paper") {
        if(choice2 === "rock") {
						userScore++;
            return("PAPER WINS!");
        } else {
						compScore++;
            return("SCISSORS WINS!");
        }
    } else if(choice1 === "scissors") {
        if(choice2 === "rock") {
						compScore++;
            return("ROCK WINS!");
        } else {
						userScore++;
            return("SCISSORS WINS!");
        }
    }
}
