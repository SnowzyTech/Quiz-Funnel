const maleQuestions = [
    {
      question: "Which of these best describes you?",
      options: [
        "You have big belly",
        "You have excess fats all over your body",
        "You are overweight and big"
      ]
    },
    {
      question: "How often do you eat per day?",
      options: [
        "Once Daily",
        "Twice Daily",
        "Three Times Daily",
        "I eat as often as I can but in small quantities"
      ]
    },
    {
      question: "Which of the following exercises do you engage in?",
      options: [
        "Skipping",
        "Walking",
        "Going to the gym",
        "I don't do exercise"
      ]
    }
  ];
  
  const femaleQuestions = [
    {
      question: "Which of these best describes you?",
      options: [
        "You recently gave birth and your tummy still looks protruded and big like you're still 6 months pregnant",
        "You have excess fats all over your body",
        "You are overweight and just big"
      ]
    },
  ];
  
  let currentSection = "";
  let currentQuestionIndex = 0; // Initialize question index
  
  function showMaleQuestions() {
    currentSection = "male";
    currentQuestionIndex = 0; // Reset question index
    document.getElementById('questions').style.display = 'block';
    displayNextQuestion();
  }
  
  function showFemaleQuestions() {
    currentSection = "female";
    currentQuestionIndex = 0; // Reset question index
    document.getElementById('questions').style.display = 'block';
    displayNextQuestion();
  }
  
  function displayNextQuestion() {
    const questions = currentSection === "male" ? maleQuestions : femaleQuestions;
    const question = questions[currentQuestionIndex];
  
    if (!question) {
      // End of questions for this section, redirect
      const redirectUrl = currentSection === "male" ? "male_results.html" : "female_results.html";
      window.location.href = redirectUrl;
      return;
    }
  
    document.getElementById("question").textContent = question.question;
    document.getElementById("options").innerHTML = "";
  
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => {
        // Handle option click
        handleOptionClick(option);
      };
      document.getElementById("options").appendChild(button);
    });
  
    currentQuestionIndex++;
  }
  
  function handleOptionClick(option) {
    if (currentSection === "female") {
      if (option === "You recently gave birth and your tummy still looks protruded and big like you're still 6 months pregnant") {
        followUpQuestionForRecentlyGaveBirth();
        return;
      } else if (option === "You have excess fats all over your body") {
        followUpQuestionForExcessFats();
        return;
      } else if (option === "You are overweight and just big") {
        followUpQuestionForOverweight();
        return;
      }
    }
    // Normal case, just display next question
    displayNextQuestion();
  }
  
  function followUpQuestionForRecentlyGaveBirth() {
    const followUpQuestions = [
      {
        question: "Which of these best describes you?",
        options: ["Breastfeeding mums", "Your last child is between 2 - 5 years"]
      },
      {
        question: "Who are you?",
        options: ["Emmas", "Edo"]
      }
    ];
    displayFollowUpQuestions(followUpQuestions);
  }
  
  function followUpQuestionForExcessFats() {
    const followUpQuestions = [
      {
        question: "Are you still looking to conceive?",
        options: ["Yes", "No"]
      },
      {
        question: "When last did you treat infection?",
        options: ["6 months - 1 year", "2 - 3 years", "3 years plus", "Never"]
      }
    ];
    displayFollowUpQuestions(followUpQuestions);
  }
  
  function followUpQuestionForOverweight() {
    const followUpQuestions = [
      {
        question: "Hello",
        options: ["Yes", "No"]
      },
      {
        question: "How far",
        options: ["Yes", "No"]
      }
    ];
    displayFollowUpQuestions(followUpQuestions);
  }
  
  function displayFollowUpQuestions(followUpQuestions) {
    currentQuestionIndex = 0; // Reset question index for follow-up questions
  
    displayNextFollowUpQuestion(followUpQuestions);
  }
  
  function displayNextFollowUpQuestion(followUpQuestions) {
    if (currentQuestionIndex >= followUpQuestions.length) {
      // No more follow-up questions, exit function
      return;
    }
  
    const currentQuestion = followUpQuestions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("options").innerHTML = "";
  
    currentQuestion.options.forEach((opt) => {
      const button = document.createElement("button");
      button.textContent = opt;
      button.onclick = () => {
        handleOptionClick(opt, followUpQuestions);
      };
      document.getElementById("options").appendChild(button);
    });
  
    currentQuestionIndex++;
  }
  