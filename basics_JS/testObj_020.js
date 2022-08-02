"use strict";

const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
}

console.log(options.name);
//console.log(options.colors[border]);
//delete options.name;
console.log(options.name);

for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство obj ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

function counter(obj) {
    let count = 0;
    for (let key in options) {
        count++;
    }
    return count;
} 

console.log(counter(options));

console.log(Object.keys(options).length);

console.log('nash metod v obj ' + options.makeTest());

// деструктизация
const {border, bg} = options.colors;

console.log("border " + border);

