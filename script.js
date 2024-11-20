import { questions } from "./questions.js"; // Import the questions data

let currentQuestionIndex = 0;
let score = 0;

window.handleAnswerClick = function (selectedAnswer) {
  checkAnswer(selectedAnswer);
};

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionElement = document.getElementById("question");
  const imageElement = document.getElementById("question-image");

  if (currentQuestion) {
    questionElement.textContent = currentQuestion.question;
    imageElement.src = currentQuestion.imageLink;
    loadAnswers(currentQuestion.answers);
  }
}

function loadAnswers(answers) {
  const answerTiles = document.getElementsByClassName("answer-box");

  Object.keys(answers).forEach((key, index) => {
    const pTag = answerTiles[index].querySelector("p");
    pTag.textContent = answers[key];
  });
}

function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestion) {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      score++;
    }
    nextQuestion();
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  const scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.textContent = `Your score is ${score} out of ${questions.length}`;
  }
}

document.addEventListener("DOMContentLoaded", loadQuestion);
