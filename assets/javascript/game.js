$(document).ready(function() {

//Global varibales
var wins = 0;
var losses = 0;
var computerNumber = 0;
var diamond1 = 0;
var diamond2 = 0;
var diamond3 = 0;
var diamond4 = 0;
var userScore = 0;

//generate random numbers 
function randomNumber(min.max){
	return Math.floor(Math.random() *(max - min + 1) + min);
}

//reset game function
function reset() {
	computerNumber = 0;
	diamond1 = 0;
	diamond2 = 0;
	diamond3 = 0;
	diamond4 = 0;
	userScore = 0;
	$('.userScore').text(0);
	startGame();
};

//compare score function
function checkScore() {
	if (userScore == computerNumber) {
	win++;
	$('#win').text(win);
	};

	if (userScore > computerNumber) {
		losses++;
		$('#loss').text(loss);
	};
};

//start game
function startGame(){
	//computer choose random number
		var numb1 = randomNumber(19,120);
		computerNumber = numb1;
		$('#compNumb').text(computerNumber);

	//diamond 1 choosen
		var numb2 = randomNumber(1,12);
		diamond1 = numb2;

	//diamond 2 choosen
		var numb3 = randomNumber(1,12);
		diamond2 = numb3;

	//diamond 3 choosen
		var numb4 = randomNumber(1,12);
		diamond3 = numb4;

	//diamond 4 choosen
		var numb5 = randomNumber(1,12);
		diamond4 = numb5;

}



