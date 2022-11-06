//  DEFINE FUNCTION
// function funcName(){ 
//     do something
// }
// funcName(): //function call

function love (){
    console.log("L.....O......V......E")
    console.log(" love...love...love....love")
    console.log("love...love...love....love")
}

for (let i = 0; i < 50; i++){
    love();
}

//DICE ROLL FUNCTION    
function rollDie(){
    // logic to generate a random # from 0-6
    let roll = Math.floor(Math.random() * 6) + 1; 
    //syntax is so shit compared to python to get a random #
    console.log(`Rolled: ${roll}`);    
}
// rollDie();
//(((PASSING A FUNCTION INTO ANOTHER FUNCTION)))

// MAKE A FUNCTION TO CALL rollDie() function
function throwDice(numRolls){
    for (let i = 0; i < numRolls; i++){
        rollDie();

    }
}
// throwDice();



// //((((FUNCTION ((with)) ARGUMENTS))))

function greet(knickname){
    console.log(`Hi, ${knickname}`);
}

//FUNCTIONS WITH MULTIPLE ARGS

//function to square any number
function square(num){
    console.log(num * num)
}

//function to add 2 #
function add(x, y){
    console.log(x + y);
 }
//function to divie  2 #
 function divide(a, b){
    console.log(a / b)
 }
