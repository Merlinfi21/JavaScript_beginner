function testStrictNotEqual(val) {
    if (val !== 17) {

        return "not equal";
    }
    return "equal";
}

console.log(testStrictNotEqual("17"))