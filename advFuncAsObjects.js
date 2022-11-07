////    HIGHER ORDER FUNCTION    \\\\

//function will be declared in differen variations
function add (x , y) {
    return x + y;
}

const subtract = function (x , y) {
    return x - y;
}

function multiply (x , y) {
    return x * y;
}

const division = function (x , y) {
    return x / y;
}

// function added to an array \\
const operations = [add, subtract, multiply, division];

// SYNTAX TO CALL THE FUNCTION in CONSOLE \\
operations[1](10,2)  // 8 (SUBTRACT IS IN INDEX 1)

//operation[1] will just give us the function NOT CALL IT
//output will be the function as an object (functions are objects)

//WE CAN LOOP OVER THIS ARRAY\\
for (let func of operations){
    let result = func(30,5); 
    console.log(result)
}
//function was called in the for of loop with HARD coded args 30,5
//the func was stored in a variable (result)
//for each of the function call in the array the operation
//specific to that function was executed. NOTE THE SYNTAX. 



//  STORING A FUNCTION IN AN OBJECT  \\
//  THIS IS A HOW A METHOD IS CREATE \\
const  thing = {
    doSomethin: multiply
 // note the key is a variable (nameOFChoice) and the the value is the function \\  
}
// CALLING A FUNCTION STORED IN A OBJECT \\
    //1. VARIABLE NAME . notation
    //2. OBJECT NAME IN VARIABLE 
thing.doSomethin(10, 2) // 20

// MAIN TAKEAWAY HERE IS THAT FUNCTIONA ARE SIMPLY VALUES
// IN JS WE CAN STORE THEM IN AN ARRAY CALL THEM DYNAMICALLY
// PUT THEM IN FUNCTION VARIABLES EACH TIME THROUGH A LOOP
// AND EXECUTE THEM