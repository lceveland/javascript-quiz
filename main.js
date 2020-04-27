
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;


	if (question1 == "background: blue;") {
		correct++;
}
	if (question2 == "index.html") {
		correct++;
}
	if (question3 == "mkdir instructions") {
		correct++;
}
	if (question4 == "Array") {
	correct++;
}
	if (question5 == "Right") {
	correct++;
}
	if (question6 == "border-radius: 20px;") {
	correct++;
}
	if (question7 == "cd health") {
	correct++;
}
	if (question8 == "A circle shape") {
	correct++;
}
	if (question9 == "style") {
	correct++;
}
	if (question10 == "Update") {
	correct++;
}

	var pictures = ["img/celebration.jpeg", "img/thumb.jpeg", "img/study.jpeg", "img/bad.jpeg"];
	var messages = ["Well done!", "You're getting there!", "You may want to study more", "Did you even try?"];
	var score;

	if (correct == 0) {
		score = 3;
	}

	if (correct > 0 && correct < 6) {
		score = 2;
	}

	if (correct > 5 && correct < 10) {
		score = 1;
	}

	if (correct == 10) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
