//looping over an array
const examScores = [ 99,77,91,57,66];

for (let i = 0; i < examScores.length; i++) {
    console.log(i, examScores[i]);
};



//looping over an array with nested objects

const myStudents = [ {
    firstName : "Julia",
    grade     : 96
},
{
    firstName : "Revel",
    grade     : 92
},
{
    firstName : "Jaiya",
    grade     : 94
},
{
    firstName : "Nyla",
    grade     : 90
}
];
for (let i = 0; i <= myStudents.length; i++){
    let student = myStudents[i]; //is a place holder variable for each student object
    console.log(`${student.firstName} scored ${student.grade}`);
}