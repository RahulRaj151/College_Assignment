let person = {
    name: "John Doe",
    age: 25,
    marks: 85
};

for (let key in person) {
    console.log(person[key]);
}

let personArray = [person.name, person.age, person.marks];

for (let i = 0; i < personArray.length; i++) {
    console.log(personArray[i]);
}
