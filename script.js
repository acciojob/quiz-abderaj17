//your JS code here. If required.
const questions = [
	{
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
	const currentQuestion = questions[currentQuestionIndex];
	document.getElementById('question').innerText =
		currentQuestion.question;
	document.getElementById('a_text').innerText = 
		currentQuestion.a;
	document.getElementById('b_text').innerText =
		currentQuestion.b;
	document.getElementById('c_text').innerText =
		currentQuestion.c;
	document.getElementById('d_text').innerText =
		currentQuestion.d;
}