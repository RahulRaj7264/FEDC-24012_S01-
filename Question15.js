const students = [
    { name: "Alice", age: 20, marks: { math: 85, science: 90, english: 88 } },
    { name: "Bob", age: 22, marks: { math: 78, science: 82, english: 80 } },
    { name: "Charlie", age: 21, marks: { math: 92, science: 88, english: 84 } }
];

students.push({ name: "David", age: 23, marks: { math: 75, science: 89, english: 91 } });

console.log("Average marks for each student:");
students.forEach(student => {
    const { math, science, english } = student.marks;
    const average = (math + science + english) / 3;
    console.log(`${student.name}: ${average.toFixed(2)}`);
});
let topStudent = students[0];
let highestAverage = 0;

students.forEach(student => {
    const { math, science, english } = student.marks;
    const average = (math + science + english) / 3;
    if (average > highestAverage) {
        highestAverage = average;
        topStudent = student;
    }
});

console.log("Student with the highest average marks:");
console.log(`${topStudent.name}: ${highestAverage.toFixed(2)}`);
