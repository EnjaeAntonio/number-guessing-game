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
 const playAgain = select('#play-again')
 const attempts = select('.attempts')
 const number = select('.guess');
 const giveUp = select('.give-up-btn')
 const winResult = select('.win-result')
 const winInfo = select('h4')
 const winPraise = select('.result-btn p')
 const winPlayAgain = select('#play-again-win')
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
            output.innerText = `Your guess is too low`
            attempts.innerHTML = 'Attempts remaining: ' + '<span>' + numberOfGuesses + '</span>';
        }
        else if (a > answer) {
            output.innerText = `Your guess is too high`
            attempts.innerHTML = 'Attempts remaining: ' + '<span>' + numberOfGuesses + '</span>';
        }
        else if (a == answer) {
            winResult.classList.toggle('win-result-page') 
            winPraise.innerText = `Nicely Done`
            winInfo.innerHTML = 'You had ' + '<span>' + numberOfGuesses + '</span>' + ' attempts remaining';
            btn.disabled = true;
        } 
       
        else if (isNaN(a)){
            output.innerText = `Enter a valid number`
        }

        guessNums.push(a);
        numberOfGuesses-= 1;
        
        if (numberOfGuesses === -1) {
            output.innerHTML = `Your number was ` + '<span>' + `${answer} ` + '</span>' ;
            btn.disabled = true;
        }

 });


// Play again function
onEvent('click', playAgain, function() {
    document.location.reload(true)
});

onEvent('click', winPlayAgain, function() {
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