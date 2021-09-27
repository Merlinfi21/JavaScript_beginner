/* const sum = (function() {
    return function sum(x, y, z) {
        const args = [ x, y, z ];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); */

const sum = (function() {
    return function sum(...args) { // wir können jetzt mehr als nur 3 argumente rein parsen
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4));