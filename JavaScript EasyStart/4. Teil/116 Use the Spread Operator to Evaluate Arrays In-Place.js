/* const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function() {
    arr2 = arr1; // Change this line
    arr1[0] = "Potato"
})();
console.log(arr2); */


const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function() {
    arr2 = [...arr1];
    arr2[0] = "Potato"
})();
console.log(arr2); //arr1