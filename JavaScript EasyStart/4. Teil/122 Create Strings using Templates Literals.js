/* const person = {
    name: "Zodiac Hasbro",
    age: 56
};


const greeting = `Hello, ma name is ${person.name}!
I am ${person.age} years onload.`;

console.log(greeting)

const result = {
    success: ["max-lengt", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = null;

    return resultDisplayArray;
}

/**
 * makeLis(result.failure) should return:
 * [ `<li class="test-warning">no-var</li>` ,
 *   `<li class="test-warning">var-on-top</li>` ,
 *   `<li class="test-warning">linebreak</li>`] 
 *

const resultDisplayArray = makeList(result.failure); */

const person = {
    name: "Zodiac Hasbro",
    age: 56
};


const greeting = `Hello, ma name is ${person.name}!
I am ${person.age} years onload.`;

console.log(greeting)

const result = {
    success: ["max-lengt", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="test-warning">${arr[i]}</li>`)
    }

    return resultDisplayArray;
}

/**
 * makeLis(result.failure) should return:
 * [ `<li class="test-warning">no-var</li>` ,
 *   `<li class="test-warning">var-on-top</li>` ,
 *   `<li class="test-warning">linebreak</li>`] 
 */

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);