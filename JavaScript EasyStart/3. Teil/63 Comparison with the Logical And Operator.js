function testLogicalAnd(val) {
    if (val <= 50) {
        if (val >= 25) {
            return "Yes";
        }
    }
    return "No";
}

testLogicalAnd(10);

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
        
    }
    return "No";
}

console.log(testLogicalAnd(26));