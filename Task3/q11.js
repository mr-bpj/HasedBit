const studentsScores = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

const result = studentsScores.map(student => {
    let studentName = Object.keys(student)[0];
    let scores = Object.values(student)[0];
    let averageScore = Object.values(scores).reduce((acc, curr) => acc + curr, 0) / Object.keys(scores).length;
    return { [studentName]: { average: averageScore } };
});

console.log(result);
// Output:
// [
//   { student1: { average: 64.2 } },
//   { student2: { average: 64.2 } },
//   { student3: { average: 64.2 } }
// ]
