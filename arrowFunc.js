////  ARROW FUNCTION  \\\

// Syntactically compact alternative to a regular function expression 

//syntax

// ! arrow function :)
// const square = function(x){
//     return x * x;
// }
   
//Arrow func\\
// const square = (x) => {
//         return x * x;
//     }

//arrow with single parameters
// const isEven = (num) => {
//     return num % 2 ===0;
// }


//arrow with multiple parameters
const multiplication = (x, y) => {
    return x * y;
}

// when you have an arrow function with only one parameter
// you can leave the prentheses off
const isEven = num => {
    return num % 2 === 0;
    
}

//implicit arrow function (more compact)
//an implicit arrow function does not need an parentheses or a return keyword
const power = n => (
    n ** n
)

//using the arrow function with .map()

const grades = [ 80, 78, 88, 93, 98]

//traditional function to to double grades in a new array
const double1 = grades.map(function (grade){
    return grade * 2;
})

//using arrow function
const double2 = grades.map(grade => {
    return grade * 2;
})

//using an implicit arrow function (only works with one param)
const double3 = grade => (grade * 2);

//maping the grades into a "odd" or even string
//* parity is the term used to define if a num is ever or odd
const parityList = grades.map(function (grade){
    if(grade > 90) return "Good Job";
    else if (grade > 80 && grade < 90) return "Be better";
    else return "You Lack Discipline";
 //no else needed just return odd
})