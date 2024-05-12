"use strict";
let magician = ["David ", "Alice ", "Chris "];
function show_magnicians(magician) {
    magician.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magician) {
    let greatMagician = [];
    magician.forEach(magician => {
        greatMagician.push(`${magician} the great`);
    });
    return greatMagician;
}
let greatMagician = make_great(magician.slice());
console.log("Oriinal Magicians:");
show_magnicians(magician);
console.log("Great Magicians:");
show_magnicians(greatMagician);
