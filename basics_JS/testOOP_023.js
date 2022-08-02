"use strict";

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = {
    health: 100   
};

john.__proto__ = soldier;

console.log(john.armor);
john.sayHello();

Object.setPrototypeOf(john, soldier); // v dinamike

const john2 = Object.create(soldier); // nasledovanie

