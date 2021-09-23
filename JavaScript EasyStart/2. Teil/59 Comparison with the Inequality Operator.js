function testNotEqual(val) {
    if (val != 99) {
        return "not equal";
    }
    return "equal";
}

console.log(testNotEqual(99));