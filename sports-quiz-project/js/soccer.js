// qize paper prototype
// HTML (what we need)
// text tages for the questions
// ways to take answers
  // ^input = text
  // ^buttons
  // ^input = radios
// keep score of right and wrong
  // ^h1 for wrong
  // ^h1 for right
// feedback on choice selection - on submit button
  // submit button for every question
// Javascript
// an array of object that have pairs of questions and answers
// function that take user input of the exact question and answer 
let quizarr = [
{
	question: "Who won the world cup in 1990?" ,
	answer: "germany"
},
{
	question: "Who won champions league in 2013?" ,
	answer: "bayern munich"
},
{
	question: "who won the spanish league in 2014?" ,
	answer: "real madrid"
},
{
	question: "who won the copa America in 2015?" ,
	answer: "chile"
},
{
	question: "who won euro cup in 2008?" ,
	answer: "spian"
}

];

for (let i = 0; i < quizarr.length; i++){
	// target the corresponding h1
	// what we did here ('q'+i) the concatinoion  the thing the all h1 have its the q and they have diffirnt number after that on the id name
	// so what we did here we but the q and we add the i becuse the i number its the same number for the Q
	let thisheader = document.getElementById('q'+i)
	// target the corresponding object question how we can get the Q just the Q i dont whant the answer
	let thisQ = quizarr[i].question
	// put the question in the h1
	thisheader.textContent = thisQ
	// 1- get all the h1 one by one 
	// 2-look throu evere single object we add .question so we can just get the qustion 
	// 3- point each of the h1 and . textcontent to chang the text and we chang the text inside the h1 to the Q we find (the h1 its empty)

}
function checkAnswers(){
	// get the # score id and save it into the var
	let scores = document.getElementById("score");
	// delete it and press the butoon so many time and see what it gonna happend 
	// it will make the func run just one time
	score.innerHTML = "";
	// check score created tow var to keep track of how many the user got right and wrong
	let correct = 0;
	let incorrect = 0;
	// take user input and check it VS their corresponding Q
	let usergusss = document.getElementsByClassName("userguss")
	
	for(let i = 0; i < quizarr.length; i++){
		if (usergusss[i].value == quizarr[i].answer) {
			document.getElementById('q'+i).style = "color: cyan;"
			correct++;
		}else{
			document.getElementById('q'+i).style = "color: tomato;"
			incorrect++;

		}
	}
	console.log("correct: " + " " + correct);
	console.log("incorrect: " + " " + incorrect);
	// going to create element for the score
let correctbox = document.createElement("h1");
let incorrectbox = document.createElement("h1");
	// put the text into the new element 
	correctbox.innerHTML = "correct:-" + " " +correct;
	incorrectbox.innerHTML = "incorrect:-" + " " + incorrect;


	// send the two element to #score div
  scores.appendChild(correctbox);
  scores.appendChild(incorrectbox);
	// change to display to #score div to inline or whatever on the CSS
   scores.style = "display: block;";
}