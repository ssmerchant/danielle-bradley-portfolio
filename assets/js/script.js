const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'Madrid', 'Rome', 'London'],
    correctAnswer: 'Paris'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
    correctAnswer: 'Mars'
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
    correctAnswer: 'Leonardo da Vinci'
  }
];

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const quiz = quizData[currentQuestion];
  questionElement.textContent = quiz.question;
  optionsContainer.innerHTML = '';

  for (let i = 0; i < quiz.options.length; i++) {
    const option = document.createElement('div');
    option.classList.add('option');
    option.innerHTML = `
      <input type="radio" id="option${i}" name="answer" value="${quiz.options[i]}">
      <label for="option${i}">${quiz.options[i]}</label>
    `;
    optionsContainer.appendChild(option);
  }
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) return;

  const answer = selectedOption.value;
  if (answer === quizData[currentQuestion].correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizContainer.innerHTML = `
    <h1>Quiz Result</h1>
    <p>Your score: ${score}/${quizData.length}</p>
  `;
}

loadQuestion();
submitButton.addEventListener('click', checkAnswer);
