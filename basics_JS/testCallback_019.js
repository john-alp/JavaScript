"use strict";

function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}


function learnJS(lang, callback) {
    first();
    callback();
}

learnJS("May", second);