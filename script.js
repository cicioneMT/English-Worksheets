// 1. Baza de Date a Întrebărilor
const quizData = {
    // Level B1 (Pre-Intermediate)
    B1: [
        {
            question: "Choose the correct preposition: She is good ____ playing the piano.",
            options: ["at", "on", "in", "with"],
            answer: "at",
            explanation: "The correct preposition is 'at'. The standard idiom to show ability (to be good/bad at something) is **'good at'** / **'bad at'**."
        },
        {
            question: "Complete the sentence with the correct form: If I had more money, I ____ a new car.",
            options: ["will buy", "would buy", "buy", "bought"],
            answer: "would buy",
            explanation: "This is a Second Conditional sentence, used for hypothetical or unrealistic situations in the present. The structure is: **If + Past Simple, ... would + Verb Base Form**."
        }
    ],

    // Level B2 (Upper-Intermediate)
    B2: [
        {
            question: "Which phrasal verb means 'to tolerate'?",
            options: ["get over", "put up with", "take off", "look up to"],
            answer: "put up with",
            explanation: "The phrasal verb **'to put up with'** means 'to tolerate' or 'to endure' an unpleasant situation or person."
        },
        {
            question: "Choose the word that means 'extremely large':",
            options: ["minuscule", "gorgeous", "colossal", "tiresome"],
            answer: "colossal",
            explanation: "The adjective **'colossal'** means extremely large, gigantic. It is a key word for the B2 level."
        }
    ],

    // Level C1 (Advanced)
    C1: [
        {
            question: "Complete the sentence using a perfect modal verb: He didn't answer his phone, he ____ asleep.",
            options: ["must be", "might have been", "could be", "should be"],
            answer: "might have been",
            explanation: "We use **'might have been'** (a perfect modal) to express a possibility or assumption about a past action. It suggests that it is possible he was asleep."
        },
        {
            question: "Which of the following is a synonym for 'ubiquitous'?",
            options: ["scarce", "ever-present", "obscure", "ephemeral"],
            answer: "ever-present",
            explanation: "**'Ubiquitous'** means being or seeming to be everywhere at the same time. The direct synonym is **'ever-present'**."
        }
    ],

    // Level C2 (Proficiency)
    C2: [
        {
            question: "Choose the word to complete the idiom: He was given a ____ of his own medicine.",
            options: ["spoon", "dose", "pinch", "taste"],
            answer: "dose",
            explanation: "The idiomatic expression is **'a dose of his own medicine'**, meaning someone receives the same unpleasant treatment they have given to others."
        },
        {
            question: "Which sentence uses the subjunctive mood correctly?",
            options: ["It is essential that he is here.", "I suggest he studies harder.", "The requirement is that she arrive on time.", "If I was you, I'd leave."],
            answer: "The requirement is that she arrive on time.",
            explanation: "The subjunctive mood is used after certain expressions (e.g., *The requirement is, I suggest*) and requires the base form of the verb: **'she arrive'** (not 'she arrives')."
        }
    ]
};

// 2. Mesajele de Încurajare
const encouragementMessages = [
    { threshold: 100, message: "🔥 **Flawless Victory!** You have a perfect understanding of this level. Time to move up! Great job!" },
    { threshold: 75, message: "🌟 **Excellent Performance!** You show a strong grasp of the material. A little more practice and you'll be unstoppable." },
    { threshold: 50, message: "👍 **Good Effort!** You are halfway there! Review the explanations for the incorrect answers and try again. Practice makes perfect." },
    { threshold: 0, message: "🧠 **Great Start!** Learning is a journey, and every mistake is a lesson. Use the explanations to improve your knowledge. You can do this!" }
];

// 3. Variabile Globale și Referințe DOM
let currentLevel = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false; 

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const quizTitle = document.getElementById('quiz-title');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const endTestBtn = document.getElementById('end-test-btn'); // REFERINȚĂ NOUĂ

const currentQuestionNumberSpan = document.getElementById('current-question-number');
const totalQuestionsSpan = document.getElementById('total-questions');

const feedbackPanel = document.getElementById('feedback-panel');
const feedbackMessage = document.getElementById('feedback-message');
const explanationText = document.getElementById('explanation-text');

const finalLevelSpan = document.getElementById('final-level');
const scoreDisplay = document.getElementById('score-display');
const maxScore = document.getElementById('max-score');
const percentageDisplay = document.getElementById('percentage-display'); 
const encouragementMessageDiv = document.getElementById('encouragement-message'); 
const restartBtn = document.getElementById('restart-btn');
const printBtn = document.getElementById('print-btn'); 

const questionContainer = document.querySelector('.question-container');

// 4. Funcții de Bază
function showScreen(screen) {
    startScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    screen.classList.remove('hidden');
}

function startQuiz(level) {
    currentLevel = level;
    // Păstrăm toate întrebările din baza de date pentru nivelul ales
    currentQuestions = quizData[level] || []; 
    currentQuestionIndex = 0;
    score = 0;
    answered = false;

    quizTitle.textContent = `Level Quiz ${level}`;
    // Total Questions afișează numărul total din baza de date
    totalQuestionsSpan.textContent = currentQuestions.length;
    maxScore.textContent = currentQuestions.length; 

    showScreen(quizScreen);
    displayQuestion();
}

function displayQuestion() {
    nextBtn.setAttribute('disabled', true);
    feedbackPanel.classList.add('hidden');
    optionsContainer.innerHTML = '';
    answered = false;

    // 1. Tranziție: Setează opacitatea la 0 înainte de a schimba conținutul
    questionContainer.style.opacity = 0;
    
    // Verifică dacă am trecut prin toate întrebările disponibile din baza de date
    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    currentQuestionNumberSpan.textContent = currentQuestionIndex + 1;
    questionText.textContent = question.question;

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option;
        button.addEventListener('click', () => handleAnswer(button, option, question));
        optionsContainer.appendChild(button);
    });

    // 2. Tranziție: Setează opacitatea la 1 (fade-in)
    setTimeout(() => {
        questionContainer.style.opacity = 1;
    }, 50); 
}

function handleAnswer(selectedButton, selectedOption, question) {
    if (answered) return;
    answered = true; 

    Array.from(optionsContainer.children).forEach(btn => {
        btn.setAttribute('disabled', true);
    });

    feedbackPanel.classList.remove('hidden');
    explanationText.innerHTML = `<p><strong>Explanation:</strong> ${question.explanation}</p>`;

    if (selectedOption === question.answer) {
        score++;
        selectedButton.classList.add('correct-answer');
        feedbackPanel.className = 'feedback correct';
        feedbackMessage.textContent = 'Correct! Congratulations!';
    } else {
        selectedButton.classList.add('incorrect-answer');
        feedbackPanel.className = 'feedback incorrect';
        feedbackMessage.textContent = 'Incorrect. Here is the correct answer and explanation:';

        Array.from(optionsContainer.children).forEach(btn => {
            if (btn.textContent === question.answer) {
                btn.classList.add('correct-answer');
            }
        });
    }

    nextBtn.removeAttribute('disabled');
}

function showResults() {
    finalLevelSpan.textContent = currentLevel;
    
    // Totalul întrebărilor LUCRATE (nu totalul din baza de date)
    const questionsWorked = currentQuestionIndex; 

    scoreDisplay.textContent = score;
    // maxScore afișează totalul LUCRAT
    maxScore.textContent = questionsWorked; 
    
    // Previne împărțirea la zero dacă se apasă 'End Test' fără nicio întrebare
    const percentage = questionsWorked > 0 ? ((score / questionsWorked) * 100).toFixed(0) : 0;
    percentageDisplay.textContent = `${percentage}%`;

    let message = encouragementMessages.find(msg => percentage >= msg.threshold);
    
    encouragementMessageDiv.innerHTML = message ? message.message : encouragementMessages[encouragementMessages.length - 1].message;
    
    showScreen(resultsScreen);
}

function printReport() {
    window.print();
}

// 5. ASCULTĂTORI DE EVENIMENTE
document.querySelectorAll('.level-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const level = e.target.dataset.level;
        startQuiz(level);
    });
});

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    displayQuestion();
});

// NOU: Logica pentru butonul End Test
endTestBtn.addEventListener('click', showResults);


restartBtn.addEventListener('click', () => {
    showScreen(startScreen);
});

printBtn.addEventListener('click', printReport);


// 6. Starea Inițială
window.onload = () => {
    showScreen(startScreen);
};