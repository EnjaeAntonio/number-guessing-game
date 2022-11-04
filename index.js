'use strict';

// Utility Functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
 }
    

function select(selector, parent = document) {
    return parent.querySelector(selector);
 }

 function selectAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
 }


 function create(element, parent = document) {
   return parent.createElement(element);
 }

 function log(content) {
   console.log(content);
 }

 const btn = select('.btn');
 const output = select('p');
 const playAgain = select('.play-again')
 const attempts = select('.attempts')
 const number = select('.guess');
 let answer = [Math.floor(Math.random() * 50)];
 console.log(answer)
 let numberOfGuesses = 1;
 let guessNums = [];


 onEvent('click', btn, function() {
  
    let a = number.value;

    if (a < 1 || a > 50){
        output.innerText = `Enter a number between 1-50`;
    }
 
        if (a < answer) {
            output.innerText = `${a} is too low`
            attempts.innerText = 'Attempts: ' + numberOfGuesses;
        }
        else if (a > answer) {
            output.innerText = `${a} is too high`
            attempts.innerText = 'Attempts: ' + numberOfGuesses;
        }
        else if (a == answer) {
            output.innerText = `You got it!`
            attempts.innerText = 'Attempts: ' + numberOfGuesses;
        }
        else if (isNaN(a)){
            output.innerText = `Enter a valid number`
        }

        guessNums.push(a);
        numberOfGuesses+= 1;


 });

onEvent('click', playAgain, function() {
    document.location.reload(true)
})