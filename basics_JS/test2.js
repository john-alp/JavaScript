"use strict";

// function declaration
function showFirstMessage(text) {
    console.log(text);
}

function calc (a, b) {
    return a + b;
}


showFirstMessage('Hello!');
console.log(calc(4, 3));

// function expreddion 
const logger = function() {
    console.log('Hello!!');    
};

logger();

// стрелочные функции
const calc2 = (a, b) => {
    return a + b;
};

const fruit = "Some fruit";

console.log(fruit.slice(5, 11));
console.log(fruit.substring(5, 9));
console.log(fruit.substr(1, 3));




const num = 12.2;
console.log(Math.round(num));

console.log(parseFloat(num));


