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
 let numberOfGuesses = 4;
 let guessNums = [];


 onEvent('click', btn, function() {
  
    let a = number.value;

    if (a < 1 || a > 10){
        output.innerText = `Enter a number between 1-10`;
    }
 
        if (a < answer) {
            output.innerText = `My number is lower guess again`
            attempts.innerText = 'Attempts: ' + numberOfGuesses;
        }
        else if (a > answer && a < 10) {
            output.innerText = `My number is higer guess again`
            attempts.innerText = 'Attempts: ' + numberOfGuesses;
        }
        else if (a == answer) {
            output.innerText = `You got it!`
            attempts.innerText = 'Attempts: ' + numberOfGuesses;
            select('.btn').disabled = true;
        }
        else if (isNaN(a)){
            output.innerText = `Enter a valid number`
        }

        guessNums.push(a);
        numberOfGuesses-= 1;
        
        if (numberOfGuesses === -1) {
            output.innerText = `Out of attempts. ${answer} was the answer!`
            select('.btn').disabled = true;
        }

 });

onEvent('click', playAgain, function() {
    document.location.reload(true)
})