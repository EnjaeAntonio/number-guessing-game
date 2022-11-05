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

 const btn = select('.submit-btn');
 const output = select('p');
 const playAgain = select('.play-again')
 const attempts = select('.attempts')
 const number = select('.guess');
 const giveUp = select('.give-up-btn')
 let answer = Math.floor(Math.random() * 10) + 1;
 console.log(answer)
 let numberOfGuesses = 4;
 let guessNums = [];


 onEvent('click', btn, function() {
  
    let a = number.value;
        
        if (a <= 0 || a >= 11){
            output.innerText = `Enter a number from 1-10`;
            select('.btn').disabled = true;
        }
 
         else if (a < answer) {
            output.innerText = `My number is higher guess again`
            attempts.innerHTML = 'Attempts remaining: ' + '<span>' + numberOfGuesses + '</span>';
        }
        else if (a > answer) {
            output.innerText = `My number is lower guess again`
            attempts.innerHTML = 'Attempts remaining: ' + '<span>' + numberOfGuesses + '</span>';
        }
        else if (a == answer) {
            output.innerText = `You got it play again!`
            attempts.innerHTML = 'Attempts remaining: ' + '<span>' + numberOfGuesses + '</span>';
            select('.btn').disabled = true;
        }
        else if (isNaN(a)){
            output.innerText = `Enter a valid number`
        }

        guessNums.push(a);
        numberOfGuesses-= 1;
        
        if (numberOfGuesses === -1) {
            output.innerHTML = `Out of attempts. ` + '<span>' + `${answer} ` + '</span>' + `is the answer`;
            select('.btn').disabled = true;
        }

 });


// Play again function
onEvent('click', playAgain, function() {
    document.location.reload(true)
});

// Give up function
let chance = 3; 

onEvent('click', giveUp, function() {
    chance-= 1;
    if(chance === 2){
        output.innerHTML =  'Are you sure?'
    }
    else if (chance === 1){
        output.innerHTML =  'Are you 100% sure?'; 
    } 
    else if (chance === 0)
    output.innerHTML =  '<span>' + `${answer} ` + '</span>' + `is the answer`; 
})