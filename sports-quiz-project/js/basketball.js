var basktarr = [
{
	question: "how many basketball team in the bay area?" ,
	answer: "1"
},
{
	question: "what the bay area team name?" ,
	answer: "warriors"
},
{
	question: "what team did micheal jordan play for?" ,
	answer: "chicago bulls"
},
{
	question: "how many players can play on the cort?" ,
	answer: "10"
},
{
	question: "who score the most point's in the history?" ,
	answer: "kareem abduljabbar"
}
];

for (let i = 0; i < basktarr.length; i++){
	let bask = document.getElementById('q'+ i);
	let basket = basktarr[i].question;
	bask.textContent = basket;
}



function checkAnswers() {
	let baas = document.getElementById('score');

	score.innerHTML = "";

	let correct = 0;
	let incorrect = 0;

	let inpu = document.getElementsByClassName('userguss');

	for (let i = 0; i < basktarr.length; i++ ){
		if (inpu[i].value == basktarr[i].answer)
		{
			document.getElementById('q'+ i).style = "color: cyan;";
			correct++
		}else{
			document.getElementById('q'+ i).style = "color: tomato;";
			incorrect++
		}
	}
	console.log("correct" + " " + correct);
	console.log("incorrect" + " "+ incorrect);

	let corr = document.createElement('h1');
	let incorr = document.createElement('h1')

	corr.innerHTML = "correct" + " " + correct;
	incorr.innerHTML = "incorrect" + " "+ incorrect;
	baas.appendChild(corr);
	baas.appendChild(incorr);
	score.style = "display:block;";


	
}

