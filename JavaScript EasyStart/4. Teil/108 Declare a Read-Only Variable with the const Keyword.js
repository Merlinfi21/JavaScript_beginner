/*
function printManyTimes(str) {
    "use strict";

    var sentence = str + " is cool";
    
    sentence = str + " is amazing"

    for(var i = 0; i < str.length; i += 2) {
        console.log(sentence);
    }
}
printManyTimes("freeCodeCamp"); */

function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool";
    

    for(let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");
