

/// RETURNING A FUNCTION FROM WITHIN A FUNCTION \\\

// function multiplyBy will accept an arg (num in this e.g)
//It will return a function that takes an arg (x in this e.g)
//the returned functon will return a piece of logic (x * num)
//the logic will hold the passed in arg num :/  

function multiplyBy(num){
    return function(x){
        return x * num           //ananymous function 
    }
}

const triple = multiplyBy(3);
triple(6); // 18
//this function will accept the arg (x)
//it will then multiply x by the value of num 
//num is passed in as the arg for the higher function
const double = multiplyBy(2); //same logic applies
const half = multiplyBy(0.5); //same logic applies

//we can think of the 1st function as a conveyor belt
//going by stamping a different value. in this case num
//if we pass in 5 we'll get back a function that multiplies
// by 5

// Rember that w/ lexical scope a nested function has access to 
// the socope of the parent function. num is not defined in the 
// child function but in the parent function but we have access to
// it and it's returned value which is passed and is always the same 

//ananymous functions are generally passed to higher order function\\


//make a factory for functions that server to check
//if a value is between one num and another
//the returned function will accept an agr 
//and check if that arg's value is between 
//the parent function 2 arg's
function makeBetweeFunc(num1, num2) {
    return function(num3){
        return num3 >= num1 && num3 <= num2;
    }
}

const isChild = makeBetweeFunc(0,18);
isChild(17); //true
isChild(19); //false

const secWeakestNbaEra = makeBetweeFunc(1988, 1995)
//had the 2 most teams added to the leage(watered down)
const isaccurateRAR = makeBetweeFunc(50,100)
const catchMeOutsideIfTemp = makeBetweeFunc(65,80)

// (num3 >= num1 && num3 <= num2) This is a boolean expression
// it will eval to true or false.