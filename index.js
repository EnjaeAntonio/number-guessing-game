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
 let answer = Math.floor(Math.random() * 10) + 1;
 console.log(answer)
 let numberOfGuesses = 4;
 let guessNums = [];


 onEvent('click', btn, function() {
  
    let a = number.value;
        
        if (a <= 0 || a >= 11){
            output.innerText = `Read instructions. Click play again`;
            select('.btn').disabled = true;
        }
 
         else if (a < answer) {
            output.innerText = `My number is higher guess again`
            attempts.innerHTML = 'Attempts: ' + '<span>' + numberOfGuesses + '</span>';
        }
        else if (a > answer) {
            output.innerText = `My number is lower guess again`
            attempts.innerHTML = 'Attempts: ' + '<span>' + numberOfGuesses + '</span>';
        }
        else if (a == answer) {
            output.innerText = `You got it play again!`
            attempts.innerHTML = 'Attempts: ' + '<span>' + numberOfGuesses + '</span>';
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