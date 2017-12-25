//Getting the document ready first
$(document).ready(function(){
//hiding the div's we don't want to see right away.
	$(".mainContent").hide();
	$(".finalContent").hide();

//creating question and answer arrays.  Tried to do this as one object initially
	var questions = [
		"In what year was the original movie Clue first released in theaters?",
		"Comedy great Madeline Kahn played the role of what character?",
		"Clue is one of the most well-scripted movies of all time",
		"How many different endings does Clue have?",
		"When the Cop answers the phone in the library, who is on the phone?",
		"What was Ms. White's first husband's profession?",
		"How does Yvette die?  Was she:",
		"What actress played the role of Mrs. Peacock?",
		"Miss Scarlet described what as a 'Red Herring?'",
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

//console logged to make sure answer array behaved as i thought it would
	// console.log(answers[0][2]);

//variables storing the answer count for the end	
	var rightAnswers = 0;
	var wrongAnswers = 0;
	var nonAnswers = 0;





//code to write in answer tally on last screen
	$("#correct").text("Correct Answers:" + " " + rightAnswers);
	$("#incorrect").text("Incorrect Answers:" + " " + wrongAnswers);
	$("#unanswered").text("Unanswered:" + " " + nonAnswers);

//click function on the start button
	$(".startBtn").on('click', function (){

//sets timer to begin after click		
		var totalTime = 50;
		var timeCounter = setInterval(timer, 1000);
		function timer (){
//writes time remaining to the page			
			$(".timer").html("<h4>Time Remaining: </h4>" + totalTime);

			totalTime --;
//instructs to show final page if time runs out			
			if (totalTime <= 0) {
				$(".finalContent").show();
				$(".mainContent").hide();
				clearInterval(timeCounter);
			    return;
			}	  
		}
//hides intro div
		$(".intro").hide();
		$(".mainContent").show();
		timer ();

//loops through questions and writes them to html		
		for (var i = 0; i < questions.length; i++) {
		var qDiv = $("<div>");
		qDiv.append(aDiv);
		var qText = $("<h3>").text(questions[i]);
		qDiv.append(qText);
		var actQuestions = $(".qNa").append(qDiv);
//loops through answers array and appends those to the questions		
			for (var j = 0; j < answers[i].length; j++) { 
			var aDiv = $("<label class='radio'><input type='radio' value=''>");
			var aText = $("<h4>").text(answers[i][j]);
			var actAnswers = aDiv.append(aText);
			actQuestions.append(actAnswers);
			}



		}
	// if (input === answers[i][0]) {
	// 		rightAnswers ++;
	// 	}else if(input !== answers[i][0]) {
	// 		wrongAnswers ++;
	// 	}		
		

	});//closes click function


});//closes document.ready function


/*Still left to code:  Need to assign a name attribute to the input tag of the 
specific answers for each question so that you can only select one radio button 
in each. The only way I could find to dynamically create the buttons gave them no name
(so you could select as many as you want) or the same name (so you could only select one
out of ALL of the answers).  I was trying to avoid just putting the Qs and As into the HTML
because i thought that was too easy.

Beyond that I need my if/elses to tally my right and wrong answers. */
// var aDiv = $("<div class = 'input-group'><input type='radio' name = 'samename' aria-label='name'>");
// trying to get my radios to work

