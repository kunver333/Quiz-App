const quizDB = [
  {
    question: "Q1: What is the name of the full form of HTML?",
    a: "Hello to my Land",
    b: "Hey Text Markup Language",
    c: "Hypertext Markup Language",
    d: "Hypertext Markup Language",
    ans: "ans4",
  },
  {
    question: "Q2: JSON stands for _______.",
    a: "JavaScript Object Notation",
    b: "Java Object Notation",
    c: "JavaScript Object Normalization",
    d: "JavaScript Object-Oriented Notation",
    ans: "ans1",
  },
  {
    question: "Q3: JSON is a _____ for storing and transporting data.",
    a: "xml format",
    b: "text format",
    c: "JavaScript",
    d: "php format",
    ans: "ans2",
  },
  {
    question: "Q4: Who is the creator of JSON?",
    a: "Alvin Alexander",
    b: "Rasmus Lerdorf",
    c: "Douglas Crockford",
    d: "Jesse James Garrett",
    ans: "ans3",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
console.log(answers);
let count = 0;
const loadQuestion = () => {
  const questionList = quizDB[count];
  question.innerHTML = questionList.question;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};
loadQuestion();

const getAnswer = () => {
  let;
};
submit.addEventListener("click", () => {
  const checkedAnswer = getAnswer();
});
