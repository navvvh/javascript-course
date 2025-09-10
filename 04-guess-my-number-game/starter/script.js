'use strict';


console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');


/*
What We're Building Today:
- A complete "Guess My Number" game
- Player guesses a number between 1-20
- Game provides feedback: "Too high!" or "Too low!"
- Score tracking and high score system
- Visual feedback and professional polish

This teaches us DOM manipulation - how JavaScript talks to HTML!
*/

console.log('Goal: Build a complete interactive game from scratch');
console.log('Focus: DOM manipulation, game state, and user interaction');

// DOM ELEMENTS SELECTION

console.log('=== DOM ELEMENT SELECTION ===');

const messageEl = document.querySelector('.message');
console.log(messageEl);
console.log(messageEl.textContent);
// messageEl.textContent = 'Hello from Javascript';


const scoreEl = document.querySelector('.score');
console.log('Score Element:' , scoreEl);
// scoreEl.textContent = '50';

const numberEl = document.querySelector('.number');
// numberEl.textContent = '21';

const highscoreEl = document.querySelector('.highscore')
// highscoreEl.textContent = '34';

const guessEl = document.querySelector('.guess');
console.log(guessEl);
// guessEl.value = '12';

// Game State Variables - The Game's Memory

let secretNumber = Math.trunc (Math.random() * 20 + 1);
console.log('Secret Number:', secretNumber);

let score = 20;
let highscore = 0;

document.querySelector('.score') .textContent = score;
document.querySelector('.highscore') .textContent = highscore;

console.log('Game state initialized!');

// Basic game logic 

document.querySelector('.check') .addEventListener('click', function () {
    console.log('checl button clicked!');
    const guess = Number(document.querySelector('.guess').value);
    console.log('Player guessed:' , guess)

    if (guess === secretNumber) {
        console.log('Correct guess!')
        document.querySelector('.message') .textContent = 'Correct Number!!!!';
        document.querySelector('.number') .textContent = secretNumber;
    } else if (guess > secretNumber) {
        console.log('Too high!');
        document.querySelector('.message') .textContent = 'Too High NAKO!';
    } else if (guess < secretNumber) {
        console.log('Too Low');
        document.querySelector('.message') .textContent = 'Too Low Haist!!!';
    }
});



