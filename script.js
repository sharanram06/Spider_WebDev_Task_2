const queAndAns = [
	{
		que: 'Which Country Has The Most Deaths Due To Covid?',
		ans: 'USA',
		opt: [ 'India', 'Russia', 'USA', 'Brazil' ]
	},
	{
		que: 'What do doctors suggest as a cure for coronavirus?',
		ans: 'There is no cure yet; all of the above are false',
		opt: [
			'Hot water gargle',
			'Alkaline foods with pH level above that of coronavirus',
			'A combination of lemon and bicarbonate discovered to be effective in Israel',
			'There is no cure yet; all of the above are false'
		]
	},
	{
		que:
			'Many news organisations misreported that a European nation sent a bill of £130 billion to China for COVID-19 damages. Which country was dragged into this??',
		ans: 'Germany',
		opt: [ 'Germany', 'Russia', 'USA', 'Brazil' ]
	},
	{
		que: 'How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?',
		ans: 'More than 200',
		opt: [ 'More than 50', 'More than 100', 'More than 150', 'More than 200' ]
	},
	{
		que: 'Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird?',
		ans: 'Monkeys',
		opt: [ 'Monkeys', 'Lizards', 'Hens', 'Kites' ]
	},
	{
		que: ' In a study, which cells are found in COVID-19 patients bode well for long term immunity?',
		ans: 'T-Cell',
		opt: [ 'Endothelial Cells', 'T-Cell', 'D-Cell', 'P-Cell' ]
	},
	{
		que:
			'Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?',
		ans: 'Plasma Therapy',
		opt: [ 'Remdesivir', 'Plasma Therapy', 'Solidarity', 'Hydroxychloroquine' ]
	},
	{
		que: 'What happens to a person suffering from COVID-19?',
		ans: 'All the above are correct',
		opt: [
			'Around 80% of the people will require no treatment as such and will recover on their own.',
			'Around <20% or a small proportion may need hospitalisation.',
			'A very small proportion basically suffering from chronic illness may need admission in an Intensive Care Unit (ICU)',
			'All the above are correct'
		]
	},
	{
		que: 'In which age group the COVID-19 spreads?',
		ans: 'All the above are correct',
		opt: [
			'COVID-19 occur in all age groups.',
			'Coronavirus infection is mild in children',
			'Older person and persons with pre-existing medical conditions are at high risk to develop serious illness',
			'All the above are correct'
		]
	},
	{
		que: 'The first case of novel coronavirus was identified in',
		ans: 'Wuhan, Hubei',
		opt: [ 'Beijing', 'Shanghai', 'Wuhan, Hubei', 'Tianjin' ]
	}
];

const question = document.getElementById('que');
const questionNumber = document.querySelector('.quenumber');
const scoreText = document.querySelector('.score');
let score = 0;
const scoreElement = document.querySelector('.resultscore');
let attempt = 0;
const attemptElement = document.querySelector('.resultattempt');
let correct = 0;
const correctElement = document.querySelector('.resultcorrect');
const options = document.querySelector('.options');
let questionsRemaining = [];
let currentQueAndAns;
let currentOptions = [];
const randomQueAndAns = [];
const quizPage = document.querySelector('.quiz-page');
const resultPage = document.querySelector('.result-page');
const homePage = document.querySelector('.home-page');
const navNext= document.querySelector('.nav-next')
const navPrev= document.querySelector('.nav-prev')
const nameElement =document.querySelector('.namebox')
let name
const getRandomQueAndAns = () => {
	for (let i = queAndAns.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[ queAndAns[i], queAndAns[j] ] = [ queAndAns[j], queAndAns[i] ];
	}
	for (j in queAndAns) {
		randomQueAndAns[j] = queAndAns[j];
	}
};
const start =()=>{
     name=nameElement.value
     quizPage.classList.remove('invisible');
     homePage.classList.add('invisible');
     console.log(name)
}
let questionCount = 0;
const fixQueAndAns = () => {
	currentQueAndAns = randomQueAndAns[questionCount];
	question.innerHTML = currentQueAndAns.que;
	questionNumber.innerHTML = questionCount + 1 + ' of 10';
	options.innerHTML = ' ';
	for (i = 0; i < 4; i++) {
		currentOptions.push(currentQueAndAns.opt[i]);
	}
	for (i = 0; i < 4; i++) {
		const optionElement = document.createElement('button');
		optionElement.innerHTML = currentOptions[i];
		optionElement.className = 'btn';
		optionElement.setAttribute('onclick', 'checkAnswer(this)');
		options.appendChild(optionElement);
	}
	currentOptions = [];
};
const checkAnswer = (option) => {
	attempt++;
	if (option.innerHTML === currentQueAndAns.ans) {
		score++;
		correct++;
		scoreText.innerHTML = 'Score - ' + score;
		option.classList.add('green');
	} else {
		option.classList.add('red');
		for (i = 0; i < 4; i++) {
			console.log(options.children[i].innerHTML);
			console.log(currentQueAndAns.ans);
			console.log(options.children[i].innerHTML == currentQueAndAns.ans);
			if (options.children[i].innerHTML == currentQueAndAns.ans) {
				options.children[i].classList.add('green');
			}
		}
	}
	removePointer();
};
const removePointer = () => {
	for (i = 0; i < 4; i++) {
		options.children[i].classList.add('removepointer');
	}
};
const nextQue = () => {
    if(questionCount == 0)
    {navPrev.classList.remove("invisible")
    navNext.innerHTML="Next"
    questionCount++;
    fixQueAndAns()
    }
    else if(questionCount == 8){
       navNext.innerHTML="Result"
       questionCount++;
       fixQueAndAns();
    }
	else if (questionCount == 9) {
		endQuiz();
	} else {
        navNext.innerHTML="Next"
		questionCount++;
		fixQueAndAns();
	}
};
const prevQue = () => {
	if (questionCount == 0) {
		questionCount = 0;
    }
    else if(questionCount==1){
        navPrev.classList.add("invisible")
        questionCount--;
		fixQueAndAns();
    } 
    else if(questionCount==9){
        navNext.innerHTML="Next"
        questionCount--;
		fixQueAndAns();
    }
     else {
		questionCount--;
		fixQueAndAns();
	}
};
const endQuiz = () => {
	quizPage.classList.add('invisible');
	resultPage.classList.remove('invisible');
	scoreElement.innerHTML = score;
	attemptElement.innerHTML = attempt;
	correctElement.innerHTML = correct;
};
const tryagain = () => {
    location.reload();
};
window.onload = () => {
	getRandomQueAndAns();
	fixQueAndAns();
};
