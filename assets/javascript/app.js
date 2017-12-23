// var questions = {
// 	qOne : ["In what year was the original movie Clue first released in theaters?", "1985", "1982", "1988", "1994"]
// 	qTwo : ["Comedy great Madeline Kahn played the role of what character?", "Ms. White", "Miss Scarlet", "The Cook", "Mr. Boddy"]
// 	qThree : ["Clue is one of the most well-scripted movies of all time", "True!", "False"]
// 	qFour : ["How many different endings does Clue have?", "3", "1", "2"],
// 	qFive : ["When the Cop answers the phone in the library, who is on the phone?", "J. Edgar Hooover", "Eleanor Roosevelt", "Michael Jackson", "A Salesman"]
// 	qSix : ["What was Ms. White's first husband's profession?", "Illusionist", "Doctor", "Tax Collector", "Politician"]
// 	qSeven : ["How does Yvette die?  Was she:", "Strangled?", "Shot?", "Stabbed?"]
// 	qEight : ["What actress played the role of Mrs. Peacock?", "Eileen Brennan", "Faye Dunaway", "Carol Burnett","Shelley Duvall"]
// 	qNine : ["Miss Scarlet described <em>what</em> as a 'Red Herring?'", "Communism", "Fascism", "Dinner", "Christianity"]
// 	qTen : ["In the final version of the ending, who killed Mr. Boddy?", "Mr. Green", "Miss Scarlet", "Col. Mustard", "Mrs. Peacock"]
// 	qEleven : ["Where and how was Mr. Boddy killed?", "In the Hall, with the Revolver", "In the Study, with the Candlestick", "In the Kitchen, with the Knife"]
// };
$(document).ready(function(){
	$(".mainContent").hide();
	$(".finalContent").hide();

	var questions = [
		"In what year was the original movie Clue first released in theaters?",
		"Comedy great Madeline Kahn played the role of what character?",
		"Clue is one of the most well-scripted movies of all time",
		"How many different endings does Clue have?",
		"When the Cop answers the phone in the library, who is on the phone?",
		"What was Ms. White's first husband's profession?",
		"How does Yvette die?  Was she:",
		"What actress played the role of Mrs. Peacock?",
		"Miss Scarlet described <em>what</em> as a 'Red Herring?'",
		"In the final version of the ending, who killed Mr. Boddy?",
		"Where and how was Mr. Boddy killed?",
		]
	var answers = [
		["1985", "1982", "1988", "1994"],
		["Ms. White", "Miss Scarlet", "The Cook", "Mr. Boddy"],
		["True!", "False"],
		["3", "1", "2"],
		["J. Edgar Hooover", "Eleanor Roosevelt", "Michael Jackson", "A Salesman"],
		["Illusionist", "Doctor", "Tax Collector", "Politician"],
		["Strangled?", "Shot?", "Stabbed?"],
		["Eileen Brennan", "Faye Dunaway", "Carol Burnett","Shelley Duvall"],
		["Communism", "Fascism", "Dinner", "Christianity"],
		["Mr. Green", "Miss Scarlet", "Col. Mustard", "Mrs. Peacock"],
		["In the Hall, with the Revolver", "In the Study, with the Candlestick", "In the Kitchen, with the Knife"],
		]


	console.log(answers);
	var rightAnswers = 0;
	var wrongAnswers = 0;
	var nonAnswers = 0;


	console.log(questions[0]);

//timer
	var totalTime = 45;
	var timeCounter = setInterval(timer, 1000);
	function timer (){
		totalTime --;
		  if (count <= 0) {

		  }
		     clearInterval(counter);
		     return;
		  
	}


	$(".startBtn").on('click', function (event){
		$(".intro").hide();
		$(".mainContent").show();
		$(".timer").html("<h4>Time Remaining: </h4>" + timeCounter);
		timer ();
	});




});//closes document.ready function
