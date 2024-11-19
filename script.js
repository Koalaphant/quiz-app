const questions = [
  {
    question: "What is the capital of Australia?",
    answers: {
      1: "Canberra",
      2: "Sydney",
      3: "Perth",
      4: "Australasia",
    },
    correctAnswer: 1,
    imageLink:
      "https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: {
      1: "Mars",
      2: "Venus",
      3: "Jupiter",
      4: "Saturn",
    },
    correctAnswer: 1,
    imageLink:
      "https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: {
      1: "William Shakespeare",
      2: "Charles Dickens",
      3: "Jane Austen",
      4: "Mark Twain",
    },
    correctAnswer: 1,
    imageLink:
      "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    question: "Which ocean is the largest?",
    answers: {
      1: "Atlantic Ocean",
      2: "Indian Ocean",
      3: "Arctic Ocean",
      4: "Pacific Ocean",
    },
    correctAnswer: 4,
    imageLink:
      "https://images.pexels.com/photos/6585322/pexels-photo-6585322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: {
      1: "Mount Everest",
      2: "K2",
      3: "Kangchenjunga",
      4: "Mount Kilimanjaro",
    },
    correctAnswer: 1,
    imageLink:
      "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: {
      1: "Leonardo da Vinci",
      2: "Vincent van Gogh",
      3: "Pablo Picasso",
      4: "Claude Monet",
    },
    correctAnswer: 1,
    imageLink:
      "https://images.pexels.com/photos/3004109/pexels-photo-3004109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

//load the first question
//load the image
//load the answers
//clickable answers
//if clicked box === correctAnswer => proceed to next question
//if wrong, show correct answer and move on

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionElement = document.getElementById("question");
  const imageElement = document.getElementById("question-image");

  //Injecting question and image content
  questionElement.textContent = currentQuestion.question;
  imageElement.src = currentQuestion.imageLink;

  loadAnswers(currentQuestion.answers);
}

function loadAnswers(answers) {
  const answerTiles = document.getElementsByClassName("answer-box");

  for (let key in answers) {
    const pTag = answerTiles[key - 1].querySelector("p");
    pTag.textContent = answers[key];

    answerTiles[key - 1].addEventListener("click", () => {
      console.log(key);
    });
  }
}

function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.correctAnswer) {
    score += 10;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadQuestion();
});
