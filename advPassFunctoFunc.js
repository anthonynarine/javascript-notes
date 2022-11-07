// Function that accepts a function as an Arg

function callThreeTimes(func) {
    func();
    func();
    func();
}

function iStinkAt(){
    console.log ("I STINK AT FANTASY FOOTBALL!");
}
//call func callThreeTimes(iStinkAt) & pass in the func iStinkAt
//the output wil be the logic in iStinkAt - which is:
//"I STINK AT FANTASY FOOTBALL!"" 3x whis is the logic in callThreetimes()
callThreeTimes(iStinkAt); 
// "I STINK AT FANTASY FOOTBALL!"
// "I STINK AT FANTASY FOOTBALL!"
// "I STINK AT FANTASY FOOTBALL!"


function rage(){
    console.log("I HATE FANTASY FOOTBALL!");
}
callThreeTimes(rage); //try 

//This function will call any function and repeat it any num of times\\
function repeatNTimes(func, num){
    for(let i = 0; i < num; i++){
        func();       
    }
}

// repeatNTimes(rage, 9);
//this function call will repeat "I HATE FANTASY FOOTBALL 9x"

//this function will randomly pick a function
function randomFuncPick(func1,func2){
    let rand = Math.random();
    console.log(rand) //used for testing. 
    if (rand < 0.5) {
        func1();
    }
    else{
        func2();  // if rand is <0.5 func2 is called
    }
}
randomFuncPick(iStinkAt,rage) // Try this i console

//remember that Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive). Math.random() always returns a number lower than 1. use Math.floor() to obtain whole numbers.