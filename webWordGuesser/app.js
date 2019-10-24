
// Define UI Vars

const wordReadout = document.querySelector('#guess-display');
const resetWord = document.querySelector('#random-word');

// Load Event Listeners

loadEventListeners();

function loadEventListeners(){
    // Check Memory (local storage)

    // Reset Word
    resetWord.addEventListener('click', resetGame);
};

// Initialize Secret Word
const wordList = ['house', 'cat', 'car', 'castle', 'computer', 'elephant', 'cattle', 'meadow', 'juxtapose', 'ramification', 
                  'justify', 'manipulate', 'inaugurate', 'capitulate', 'recirculate', 'mitigate', 'infiltrate'];
let secretWord =  wordList[Math.round(wordList.length * Math.random())];

// Reset Word

function resetGame(){
    let wordIndex = Math.round(wordList.length * Math.random());
    let randomWord = wordList[wordIndex];
    secretWord = randomWord;
    wordReadout.textContent = secretWord;
};
