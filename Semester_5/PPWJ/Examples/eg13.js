function studentResult(name, mark1, mark2, mark3) {
    const total = mark1 + mark2 + mark3;
    const avg = total / 3;
    let grade;
    if (avg >= 90) {
        grade = 'A';
    } else if (avg >= 80) {
        grade = 'B';
    } else if (avg >= 70) {
        grade = 'C';
    } else if (avg >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return {
        name: name,
        total: total,
        avg: avg,
        grade: grade
    };
}

console.log(studentResult('John', 95, 88, 92));