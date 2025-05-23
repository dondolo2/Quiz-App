// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const categoryButtons = document.querySelectorAll(".category-btn");
  const quizContainer = document.querySelector(".quiz");
  const categorySelection = document.querySelector(".category-selection");
  const questionElement = document.getElementById("question");
  const answerButtonsContainer = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const previousButton = document.getElementById("previous-btn");
  const backButton = document.getElementById("back-btn");
  const progressElement = document.getElementById("progress");

  // Verify all required elements exist
  if (
    !quizContainer ||
    !categorySelection ||
    !questionElement ||
    !answerButtonsContainer ||
    !nextButton ||
    !backButton ||
    !progressElement
  ) {
    console.error("Missing required DOM elements");
    return;
  }

  // Quiz state variables
  let currentCategory = "";
  let shuffledQuestions = [];
  let currentQuestionIndex;
  let score = 0;

  // Initialize the app
  function init() {
    quizContainer.classList.add("hidden");
    categorySelection.classList.remove("hidden");
  }

  // Start the quiz for a selected category
  function startQuiz(category) {
    currentCategory = category;

    // Get questions for the selected category
    const categoryQuestions = allQuestions[category];
    shuffledQuestions = [...categoryQuestions].sort(() => Math.random() - 0.5);

    const totalQuestions = shuffledQuestions.length;
    currentQuestionIndex = 0;
    score = 0;

    categorySelection.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    showQuestion();
  }

  // Display the current question and answers
  // function showQuestion() {
  //   const app = document.getElementById("app");
  //   app.appendChild(quizContainer);

  //   resetState();
  //   const currentQuestion = shuffledQuestions[currentQuestionIndex];
  //   const questionNumber = currentQuestionIndex + 1;

  //   // 1. Replace the question text
  //   questionElement.textContent = currentQuestion.question;
  //   progressElement.textContent = `Question ${questionNumber} of ${shuffledQuestions.length}`;

  //   // 2. Create and replace answer buttons
  //   currentQuestion.answers.forEach((answer) => {
  //     const button = document.createElement("button");
  //     button.textContent = answer.text;
  //     button.classList.add("btn");

  //     // Mark the correct answer
  //     if (answer.correct) {
  //       button.dataset.correct = answer.correct;
  //     }

  //     button.addEventListener("click", selectAnswer);
  //     answerButtonsContainer.appendChild(button);
  //   });

  //   function shuffleArray(arr) {
  //     return arr.sort(() => Math.random() - 0.5);
  //   }

  //   categoryButtons.forEach((button) => {
  //     button.addEventListener("click", () => {
  //       const selectedCategory = button.dataset.category;
  //       questions = allQuestions[selectedCategory];
  //       categorySelection.style.display = "none";
  //       quizContainer.style.display = "block";
  //       startQuiz();
  //     });
  //   });
  // }

  function showQuestion() {
    const app = document.getElementById("app");
    app.appendChild(quizContainer);

    resetState();
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;

    // Replace the question text
    questionElement.textContent = currentQuestion.question;
    progressElement.textContent = `Question ${questionNumber} of ${shuffledQuestions.length}`;

    // Shuffle the answers before creating buttons
    const shuffledAnswers = shuffleArray([...currentQuestion.answers]);

    // Determine the background color based on difficulty
    let bgColor;
    switch (currentQuestion.difficulty) {
      case "easy":
        bgColor = "#FEFADC";
        break;
      case "medium":
        bgColor = "#F6D4BA";
        break;
      case "hard":
        bgColor = "#F3B391";
        break;
      default:
        bgColor = "#ffffff"; // default fallback color
    }

    // Create and add answer buttons
    shuffledAnswers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.classList.add("btn");

      // Apply background color based on difficulty
      document.body.style.backgroundColor = bgColor;
      button.style.fontWeight = "bold";

      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }

      button.addEventListener("click", selectAnswer);
      answerButtonsContainer.appendChild(button);
    });
  }

  // Helper function: Place outside of showQuestion()
  function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  // Reset the quiz state for the next question
  function resetState() {
    nextButton.classList.add("hidden");
    previousButton.classList.add("hidden");
    // Clear previous answer buttons
    while (answerButtonsContainer.firstChild) {
      answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
    }
  }

  // Handle answer selection
  function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {
      selectedButton.classList.add("correct");
      score++;
    } else {
      selectedButton.classList.add("incorrect");
      // Highlight the correct answer
      Array.from(answerButtonsContainer.children).forEach((button) => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
        }
      });
    }

    // Disable all buttons after selection
    Array.from(answerButtonsContainer.children).forEach((button) => {
      button.disabled = true;
    });

    nextButton.classList.remove("hidden");
    if (currentQuestionIndex > 0) {
      previousButton.classList.remove("hidden");
    }
  }

  // Show the final score
  function showScore() {
    resetState();
    questionElement.textContent = `You scored ${score} out of ${shuffledQuestions.length}!`;
    nextButton.textContent = "Play Again";
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

  // BACKGROUND IMAGE FOR #APP
  const app = document.getElementById("app");

  document.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("mouseenter", () => {
      const category = button.dataset.category;
      app.style.backgroundImage = `url('img/${category}.jpg')`;
      app.style.backgroundSize = "contain";
      app.style.backgroundPosition = "center";
    });

    button.addEventListener("mouseleave", () => {
      app.style.backgroundImage = "none"; // Or set to default if needed
    });
  });

  const appBg = app; // shorthand

  document.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("mouseenter", () => {
      const category = button.dataset.category;
      const imageName = categoryImages[category];
      if (imageName) {
        appBg.style.setProperty("--hover-bg", `url('img/${imageName}')`);
        appBg.classList.add("hovering");
      }
    });

    button.addEventListener("mouseleave", () => {
      appBg.classList.remove("hovering");
    });
  });

  backButton.addEventListener("click", init);

  // Initialize the app when the page loads
  document.addEventListener("DOMContentLoaded", init);

  // Initialize the app
  init();
});
