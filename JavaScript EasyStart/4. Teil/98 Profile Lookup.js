var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "04980984",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "3592853029",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "458575653",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "4646464664",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    },
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";

        }
    }
    return "No such contact";

}

var data = lookUpProfile("Sherlock", "lastName");

console.log(data);