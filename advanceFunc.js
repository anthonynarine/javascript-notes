
//  SCOPE
//VARIABLE "VISIBILITY"
//The location where a variable is defined
// 
function helpMe(){
    let msg = "HELP I'VE FALLAN AND CAN'T GET UP!";
}

//msf varialbe is scoped to the the helpMe function
//trying to access it outside of the function will
//produce and error

var goat = "Lebron James"

function goatWatch(){
    let goat = "Michael Jordan"
    console.log(goat);
}
console.log(goat) //this varialbe is globally scoped
goatWatch(); //this variable is locally scoped to the function


// VARIABLES CREATED WITH THE VAR KEYWOARD IS NOT BLOCK SCOPED
// IT HAS DIFFERENT SCOPING RULES THAN LET AND CONST.


// [1,3,5]
// [2,6,10]
function doubleArray(arr){
    const result = []; //scoped to the entire function
    for (let num of arr){
        let double = num * 2;
        result.push(double);
    }
    return result; 
 //b/c results is scoped to the entire function it can be called here   
}