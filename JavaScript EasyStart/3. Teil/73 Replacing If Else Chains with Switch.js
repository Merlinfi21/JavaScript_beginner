/***function chainToSwitch(val) {
    var answer = "";


    if (val === "bob") {
        answer = "marley";
    } else if (val === 42) {
        answer = "The answer";
    } else if (val === 1) {
        answer = "there is no #1";
    } else if (val === 99) {
        answer = "missed me by this much";
    } else if (val === 7) {
        answer = "ate nine";
    }
    return answer;
}
    // change code

console.log(chainToSwitch(42)) **/

function chainToSwitch(val) {
    var answer = "";

    switch(val) {
        case "bob":
            answer = "marley";
            break;
        case 42:
            answer = "the answer";
            break;
        case 1:
            answer = "there is no number one";
            break;
        case 99:
            answer = "missed by this much";
            break;
        case 7:
            answer = "ate nine";
            break;
    }
    return answer;
}


console.log(chainToSwitch(42))