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
const options = document.querySelector('.options');
let questionsRemaining = [];
let currentQueAndAns;
let currentOptions = [];
const randomQueAndAns = [];
const getRandomQueAndAns = () => {
	for (let i = queAndAns.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[ queAndAns[i], queAndAns[j] ] = [ queAndAns[j], queAndAns[i] ];
	}
	for (j in queAndAns) {
		randomQueAndAns[j] = queAndAns[j];
	}
};

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
	if (option.innerHTML === currentQueAndAns.ans) {
		score++;
		scoreText.innerHTML = 'Score - ' + score;
		option.classList.add('green');
	} else {
		option.classList.add('red');
		for (i = 0; i < 4; i++) {
			if (options.children[i].innerText == currentQueAndAns.ans) {
				option.classList.add('green');
			}
		}
	}
};

const nextQue = () => {
	if (questionCount == 9) {
		endQuiz();
	} else {
		questionCount++;
		fixQueAndAns();
	}
};
const prevQue = () => {
	if (questionCount == 0) {
		questionCount = 0;
	} else {
		questionCount--;
		fixQueAndAns();
	}
};
window.onload = () => {
	getRandomQueAndAns();
	fixQueAndAns();
};
