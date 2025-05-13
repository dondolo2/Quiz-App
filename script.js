// DOM Elements
const categoryButtons = document.querySelectorAll(".category-btn");
const quizContainer = document.querySelector(".quiz");
const categorySelection = document.querySelector(".category-selection");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");
const progressElement = document.getElementById("progress");

// Quiz state variables
let currentCategory = "";
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 10; // Number of questions per quiz

// Initialize the app
function init() {
  quizContainer.classList.add("hidden");
  categorySelection.classList.remove("hidden");
}

// Start the quiz for a selected category
function startQuiz(category) {
  currentCategory = category;
  shuffledQuestions = [...allQuestions[category]]
    .sort(() => Math.random() - 0.5)
    .slice(0, totalQuestions);
  currentQuestionIndex = 0;
  score = 0;

  categorySelection.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  showQuestion();
}

// Display the current question
function showQuestion() {
  resetState();
  const question = shuffledQuestions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;

  questionElement.innerHTML = question.question;
  progressElement.textContent = `Question ${questionNumber} of ${totalQuestions}`;

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn", "answer-btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

// Reset the quiz state for the next question
function resetState() {
  nextButton.classList.add("hidden");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Handle answer selection
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";

  if (correct) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
    // Highlight the correct answer
    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
    });
  }

  // Disable all buttons after selection
  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
  });

  nextButton.classList.remove("hidden");
}

// Show the final score
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${totalQuestions}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.classList.remove("hidden");
}

// Handle the next button click
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// Event Listeners
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    startQuiz(button.dataset.category);
  });
});

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < shuffledQuestions.length) {
    handleNextButton();
  } else {
    // Reset the quiz if "Play Again" is clicked
    startQuiz(currentCategory);
  }
});

backButton.addEventListener("click", () => {
  quizContainer.classList.add("hidden");
  categorySelection.classList.remove("hidden");
});

// Initialize the app when the page loads
document.addEventListener("DOMContentLoaded", init);
