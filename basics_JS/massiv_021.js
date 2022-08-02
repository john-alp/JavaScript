"use strict";
/*
const arr = [1, 2, 3, 6, 8];

arr.pop(); // удаляем послед.
arr.push(10); // добавляем в конец

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
  console.log(value);
}

arr.forEach(function(item, i, arr)  {
    console.log(`${i}: ${item} vnutry arr ${arr}`);
});

arr.forEach(function(entry) {
  console.log(entry);
});

console.log('---------------------');


*/

const str = prompt("", "");
const prd = str.split(", ");
console.log("outgoing " + prd.join('; '));
console.log();

const arr = [39, 4, 6, 2, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}