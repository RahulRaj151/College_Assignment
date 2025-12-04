class Student {
    constructor(name, rollNumber, marks) {
        this._name = name;
        this.rollNumber = rollNumber;
        this._marks = marks;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get marks() {
        return this._marks;
    }

    set marks(newMarks) {
        if (newMarks >= 0 && newMarks <= 100) {
            this._marks = newMarks;
        } else {
            console.log("Marks must be between 0 and 100");
        }
    }

    displayInfo() {
        return `${this.name}, ${this.rollNumber}, ${this.marks}`;
    }

    result() {
        return this.marks >= 40 ? "Pass" : "Fail";
    }
}

let students = [
    new Student("Alice", 1, 85),
    new Student("Bob", 2, 35),
    new Student("Charlie", 3, 92),
    new Student("Diana", 4, 78),
    new Student("Eve", 5, 45)
];

students[0].name = "Alicia"; 
students[1].marks = 50; 

for (let student of students) {
    console.log(`${student.displayInfo()} - ${student.result()}`);
}
