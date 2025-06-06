// Quiz Logic
const quizData = [
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style System"],
    answer: 0
  },
  {
    question: "What language runs in a web browser?",
    options: ["Python", "JavaScript"],
    answer: 1
  }
];

let currentQuestion = 0;

function loadQuiz() {
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");

  const qData = quizData[currentQuestion];
  questionEl.textContent = qData.question;

  optionsEl.innerHTML = "";
  qData.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selectedIndex) {
  const isCorrect = selectedIndex === quizData[currentQuestion].answer;
  alert(isCorrect ? "Correct!" : "Wrong!");
  currentQuestion = (currentQuestion + 1) % quizData.length;
  loadQuiz();
}

// Joke API
function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").innerText =
        `${data.setup} - ${data.punchline}`;
    })
    .catch(() => {
      document.getElementById("joke").innerText = "Failed to load joke.";
    });
}

// Initialize Quiz
window.onload = loadQuiz;
