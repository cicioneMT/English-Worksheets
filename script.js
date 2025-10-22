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

    // -----------------------------------------------------------------
// Nivel B2 (Upper-Intermediate) - 50 Questions (Advanced Grammar & Vocabulary)
// -----------------------------------------------------------------
B2: [
    // GRAMMAR (Conditionals, Modals, Passive, Reported Speech)
    {
        question: "If she hadn't been late, she ____ the beginning of the movie.",
        options: ["wouldn't miss", "wouldn't have missed", "didn't miss", "hadn't missed"],
        answer: "wouldn't have missed",
        explanation: "This is a **Third Conditional** sentence, used for hypothetical situations in the past. The structure is: If + Past Perfect, ... would have + Past Participle."
    },
    {
        question: "He regretted ____ the job offer.",
        options: ["not accepting", "not to accept", "not accept", "didn't accept"],
        answer: "not accepting",
        explanation: "The verb **'regret'** (when followed by an action) is usually followed by the **gerund** (verb + -ing) to express regret about a past action."
    },
    {
        question: "The new bridge is ____ to be finished by the end of the year.",
        options: ["said", "told", "spoken", "believed"],
        answer: "said",
        explanation: "This is an example of the impersonal passive structure: **'It is said/thought/believed that...'** or **'Subject is said/told/believed to...'**."
    },
    {
        question: "Hardly ever ____ so much pressure at work.",
        options: ["I have felt", "have I felt", "I felt", "I did feel"],
        answer: "have I felt",
        explanation: "Negative adverbs like 'Hardly ever' cause **inversion** of the subject and auxiliary verb when placed at the beginning of a sentence (Inversion)."
    },
    {
        question: "I wish I ____ speak Italian fluently.",
        options: ["can", "could", "would", "might"],
        answer: "could",
        explanation: "**'I wish'** about a present ability uses the modal **'could'**."
    },
    {
        question: "They suggested ____ to the new art gallery.",
        options: ["going", "to go", "go", "went"],
        answer: "going",
        explanation: "The verb **'suggest'** is always followed by the **gerund** (verb + -ing)."
    },
    {
        question: "I had my car ____ last week.",
        options: ["repair", "repaired", "to repair", "repairing"],
        answer: "repaired",
        explanation: "The causative structure **'have something done'** uses the **Past Participle** ('repaired') and means you arranged for someone else to do the action."
    },
    {
        question: "He denies ____ the confidential files.",
        options: ["having taken", "take", "to take", "to be taking"],
        answer: "having taken",
        explanation: "The verb **'deny'** is followed by the gerund. **'Having taken'** (perfect gerund) emphasizes that the action happened in the past."
    },
    {
        question: "It's high time you ____ how to manage your finances.",
        options: ["learn", "learned", "to learn", "are learning"],
        answer: "learned",
        explanation: "The structure **'It's time/high time'** is followed by the **Past Simple** to express that something should be done now."
    },
    {
        question: "She can't ____ come to the party, as she's very busy.",
        options: ["hardly", "likely", "probably", "possibly"],
        answer: "possibly",
        explanation: "The correct adverb to be used with the negative modal 'can't' to mean 'it's not possible' is **'possibly'** (meaning absolutely not)."
    },
    {
        question: "Not until the police arrived ____ the situation become clear.",
        options: ["the situation did", "did the situation", "had the situation", "the situation had"],
        answer: "did the situation",
        explanation: "The phrase 'Not until...' causes **inversion** in the main clause. Since the main clause describes an action (become clear), we use the auxiliary **'did'**."
    },
    {
        question: "The manager insisted that the report ____ submitted immediately.",
        options: ["was", "be", "is", "should be"],
        answer: "be",
        explanation: "Verbs like 'insist', 'demand', 'suggest' often require the **subjunctive mood** in the following *that*-clause, using the base form of the verb (B2/C1 Grammar)."
    },
    {
        question: "____ he ran fast, he couldn't catch the bus.",
        options: ["Despite", "Even though", "However", "In spite of"],
        answer: "Even though",
        explanation: "**'Even though'** is the only conjunction here followed by a complete clause (subject + verb: 'he ran fast')."
    },
    {
        question: "The more you practice, ____ you get.",
        options: ["the better", "better", "the best", "good"],
        answer: "the better",
        explanation: "The **Double Comparative** structure is: **The more/less + clause, the more/less + clause** (The more you practice, the better you get)."
    },
    {
        question: "I remember ____ the key on the table.",
        options: ["to leave", "leaving", "left", "have left"],
        answer: "leaving",
        explanation: "The verb 'remember' followed by the **gerund** ('leaving') means you recall a past action."
    },
    // VOCABULARY (Collocations, Phrasal Verbs, Advanced Adjectives)
    {
        question: "We need to ____ a decision before the end of the day.",
        options: ["do", "make", "take", "give"],
        answer: "make",
        explanation: "The correct collocation is **'make a decision'** (a lua o decizie)."
    },
    {
        question: "Which phrasal verb means 'to invent or create'?",
        options: ["make up", "put off", "take after", "call off"],
        answer: "make up",
        explanation: "The phrasal verb **'make up'** means to invent a story, an excuse, or, in some contexts, to create something."
    },
    {
        question: "The project was delayed due to an ____ number of problems.",
        options: ["inordinate", "enormous", "unbelievable", "massive"],
        answer: "inordinate",
        explanation: "**'Inordinate'** means unusually large or excessive; it collocates strongly with abstract nouns like 'number' or 'amount' (B2/C1 word)."
    },
    {
        question: "The company had to ____ out of its contract due to financial losses.",
        options: ["pull", "get", "back", "call"],
        answer: "back",
        explanation: "The idiom **'back out of'** means to withdraw from an agreement or commitment."
    },
    {
        question: "He shows great ____ for classical music.",
        options: ["passion", "interest", "like", "fondness"],
        answer: "passion",
        explanation: "The noun **'passion'** (pasiune puternică) is a suitable B2 word, stronger than 'interest' or 'like'."
    },
    {
        question: "The police are determined to ____ down on organized crime.",
        options: ["cut", "take", "crack", "put"],
        answer: "crack",
        explanation: "The phrasal verb **'crack down on'** means to take severe measures to restrict or stop undesirable behavior."
    },
    {
        question: "She's an extremely ____ journalist who writes about social issues.",
        options: ["ethical", "principle", "moral", "righteous"],
        answer: "ethical",
        explanation: "**'Ethical'** (adjectiv) means relating to moral principles or the branch of knowledge dealing with these."
    },
    {
        question: "I'm going to take a week off to ____ my batteries.",
        options: ["change", "fill", "recharge", "load"],
        answer: "recharge",
        explanation: "The idiom **'recharge my batteries'** means to rest or relax in order to get back your energy."
    },
    {
        question: "It was a very ____ decision that led to their success.",
        options: ["sound", "strong", "heavy", "powerful"],
        answer: "sound",
        explanation: "The adjective **'sound'** here means reliable, sensible, or based on good judgment, and collocates with 'decision' or 'advice'."
    },
    {
        question: "The two sides failed to ____ an agreement.",
        options: ["reach", "arrive", "get", "come"],
        answer: "reach",
        explanation: "The common collocation is **'reach an agreement'** (a ajunge la un acord)."
    },
    {
        question: "He finds it difficult to ____ the difference between theory and practice.",
        options: ["make", "tell", "say", "talk"],
        answer: "tell",
        explanation: "The phrase **'tell the difference'** means to distinguish between two things."
    },
    {
        question: "The company aims to ____ its carbon footprint.",
        options: ["decrease", "reduce", "lessen", "cut down"],
        answer: "reduce",
        explanation: "**'Reduce'** is the most professional and standard verb that collocates with 'carbon footprint' (B2 context)."
    },
    {
        question: "We need to come ____ with a solution quickly.",
        options: ["up", "across", "into", "around"],
        answer: "up",
        explanation: "The phrasal verb **'come up with'** means to think of or produce (an idea or solution)."
    },
    {
        question: "The politician was heavily ____ by the press.",
        options: ["criticized", "judged", "analyzed", "discussed"],
        answer: "criticized",
        explanation: "**'Criticized'** means to express disapproval of someone or something, which is a key B2 word often associated with 'press' or 'media'."
    },
    {
        question: "She's always getting ____ with her colleagues.",
        options: ["on well", "up to", "out of", "away with"],
        answer: "on well",
        explanation: "The phrasal verb **'get on well (with someone)'** means to have a good relationship with someone."
    },
    {
        question: "The sheer ____ of the building was impressive.",
        options: ["height", "big", "size", "magnitude"],
        answer: "magnitude",
        explanation: "**'Magnitude'** (mărime, amploare) is a suitable B2 word, often used for scale or importance."
    },
    {
        question: "He tried to ____ his failure on bad luck.",
        options: ["blame", "accuse", "fault", "charge"],
        answer: "blame",
        explanation: "The correct collocation is **'blame something on something'** (a da vina pe ceva pentru altceva)."
    },
    {
        question: "The city has a great ____ of places to visit.",
        options: ["variety", "range", "diversion", "collection"],
        answer: "variety",
        explanation: "**'Variety'** (diversitate) is the most common noun to describe a large number of different things."
    },
    {
        question: "The doctor advised him to ____ up smoking.",
        options: ["give", "take", "put", "make"],
        answer: "give",
        explanation: "The phrasal verb **'give up'** means to stop doing something (especially a habit)."
    },
    {
        question: "It’s a misconception that all politicians are ____.",
        options: ["corrupt", "honourable", "moral", "just"],
        answer: "corrupt",
        explanation: "**'Corrupt'** is a strong adjective meaning dishonest or illegal, especially in return for money, suitable for B2 vocabulary."
    },
    {
        question: "The main purpose of the meeting was to ____ ideas.",
        options: ["brainstorm", "think", "create", "invent"],
        answer: "brainstorm",
        explanation: "**'Brainstorm'** (a face un brainstorming) is a common B2 verb meaning to discuss ideas to solve a problem."
    },
    {
        question: "I can't ____ out why he suddenly left the company.",
        options: ["figure", "work", "find", "sort"],
        answer: "figure",
        explanation: "The phrasal verb **'figure out'** means to understand or solve something."
    },
    {
        question: "It is generally ____ that hard work leads to success.",
        options: ["accepted", "assumed", "believed", "thought"],
        answer: "believed",
        explanation: "**'Believed'** is the best fit for this general statement of common knowledge or opinion ('It is generally believed...')."
    },
    {
        question: "The company faced severe ____ setbacks last quarter.",
        options: ["economic", "economical", "economy", "money"],
        answer: "economic",
        explanation: "**'Economic'** relates to the economy or financial affairs. 'Economical' means saving money (B2 commonly confused words)."
    },
    {
        question: "He's hoping to ____ a career in finance.",
        options: ["pursue", "chase", "follow", "hunt"],
        answer: "pursue",
        explanation: "**'Pursue'** (a urma o carieră/obiectiv) is the appropriate B2 verb."
    },
    {
        question: "We need to ____ into account the costs.",
        options: ["take", "put", "make", "give"],
        answer: "take",
        explanation: "The correct idiom is **'take into account'** (a lua în considerare)."
    },
    {
        question: "The government has implemented harsh measures to ____ inflation.",
        options: ["combat", "fight", "struggle", "beat"],
        answer: "combat",
        explanation: "**'Combat'** is the professional verb often used with abstract nouns like 'inflation', 'crime', or 'poverty' (B2 formal vocabulary)."
    },
    {
        question: "I was completely ____ by her sudden departure.",
        options: ["taken aback", "put off", "called up", "looked up"],
        answer: "taken aback",
        explanation: "The phrasal verb **'take aback'** means to surprise or shock (usually in the passive voice: 'I was taken aback')."
    },
    {
        question: "It is important to maintain a healthy work-life ____.",
        options: ["scale", "balance", "equality", "proportion"],
        answer: "balance",
        explanation: "The common collocation is **'work-life balance'**."
    },
    {
        question: "The proposal was met with fierce ____ from the opposition.",
        options: ["resistance", "disagreement", "argument", "objection"],
        answer: "resistance",
        explanation: "**'Fierce resistance'** is a strong collocation, implying determined opposition (B2/C1 word)."
    },
    {
        question: "The committee has decided to ____ the meeting until next week.",
        options: ["put off", "call off", "take off", "look up"],
        answer: "put off",
        explanation: "The phrasal verb **'put off'** means to postpone (a amâna)."
    },
    {
        question: "She's quite ____; she rarely shows her emotions.",
        options: ["reserved", "quiet", "shy", "secretive"],
        answer: "reserved",
        explanation: "**'Reserved'** is a B2 adjective meaning slow to reveal emotion or opinions."
    },
    {
        question: "I really look ____ to my younger brother.",
        options: ["up to", "down on", "into", "over"],
        answer: "up to",
        explanation: "The phrasal verb **'look up to'** means to admire or respect someone (a admira)."
    },
    {
        question: "The company managed to ____ a profit despite the recession.",
        options: ["earn", "make", "take", "get"],
        answer: "make",
        explanation: "The correct collocation is **'make a profit'**."
    }
],

    // -----------------------------------------------------------------
// Nivel C1 (Advanced) - 50 Questions (Complex Grammar, Inversion, Advanced Collocations)
// -----------------------------------------------------------------
C1: [
    // GRAMMAR (Inversion, Conditionals, Participle Clauses, Subjunctive)
    {
        question: "Little ____ that the concert would be cancelled at the last minute.",
        options: ["did they know", "they did know", "knew they", "they knew"],
        answer: "did they know",
        explanation: "The negative adverb 'Little' at the start of a sentence causes **inversion**, requiring the auxiliary verb (did) before the subject (they) and the main verb (know)."
    },
    {
        question: "Had I known about the risk, I ____ in the venture.",
        options: ["wouldn't invest", "wouldn't have invested", "didn't invest", "hadn't invested"],
        answer: "wouldn't have invested",
        explanation: "This is an inverted **Third Conditional** sentence. 'Had I known' replaces 'If I had known', and requires 'wouldn't have invested' in the main clause."
    },
    {
        question: "The director required that all staff ____ present at the briefing.",
        options: ["are", "is", "be", "were"],
        answer: "be",
        explanation: "Verbs of requirement/suggestion (like 'required') often trigger the **subjunctive mood** in the dependent clause, which uses the base form of the verb ('be')."
    },
    {
        question: "I remember him ____ about the incident.",
        options: ["to complain", "complaining", "complain", "complained"],
        answer: "complaining",
        explanation: "The verb 'remember' followed by the **gerund** ('complaining') means the speaker recalls the action or event happening in the past."
    },
    {
        question: "The team, ____ confidence was high, won the final game.",
        options: ["which", "who", "whose", "whom"],
        answer: "whose",
        explanation: "**'Whose'** is the correct relative pronoun to show possession (The team's confidence)."
    },
    {
        question: "____ all night, she was too exhausted to continue.",
        options: ["Studied", "Having studied", "She studied", "To study"],
        answer: "Having studied",
        explanation: "This is a **Participle Clause** (Perfect Participle) which provides the reason for the main clause, emphasizing that the action was completed before the main action."
    },
    {
        question: "Only when the meeting ended ____ the news be announced.",
        options: ["was", "would", "did", "could"],
        answer: "would",
        explanation: "The inversive structure 'Only when...' requires the auxiliary verb before the subject. **'Would'** (or could/did) is necessary here, with 'would' suggesting a consequence."
    },
    {
        question: "The suspect is thought ____ the country by now.",
        options: ["to leave", "to be leaving", "to have left", "having left"],
        answer: "to have left",
        explanation: "The passive structure **'is thought to have left'** uses the perfect infinitive to refer to an action that happened before the time of thinking."
    },
    {
        question: "The budget was cut, ____ a decrease in staff.",
        options: ["resulted in", "resulting in", "result in", "to result in"],
        answer: "resulting in",
        explanation: "This uses a **Participle Clause** ('resulting in') to describe the result or consequence of the preceding action."
    },
    {
        question: "She can't help ____ whenever she hears that song.",
        options: ["to laugh", "laugh", "laughing", "to laughing"],
        answer: "laughing",
        explanation: "The structure **'can't help'** (a nu se putea abține să) is immediately followed by the **gerund** (verb + -ing)."
    },
    {
        question: "No sooner had he sat down ____ the phone rang.",
        options: ["than", "when", "then", "that"],
        answer: "than",
        explanation: "The fixed structure for **'No sooner...'** (inversion) is always followed by **'than'**."
    },
    {
        question: "If the company ____, it would have been a disaster for us all.",
        options: ["fail", "was failing", "had failed", "has failed"],
        answer: "had failed",
        explanation: "This is a standard **Third Conditional** structure, where the condition is in the Past Perfect."
    },
    {
        question: "It is essential that everyone ____ their own research.",
        options: ["does", "do", "will do", "is doing"],
        answer: "do",
        explanation: "Similar to question 3, 'essential' requires the **subjunctive mood** in the dependent clause, using the base verb 'do'."
    },
    {
        question: "This machine is notoriously difficult ____.",
        options: ["to operate", "operating", "to be operated", "being operated"],
        answer: "to operate",
        explanation: "The correct structure is **adjective + infinitive with 'to'** to explain the difficulty of the action."
    },
    {
        question: "They may ____ the project by the time we arrive.",
        options: ["finish", "have finished", "be finishing", "to finish"],
        answer: "have finished",
        explanation: "The modal **'may'** combined with the **perfect infinitive** ('have finished') is used to speculate about an action completed in the future (Future Perfect)."
    },
    // VOCABULARY & COLLOCATIONS (Formal/Academic)
    {
        question: "The economic forecast was deemed too ____ to be relied upon.",
        options: ["optimistic", "pessimistic", "bleak", "dubious"],
        answer: "dubious",
        explanation: "**'Dubious'** (C1 word) means hesitating or doubting, or not to be relied upon, fitting the context 'to be relied upon'."
    },
    {
        question: "The court found him ____ guilty of the charges.",
        options: ["overwhelmingly", "absolutely", "resoundingly", "ultimately"],
        answer: "resoundingly",
        explanation: "**'Resoundingly'** (C1 collocation) is used with verbs like 'win', 'defeat', or 'find guilty' to mean emphatically or unequivocally."
    },
    {
        question: "The committee reached a ____ on the new policy.",
        options: ["conclusion", "consensus", "agreement", "stipulation"],
        answer: "consensus",
        explanation: "**'Consensus'** (C1 noun) means general agreement, especially among a group of people, often used in formal contexts like committees."
    },
    {
        question: "He tried to ____ the gravity of the situation.",
        options: ["ameliorate", "alleviate", "mitigate", "assuage"],
        answer: "mitigate",
        explanation: "**'Mitigate'** (C1 verb) means to make something less severe, serious, or painful. The others are close but 'mitigate the gravity' is a strong collocation."
    },
    {
        question: "The article provides an ____ assessment of the current climate.",
        options: ["insightful", "deep", "clear", "obvious"],
        answer: "insightful",
        explanation: "**'Insightful'** (C1 adjective) means having or showing an accurate and deep understanding; it collocates strongly with 'assessment'."
    },
    {
        question: "Lack of funding proved to be the ____ reason for the project's failure.",
        options: ["primary", "main", "integral", "fundamental"],
        answer: "primary",
        explanation: "**'Primary'** (principal, de bază) is a common C1 adjective used in academic contexts."
    },
    {
        question: "The company will face heavy penalties for its lack of environmental ____.",
        options: ["awareness", "consciousness", "stewardship", "commitment"],
        answer: "stewardship",
        explanation: "**'Stewardship'** (C1 word) refers to the responsible overseeing and protection of something, especially the environment (often used in formal/policy contexts)."
    },
    {
        question: "The evidence presented was deemed purely ____.",
        options: ["circumstantial", "definite", "decisive", "conclusive"],
        answer: "circumstantial",
        explanation: "**'Circumstantial'** (circumstanțial) is a C1 adjective used in legal contexts, meaning pointing indirectly toward someone's guilt but not conclusively."
    },
    {
        question: "The new laws will have far-____ consequences.",
        options: ["reaching", "going", "stretching", "extending"],
        answer: "reaching",
        explanation: "**'Far-reaching'** is a fixed C1 compound adjective meaning having a wide influence or effect."
    },
    {
        question: "The proposal lacks ____ and needs further development.",
        options: ["coherence", "clarity", "focus", "logic"],
        answer: "coherence",
        explanation: "**'Coherence'** (C1 noun) means the quality of being logical and consistent, making sense as a whole (often used for writing/arguments)."
    },
    {
        question: "He was criticized for his ____ handling of the crisis.",
        options: ["abrupt", "insufficient", "inept", "unsuitable"],
        answer: "inept",
        explanation: "**'Inept'** (C1 adjective) means having or showing no skill; incompetent (collocates with 'handling' or 'management')."
    },
    {
        question: "The investigation uncovered a serious ____ of ethics.",
        options: ["breach", "break", "split", "rupture"],
        answer: "breach",
        explanation: "**'Breach'** (C1 noun) means an act of breaking a law or agreement. **'Breach of ethics'** is a standard collocation."
    },
    {
        question: "She managed to ____ a sense of calm despite the chaos.",
        options: ["exude", "emit", "ooze", "radiate"],
        answer: "exude",
        explanation: "**'Exude'** (C1 verb) means to display (an emotion or quality) strongly and openly (often collocates with 'confidence' or 'calm')."
    },
    {
        question: "The issue ____ a fundamental dilemma for the government.",
        options: ["poses", "lays", "sets", "puts"],
        answer: "poses",
        explanation: "The verb **'pose'** (a pune o problemă/dilemă) is a formal C1 verb that collocates with 'question', 'threat', or 'dilemma'."
    },
    {
        question: "The charity is engaged in the ____ of poverty.",
        options: ["eradication", "removal", "abolition", "destruction"],
        answer: "eradication",
        explanation: "**'Eradication'** (C1 noun) means the complete destruction of something, often used in official contexts like 'eradication of disease/poverty'."
    },
    {
        question: "There has been an ____ rise in energy prices.",
        options: ["unprecedented", "rare", "unusual", "incredible"],
        answer: "unprecedented",
        explanation: "**'Unprecedented'** (C1 adjective) means never having happened or existed before, a strong collocation with 'rise' or 'level'."
    },
    {
        question: "The company must be ____ to changing market demands.",
        options: ["responsive", "adjustable", "liable", "amenable"],
        answer: "responsive",
        explanation: "**'Responsive'** (receptiv, care reacționează rapid) is the best fit, often collocating with 'to market demands'."
    },
    {
        question: "The two theories are mutually ____.",
        options: ["exclusive", "excluding", "excepting", "separating"],
        answer: "exclusive",
        explanation: "**'Mutually exclusive'** (C1 collocation) means two events or propositions that cannot both be true."
    },
    {
        question: "The proposal was approved without ____.",
        options: ["objection", "dispute", "opposition", "hinderance"],
        answer: "objection",
        explanation: "**'Without objection'** (fără obiecții) is the most common collocation in formal/meeting contexts."
    },
    {
        question: "We need to ____ the findings of the report.",
        options: ["disseminate", "spread", "circulate", "distribute"],
        answer: "disseminate",
        explanation: "**'Disseminate'** (C1 verb) means to spread or disperse (information) widely, often used in formal contexts."
    },
    {
        question: "The government issued a ____ warning about the storm.",
        options: ["severe", "strong", "intense", "fierce"],
        answer: "severe",
        explanation: "**'Severe'** (sever, grav) collocates strongly with 'warning' or 'storm'."
    },
    {
        question: "The debate served only to ____ the divisions between the groups.",
        options: ["exacerbate", "worsen", "aggravate", "magnify"],
        answer: "exacerbate",
        explanation: "**'Exacerbate'** (C1 verb) means to make a problem, bad situation, or negative feeling worse (often used in academic texts)."
    },
    {
        question: "His resignation was deemed an act of sheer ____.",
        options: ["defiance", "rebellion", "resistance", "insubordination"],
        answer: "defiance",
        explanation: "**'Defiance'** (sfidare) is a strong C1 noun, often used with 'sheer' or 'open'."
    },
    {
        question: "The experiment results were ____, confirming the initial hypothesis.",
        options: ["conclusive", "closing", "ending", "final"],
        answer: "conclusive",
        explanation: "**'Conclusive'** (concludent) is a formal C1 adjective that collocates strongly with 'evidence' or 'results'."
    },
    {
        question: "They have a clear ____ to follow the rules.",
        options: ["obligation", "duty", "need", "requirement"],
        answer: "obligation",
        explanation: "**'Obligation'** (obligație legală/morală) is a formal C1 noun suggesting a binding commitment."
    },
    {
        question: "The speaker struggled to ____ his main point.",
        options: ["convey", "send", "transfer", "transport"],
        answer: "convey",
        explanation: "**'Convey'** (a transmite o idee/un mesaj) is the appropriate C1 verb for communicating meaning effectively."
    },
    {
        question: "The company's strategy is based on a ____ analysis of the market.",
        options: ["thorough", "deep", "absolute", "complete"],
        answer: "thorough",
        explanation: "**'Thorough'** (detaliat, amănunțit) collocates strongly with 'analysis' or 'investigation'."
    },
    {
        question: "It is an ____ fact that climate change is real.",
        options: ["indisputable", "undeniable", "certain", "known"],
        answer: "indisputable",
        explanation: "**'Indisputable'** (de necontestat) is a C1 adjective that collocates with 'fact' or 'truth'."
    },
    {
        question: "The CEO was removed from his ____.",
        options: ["post", "job", "position", "office"],
        answer: "post",
        explanation: "**'Post'** (funcție, poziție) is a formal C1 noun, often used in contexts of job removal or appointment."
    },
    {
        question: "The document requires your ____ on the dotted line.",
        options: ["signature", "sign", "signing", "autograph"],
        answer: "signature",
        explanation: "**'Signature'** (semnătură) is the noun form required here, especially with the collocation 'on the dotted line'."
    },
    {
        question: "She had a ____ of hope that the situation would improve.",
        options: ["glimmer", "spark", "flash", "light"],
        answer: "glimmer",
        explanation: "The noun **'glimmer'** (o scânteie, o rază mică) is a strong C1 collocation with 'hope' or 'possibility'."
    },
    {
        question: "The team was ____ by the sudden change in management.",
        options: ["baffled", "confused", "puzzled", "bewildered"],
        answer: "baffled",
        explanation: "**'Baffled'** (C1 verb) means totally confused or puzzled; it's a stronger verb than 'confused'."
    },
    {
        question: "The company is facing severe ____ repercussions.",
        options: ["financial", "monetary", "cash", "funding"],
        answer: "financial",
        explanation: "**'Financial repercussions'** is the standard C1 collocation (consecințe financiare)."
    },
    {
        question: "The new policy will be ____ across all departments.",
        options: ["implemented", "done", "applied", "executed"],
        answer: "implemented",
        explanation: "**'Implement'** (a implementa, a pune în aplicare) is a formal C1 verb used for policies or plans."
    },
    {
        question: "They decided to ____ the offer immediately.",
        options: ["take up", "take on", "take off", "take over"],
        answer: "take up",
        explanation: "The phrasal verb **'take up'** (a accepta o ofertă/provocare) is the correct choice here."
    }
],

   // -----------------------------------------------------------------
// Nivel C2 (Proficiency) - 50 Questions (Advanced Vocabulary, Idioms, Subtlety, Collocations)
// -----------------------------------------------------------------
C2: [
    // GRAMMAR & INVERSION (Advanced Structures)
    {
        question: "Seldom ____ such a masterful performance.",
        options: ["have I witnessed", "I have witnessed", "I witnessed", "did I witnessed"],
        answer: "have I witnessed",
        explanation: "The negative adverb **'Seldom'** at the start of the sentence requires **inversion** (auxiliary verb 'have' before the subject 'I'). The perfect tense is appropriate here."
    },
    {
        question: "Were the election to be held tomorrow, the incumbent ____ win.",
        options: ["might", "could be", "would not", "is likely"],
        answer: "might",
        explanation: "This is an inverted **Conditional Type 2** ('If the election were to be held...') expressing a less likely condition, and the modal **'might'** best conveys the possibility."
    },
    {
        question: "Not for one moment ____ the thought of giving up cross his mind.",
        options: ["he entertained", "did he entertain", "he did entertain", "he had entertained"],
        answer: "did he entertain",
        explanation: "The initial negative phrase **'Not for one moment'** triggers **inversion** and requires the auxiliary **'did'** before the subject 'he'."
    },
    {
        question: "The evidence suggests that he ____ told to leave the premises.",
        options: ["must have been", "may have been", "could be", "should have been"],
        answer: "may have been",
        explanation: "**'May have been'** (a modal perfect passive) is the most suitable for expressing an uncertain possibility about a past action."
    },
    {
        question: "It is imperative that the company ____ immediate action.",
        options: ["takes", "take", "is taking", "will take"],
        answer: "take",
        explanation: "The structure 'It is imperative that...' requires the **subjunctive mood** (base form of the verb: **'take'**), essential C2 grammar."
    },
    {
        question: "Much as I respect her work, I cannot ____ her methods.",
        options: ["abide by", "concede to", "adhere to", "condone"],
        answer: "condone",
        explanation: "**'Condone'** (a tolera, a ierta o acțiune imorală sau greșită) fits the formal, contrastive tone of the sentence."
    },
    {
        question: "____ a seasoned politician, she avoided making any explicit promises.",
        options: ["Being", "As", "She was", "Was"],
        answer: "Being",
        explanation: "A **Participle Clause** (**'Being a seasoned politician...'**) is a sophisticated C2 structure used to give a reason or context to the main clause."
    },
    {
        question: "The committee spent hours deliberating the most ____ course of action.",
        options: ["judicious", "wise", "sound", "considered"],
        answer: "judicious",
        explanation: "**'Judicious'** (înțelept, chibzuit) is a highly formal C2 adjective meaning having or showing good judgment, which collocates with 'course of action'."
    },
    {
        question: "Only by a stroke of luck ____ the disaster be averted.",
        options: ["was", "did", "could", "would"],
        answer: "could",
        explanation: "The inversive structure **'Only by...'** requires the auxiliary verb before the subject. **'Could'** expresses the ability or possibility of the avertion."
    },
    {
        question: "The documents, ____ to be destroyed, were found intact.",
        options: ["supposing", "had supposed", "supposed", "which supposed"],
        answer: "supposed",
        explanation: "This is a reduced relative clause (or Participle Clause). **'Supposed'** here means 'that were supposed', a stylistic feature of C2 writing."
    },
    // IDIOMS & PHRASAL VERBS
    {
        question: "He decided to ____ the bullet and confess his involvement.",
        options: ["bite", "chew", "swallow", "take"],
        answer: "bite",
        explanation: "The idiom **'bite the bullet'** (a accepta o situație neplăcută cu stoicism) is a classic C2 phrase."
    },
    {
        question: "We need to address the root ____ of the problem.",
        options: ["source", "cause", "origin", "basis"],
        answer: "cause",
        explanation: "The fixed collocation is **'the root cause'** (cauza principală/rădăcina problemei)."
    },
    {
        question: "The old house was slowly falling into ____.",
        options: ["disrepair", "disuse", "decomposition", "breakdown"],
        answer: "disrepair",
        explanation: "The fixed collocation is **'fall into disrepair'** (a ajunge în stare proastă/de degradare)."
    },
    {
        question: "The negotiations reached a temporary ____.",
        options: ["impasse", "deadlock", "standstill", "halt"],
        answer: "impasse",
        explanation: "**'Impasse'** (C2 noun, punct mort/blocaj) is the most formal and appropriate word for a deadlock in negotiations."
    },
    {
        question: "She's been working flat ____ to meet the deadline.",
        options: ["out", "through", "down", "over"],
        answer: "out",
        explanation: "The idiom **'working flat out'** means working as hard and fast as possible."
    },
    {
        question: "The committee decided to ____ its findings on the matter.",
        options: ["promulgate", "proclaim", "divulge", "announce"],
        answer: "promulgate",
        explanation: "**'Promulgate'** (C2 formal verb) means to promote or make widely known (an idea or cause)."
    },
    {
        question: "The two firms are constantly at ____ with each other.",
        options: ["loggerheads", "warfare", "conflict", "odds"],
        answer: "loggerheads",
        explanation: "The fixed idiom is **'to be at loggerheads'** (a fi în dispută/conflict). (C2 Idiom)"
    },
    {
        question: "He tends to ____ under the collar when criticized.",
        options: ["fume", "blow", "steam", "get"],
        answer: "get",
        explanation: "The idiom **'get under the collar'** (a se enerva/irita) is the C2 verb often used here."
    },
    {
        question: "The sheer ____ of data required careful analysis.",
        options: ["volume", "magnitude", "scope", "extent"],
        answer: "volume",
        explanation: "**'Volume'** (volum, cantitate) is the best fit when referring to a large quantity of measurable items like 'data'."
    },
    {
        question: "The politician managed to ____ public opinion in his favour.",
        options: ["sway", "influence", "bend", "bias"],
        answer: "sway",
        explanation: "**'Sway'** (a influența convingerile) is the strongest and most appropriate C2 verb meaning to persuade someone to change their opinion."
    },
    {
        question: "They tried to ____ over the disagreement, but failed.",
        options: ["gloss", "cover", "smooth", "polish"],
        answer: "gloss",
        explanation: "The phrasal verb **'gloss over'** means to treat a serious subject or problem without enough seriousness, often by ignoring or hiding details (C2)."
    },
    {
        question: "The board reached a ____ majority on the vote.",
        options: ["sweeping", "overwhelming", "vast", "heavy"],
        answer: "overwhelming",
        explanation: "**'Overwhelming majority'** (majoritate covârșitoare) is a standard C2 collocation."
    },
    {
        question: "The report provides a very detailed ____ of the ecosystem.",
        options: ["delineation", "description", "portrait", "sketch"],
        answer: "delineation",
        explanation: "**'Delineation'** (C2 noun) means the action of describing or depicting something precisely, suitable for a formal report."
    },
    {
        question: "His long experience gives him an ____ advantage.",
        options: ["inestimable", "priceless", "valuable", "immense"],
        answer: "inestimable",
        explanation: "**'Inestimable'** (C2 adjective, neprețuit) means too great to calculate, often used with abstract nouns like 'value' or 'advantage'."
    },
    {
        question: "The plan proved to be politically ____.",
        options: ["untenable", "unsustainable", "improbable", "unlikely"],
        answer: "untenable",
        explanation: "**'Untenable'** (C2 adjective, de nesuținut) means not able to be maintained or defended against objection, which collocates with political/legal positions."
    },
    {
        question: "The scandal led to the politician's ____.",
        options: ["downfall", "ruin", "collapse", "termination"],
        answer: "downfall",
        explanation: "**'Downfall'** (cădere/ruinare) is a formal C2 noun often used in political or corporate contexts."
    },
    {
        question: "She's an extremely ____ observer of human behaviour.",
        options: ["perceptive", "conscious", "aware", "knowing"],
        answer: "perceptive",
        explanation: "**'Perceptive'** (C2 adjective, perspicace) means having or showing sensitive insight, a strong descriptor for an 'observer'."
    },
    {
        question: "The two countries are trying to ____ diplomatic relations.",
        options: ["re-establish", "rebuild", "rejoin", "restore"],
        answer: "re-establish",
        explanation: "**'Re-establish'** (a restabili, a reface) is the most formal verb used with 'relations' (diplomatice/commerciale)."
    },
    {
        question: "He was criticized for his ____ to face the facts.",
        options: ["reluctance", "hesitation", "unwillingness", "reticence"],
        answer: "reluctance",
        explanation: "**'Reluctance'** (lipsă de tragere de inimă, reticență) is the noun that best captures the unwillingness to act (C2 vocabulary)."
    },
    {
        question: "The decision was ____ to the board for final approval.",
        options: ["referred", "directed", "sent", "passed"],
        answer: "referred",
        explanation: "**'Referred to'** (a trimite/direcționa) is the formal verb used when sending a matter to an authority for decision."
    },
    {
        question: "The situation descended into complete ____.",
        options: ["mayhem", "mess", "chaos", "disorder"],
        answer: "mayhem",
        explanation: "**'Mayhem'** (C2 noun, haos, dezordine totală) is a more intense and precise word than 'chaos' or 'disorder'."
    },
    {
        question: "The novel's plot is incredibly ____.",
        options: ["intricate", "complex", "detailed", "complicated"],
        answer: "intricate",
        explanation: "**'Intricate'** (C2 adjective, complicat, întortocheat) is the most appropriate literary word, conveying a high level of detail and complexity."
    },
    {
        question: "He was considered a ____ scholar in his field.",
        options: ["pre-eminent", "superior", "dominant", "leading"],
        answer: "pre-eminent",
        explanation: "**'Pre-eminent'** (C2 adjective, eminent, deosebit) means surpassing all others, a very strong formal adjective."
    },
    {
        question: "The economic downturn proved to be a major ____ for the government.",
        options: ["stumbling block", "obstacle", "challenge", "hurdle"],
        answer: "stumbling block",
        explanation: "The idiom **'stumbling block'** (piedică, obstacol major) is a strong C2 figurative expression."
    },
    {
        question: "The agreement lacked the necessary legal ____.",
        options: ["rigour", "strictness", "severity", "firmness"],
        answer: "rigour",
        explanation: "**'Rigour'** (C2 noun, rigoare, precizie) is the best collocation when referring to legal or academic standards."
    },
    {
        question: "The journalist tried to ____ the scandal.",
        options: ["unravel", "undo", "unfold", "uncover"],
        answer: "unravel",
        explanation: "**'Unravel'** (a dezlega, a desluși) is a strong C2 verb often used in the context of mysteries or complex situations/scandals."
    },
    {
        question: "The politician was notorious for his ____ rhetoric.",
        options: ["incendiary", "flaming", "burning", "heated"],
        answer: "incendiary",
        explanation: "**'Incendiary'** (C2 adjective, incendiar, provocator) is a formal word used to describe speech that provokes anger or violence."
    },
    {
        question: "The crisis was perceived as a ____ to democracy.",
        options: ["threat", "danger", "risk", "hazard"],
        answer: "threat",
        explanation: "**'Threat'** (amenințare) is the noun that collocates most strongly with abstract concepts like 'democracy' or 'stability'."
    },
    {
        question: "He showed great ____ in the face of adversity.",
        options: ["fortitude", "strength", "bravery", "courage"],
        answer: "fortitude",
        explanation: "**'Fortitude'** (C2 noun, tărie sufletească, curaj) is a formal, high-level synonym for 'courage' used in challenging contexts."
    },
    {
        question: "The decision was predicated ____ a thorough review of the facts.",
        options: ["by", "on", "with", "from"],
        answer: "on",
        explanation: "The formal C2 verb **'predicated on'** (a se baza pe) requires the preposition **'on'**."
    },
    {
        question: "The government attempted to ____ dissent.",
        options: ["stifle", "smother", "choke", "gag"],
        answer: "stifle",
        explanation: "**'Stifle'** (a înăbuși) is the formal verb used to suppress or stop something, often used in political contexts with 'dissent' or 'creativity'."
    },
    {
        question: "The findings give ____ to the theory.",
        options: ["credence", "belief", "faith", "trust"],
        answer: "credence",
        explanation: "The fixed collocation is **'give credence to'** (a acorda credibilitate), a hallmark of C2 vocabulary."
    },
    {
        question: "The issue has been a ____ point for many years.",
        options: ["contentious", "disputable", "arguable", "debated"],
        answer: "contentious",
        explanation: "**'Contentious'** (C2 adjective, controversat, litigios) is a strong formal word used for difficult topics."
    },
    {
        question: "The company's success is largely ____ to its innovative spirit.",
        options: ["attributable", "caused", "resulting", "responsible"],
        answer: "attributable",
        explanation: "**'Attributable to'** (a fi atribuit/datorat) is a formal C2 verb often used to state the cause of a result."
    },
    {
        question: "The whole affair was a mere ____.",
        options: ["pretext", "excuse", "reason", "subterfuge"],
        answer: "pretext",
        explanation: "**'Pretext'** (pretext, justificare falsă) is a formal C2 noun meaning a reason given in justification of a course of action that is not the real reason."
    },
    {
        question: "She had a sudden ____ of intuition.",
        options: ["flash", "burst", "glimpse", "streak"],
        answer: "flash",
        explanation: "The collocation is **'a flash of intuition/inspiration'** (un moment scurt de intuiție)."
    },
    {
        question: "The committee has a very strict ____ on membership.",
        options: ["prerequisite", "requirement", "stipulation", "condition"],
        answer: "prerequisite",
        explanation: "**'Prerequisite'** (C2 noun, condiție prealabilă) is a formal noun that must be met before something else is possible."
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