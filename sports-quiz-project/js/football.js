let footarr = [
{
	question: "Who won the super ball in 1999?" ,
	answer: "niner"
},
{
	question: "Who won champions in 1980?" ,
	answer: "pattriot"
},
{
	question: "what team they have a black t-shirt?" ,
	answer: "radirs"
},
{
	question: "which time in bay area?" ,
	answer: "49ers"
},
{
	question: "what the beast time in 2016?" ,
	answer: "raiders"
}

];

for (var i = 0; i < footarr.length; i++){
	let qu = document.getElementById('q'+i)
	let quq = footarr[i].question
	qu.textContent = quq;
}
function checkAnswers(){

	let scfot = document.getElementById('score');

	score.innerHTML = "";

	let correct = 0;

	let incorrect = 0;

	let ug = document.getElementsByClassName('userguss');


	for (let i = 0; i < footarr.length; i++ ) {

		if (ug[i].value == footarr[i].answer) {

			document.getElementById('q'+i).style = "color: cyan;"

			correct++;


		}else{
			document.getElementById('q'+i).style = "color: tomato;"
			incorrect++;
		}
	}
		console.log("correct: " + " " + correct);
	console.log("incorrect: " + " " + incorrect);
		let corr = document.createElement("h1");
		let incorr = document.createElement("h1");
		corr.innerHTML = "correct:-" + " " + correct;
		incorr.innerHTML = "incorrect:-" + " " + incorrect;
		scfot.appendChild(corr);
		scfot.appendChild(incorr);
		 scfot.style = "display: block;";
	
}
