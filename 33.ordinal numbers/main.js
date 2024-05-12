"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        console.log("st");
    }
    else if (number === 2) {
        console.log("st");
    }
    else if (number === 5) {
        console.log("ft");
    }
    else {
        console.log("rt");
    }
});
