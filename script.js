// 1. Baza de Date a Întrebărilor
const quizData = {
    // -----------------------------------------------------------------
    // Nivel B1 (Pre-Intermediate) - 50 Questions (Grammar & Vocabulary)
    // -----------------------------------------------------------------
    B1: [
        // GRAMMAR (Prezent Simplu, Continuu, Trecut, Viitor, Condițional, Modale)
        {
            question: "I ____ to the gym three times a week.",
            options: ["go", "am going", "goes", "went"],
            answer: "go",
            explanation: "We use the **Present Simple** ('go') for habits and routines, indicated by the frequency phrase 'three times a week'."
        },
        {
            question: "She can't talk right now, she ____ a shower.",
            options: ["takes", "is taking", "took", "take"],
            answer: "is taking",
            explanation: "The **Present Continuous** ('is taking') is used for actions happening at the moment of speaking ('right now')."
        },
        {
            question: "They ____ dinner at a restaurant last night.",
            options: ["have", "had", "are having", "was having"],
            answer: "had",
            explanation: "The time expression 'last night' requires the **Past Simple** form of the verb 'to have', which is 'had'."
        },
        {
            question: "If I found a wallet, I ____ it to the police.",
            options: ["will return", "would return", "return", "returned"],
            answer: "would return",
            explanation: "This is a **Second Conditional** sentence (hypothetical). The structure is: If + Past Simple, ... would + Verb Base Form."
        },
        {
            question: "We ____ to Spain next summer.",
            options: ["going", "will go", "go", "are going"],
            answer: "are going",
            explanation: "The **Present Continuous** ('are going') is used for fixed future arrangements or plans, often indicated by a future time marker like 'next summer'."
        },
        {
            question: "You ____ smoke in the office. It's forbidden.",
            options: ["mustn't", "can't", "don't have to", "shouldn't"],
            answer: "mustn't",
            explanation: "**'Mustn't'** is the correct modal verb to express a strong prohibition or rule ('It's forbidden')."
        },
        {
            question: "This book was written ____ a famous author.",
            options: ["with", "by", "from", "of"],
            answer: "by",
            explanation: "In the **Passive Voice**, the agent (the person doing the action) is introduced by the preposition **'by'**."
        },
        {
            question: "How long ____ you been learning English?",
            options: ["do", "did", "have", "are"],
            answer: "have",
            explanation: "The phrase 'How long' indicates the need for the **Present Perfect Continuous** (or Simple), which uses the auxiliary verb **'have'**."
        },
        {
            question: "He arrived late ____ the heavy traffic.",
            options: ["despite", "because", "because of", "although"],
            answer: "because of",
            explanation: "**'Because of'** is followed by a noun phrase ('the heavy traffic'), whereas 'because' and 'although' are followed by a clause (subject + verb)."
        },
        {
            question: "I think the weather ____ nice tomorrow.",
            options: ["is", "is going to be", "will be", "be"],
            answer: "will be",
            explanation: "**'Will'** is used for simple predictions, especially when based on opinion or assumption ('I think')."
        },
        {
            question: "There are ____ people waiting outside the bank.",
            options: ["much", "a lot", "too many", "too much"],
            answer: "too many",
            explanation: "**'Too many'** is used with countable nouns like 'people'. 'Too much' is for uncountable nouns."
        },
        {
            question: "The movie was ____ interesting than the book.",
            options: ["less", "least", "fewer", "little"],
            answer: "less",
            explanation: "**'Less'** is the comparative form of 'little' and is used with adjectives and uncountable nouns ('interesting' is an adjective here)."
        },
        {
            question: "He told me ____ quiet.",
            options: ["to be", "be", "being", "is"],
            answer: "to be",
            explanation: "The structure for reported commands/requests is usually verb + object + **infinitive with 'to'**."
        },
        {
            question: "She's used to ____ early every day.",
            options: ["get up", "getting up", "got up", "get used to"],
            answer: "getting up",
            explanation: "The phrase **'be used to'** (meaning accustomed to) is followed by the **gerund** (verb + -ing)."
        },
        {
            question: "I wish I ____ taller.",
            options: ["am", "was", "were", "would be"],
            answer: "were",
            explanation: "**'I wish'** about a present situation uses the **Past Simple** or **'were'** for the verb 'to be' (even for I, He, She, It)."
        },
        {
            question: "I haven't finished my homework ____.",
            options: ["just", "already", "yet", "ever"],
            answer: "yet",
            explanation: "**'Yet'** is used with negative statements and questions in the Present Perfect, usually placed at the end of the sentence."
        },
        {
            question: "I'd like a coffee, and my friend would like one ____.",
            options: ["too", "either", "neither", "as well"],
            answer: "as well",
            explanation: "Both 'too' and **'as well'** mean 'also' and are used in affirmative sentences, usually at the end. 'As well' is often considered slightly more formal than 'too'."
        },
        {
            question: "They promised ____ the repairs by Monday.",
            options: ["finish", "finishing", "to finish", "finished"],
            answer: "to finish",
            explanation: "The verb **'promise'** is usually followed by the **infinitive with 'to'**."
        },
        {
            question: "The teacher made the students ____ their books.",
            options: ["open", "to open", "opening", "opened"],
            answer: "open",
            explanation: "The causative verb **'make'** is followed by the **bare infinitive** (infinitive without 'to')."
        },
        {
            question: "We saw a girl ____ through the park.",
            options: ["walked", "walk", "to walk", "walking"],
            answer: "walking",
            explanation: "The pattern 'see/watch/hear + object + **-ing form**' means we observed the action in progress."
        },
        {
            question: "I'm interested ____ learning more about history.",
            options: ["in", "at", "on", "for"],
            answer: "in",
            explanation: "The correct preposition that follows the adjective 'interested' is **'in'**."
        },
        {
            question: "It was the ____ interesting film I've ever seen.",
            options: ["most", "more", "much", "many"],
            answer: "most",
            explanation: "The phrase 'I've ever seen' indicates the need for the **Superlative** form, which uses **'most'** for long adjectives ('most interesting')."
        },
        {
            question: "The man ____ car was stolen called the police.",
            options: ["who", "which", "whose", "whom"],
            answer: "whose",
            explanation: "**'Whose'** is the correct relative pronoun used to show possession."
        },
        {
            question: "He can't afford ____ on holiday this year.",
            options: ["go", "to go", "going", "goes"],
            answer: "to go",
            explanation: "The verb **'afford'** is followed by the **infinitive with 'to'**."
        },
        {
            question: "I ____ never been to Italy.",
            options: ["am", "do", "have", "will"],
            answer: "have",
            explanation: "The adverb 'never' in this context (life experience) requires the **Present Perfect** tense, using the auxiliary verb **'have'**."
        },
        // VOCABULARY & PHRASAL VERBS
        {
            question: "I need to look ____ my old notes before the exam.",
            options: ["up", "at", "for", "over"],
            answer: "over",
            explanation: "The phrasal verb **'look over'** means to quickly examine or check something, often before an important event like an exam."
        },
        {
            question: "She was really ____ when she failed the driving test.",
            options: ["delighted", "disappointed", "amazed", "cheerful"],
            answer: "disappointed",
            explanation: "**'Disappointed'** means feeling unhappy because something you hoped for did not happen ('failing the test')."
        },
        {
            question: "The opposite of 'polite' is ____.",
            options: ["impolite", "non-polite", "unpolite", "dispolite"],
            answer: "impolite",
            explanation: "The correct negative prefix to form the opposite of 'polite' is **'im-'**."
        },
        {
            question: "My colleague asked me to help him ____ a business trip.",
            options: ["arrange", "put", "make", "take"],
            answer: "arrange",
            explanation: "The correct verb is **'arrange'** a trip/meeting/appointment, meaning to organize it."
        },
        {
            question: "Don't forget to switch ____ the lights when you leave the room.",
            options: ["on", "out", "off", "up"],
            answer: "off",
            explanation: "The phrasal verb **'switch off'** means to turn off a device or a light."
        },
        {
            question: "It's important to have a good ____ of your time when studying.",
            options: ["control", "management", "way", "habit"],
            answer: "management",
            explanation: "The common collocation is **'time management'**, referring to the ability to use one's time effectively."
        },
        {
            question: "We live in a quiet residential ____ near the city centre.",
            options: ["area", "land", "zone", "field"],
            answer: "area",
            explanation: "**'Area'** is the most general and appropriate word for a part of a town or city, especially when talking about a 'residential' one."
        },
        {
            question: "I need to buy a new ____ of trainers for running.",
            options: ["set", "pair", "piece", "couple"],
            answer: "pair",
            explanation: "The collective noun for things that come in two matched parts (shoes, socks, glasses) is **'pair'**."
        },
        {
            question: "Can you ____ me a favour and pick up my dry cleaning?",
            options: ["do", "make", "give", "help"],
            answer: "do",
            explanation: "The correct collocation is **'do me a favour'** (a face un serviciu)."
        },
        {
            question: "The company decided to ____ some new staff.",
            options: ["hire", "employ", "fire", "resign"],
            answer: "hire",
            explanation: "**'Hire'** (sau 'employ') means to give someone a job. 'Fire' is the opposite, and 'resign' means to quit."
        },
        {
            question: "The food was so ____, I couldn't eat it.",
            options: ["delicious", "tasty", "horrible", "sweet"],
            answer: "horrible",
            explanation: "**'Horrible'** (sau 'awful') means extremely unpleasant, which fits the context 'I couldn't eat it'."
        },
        {
            question: "I'm really looking forward ____ my holiday next month.",
            options: ["to", "at", "for", "on"],
            answer: "to",
            explanation: "The correct preposition for the idiom 'look forward to' (a aștepta cu nerăbdare) is **'to'**."
        },
        {
            question: "Could you speak a little louder? I can't ____ you.",
            options: ["hear", "listen", "sound", "feel"],
            answer: "hear",
            explanation: "**'Hear'** is the verb that means to perceive sound (physical ability), which fits the context 'I can't [perceive the sound of] you'."
        },
        {
            question: "The main ____ of the book is set in London.",
            options: ["place", "scene", "setting", "plot"],
            answer: "setting",
            explanation: "**'Setting'** refers to the time, place, and circumstances in which a story takes place."
        },
        {
            question: "I'm going to take a ____ in the lake this afternoon.",
            options: ["swim", "bathe", "shower", "dip"],
            answer: "swim",
            explanation: "The common collocation for physical activity in water is **'take a swim'**."
        },
        {
            question: "They had a huge ____ about politics.",
            options: ["discussion", "chat", "argument", "talk"],
            answer: "argument",
            explanation: "**'Argument'** suggests a disagreement or dispute, which is usually 'huge' or 'heated', unlike a simple 'discussion' or 'chat'."
        },
        {
            question: "It was raining heavily, ____ we decided to stay indoors.",
            options: ["but", "so", "because", "although"],
            answer: "so",
            explanation: "**'So'** is used to introduce the result or consequence of a previous action or state ('It was raining heavily... as a result, we stayed indoors')."
        },
        {
            question: "What's the best way to ____ up new vocabulary?",
            options: ["pick", "learn", "find", "collect"],
            answer: "pick",
            explanation: "**'Pick up'** is a common phrasal verb meaning to learn something naturally or casually."
        },
        {
            question: "I've been feeling quite ____ lately, maybe I should see a doctor.",
            options: ["healthy", "well", "unwell", "sickly"],
            answer: "unwell",
            explanation: "**'Unwell'** is a polite adjective meaning slightly ill, which fits the suggestion of seeing a doctor."
        },
        {
            question: "You should ____ care of your grandfather.",
            options: ["take", "make", "give", "do"],
            answer: "take",
            explanation: "The correct collocation is **'take care of'** (a avea grijă de)."
        },
        {
            question: "The flight was delayed ____ fog.",
            options: ["due to", "because", "despite", "so"],
            answer: "due to",
            explanation: "**'Due to'** is followed by a noun ('fog') and means 'because of'."
        },
        {
            question: "Could you possibly ____ me some money until tomorrow?",
            options: ["borrow", "lend", "rent", "owe"],
            answer: "lend",
            explanation: "**'Lend'** means to give something to someone temporarily. 'Borrow' means to take something from someone temporarily."
        },
        {
            question: "I need a large ____ of milk for this recipe.",
            options: ["portion", "amount", "number", "piece"],
            answer: "amount",
            explanation: "**'Amount'** is used with uncountable nouns like 'milk'. 'Number' is for countable nouns."
        },
        {
            question: "The main ____ of the movie is about overcoming challenges.",
            options: ["topic", "theme", "subject", "story"],
            answer: "theme",
            explanation: "The **'theme'** is the underlying subject, idea, or message of a piece of work."
        },
        {
            question: "If you don't ____ up your room, you can't go out.",
            options: ["clear", "tidy", "put", "arrange"],
            answer: "tidy",
            explanation: "The phrasal verb **'tidy up'** means to make a place neat by arranging things."
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