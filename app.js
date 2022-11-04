
// if, else if, else
let rating = 1;

if (rating === 3){
    console.log ("you are a superstar")
}

else if (rating === 2){
    console.log("meets expectations");
}
else if (rating === 1){
    console.log("needs impovements");
}


// if else

let hightScore = 1400;
let userScore = 1300;

if (userScore >= hightScore) {
    console.log(`Congrats, you have the new hight score of ${userScore}`);
    hightScore = userScore;

}
else {
    console.log(`Good game. Your score of ${userScore} did not beat the high score of ${hightScore}`)
}


//nested if statements

let password = "kitty"

if (password.length >= 6){
    if (password.indexOf(" ") === -1){
        console.log("Valid Password");
    }
    else{
        console.log("Password is long enought, but cannot contain spaces");
    }
}
else{
    console.log ("Password must be longer");
}

//truthy and falsy values
//almost all values in javascrip are truthy 
//except 
// 0
// " " (empty sring)
//null
//undefined
//NaN

let loggedInUser = null  // this will evaluate to false

if (loggedInUser){
    console.log("YOUR ARE SIGNED IN");
}
else{
    console.log("PLEASE LOG IN");
}

// AND &&
// with AND (&&) both sides need to be true for the statement to eval to true
// using && we can refractor the abve nexted if statement

let pWord = "taco tudeday";
if (pWord.length >= 8 && pWord.indexOf(" ") === -1) {
    console.log("VALID PASSWORD");
}
else{
    console.log("INVALID PASSWORD");

}

// OR (||)
// if one side id true the whole thing is true

1 !== 1 || 10 === 10 // true
10/2 === 5 || null // ture
0 || undefined // false 

let age = 78;
if (age < 6 || age >= 65){
    console.log("YOU GET IN FOR FREE");
}
else{
    console.log("YOU HAVE TO PAY");
}


let color  = "violet";
if (color === "purple" || color === "lilac" || color === "violet") {
    console.log("GREAT CHOICE");
}

//NOT (!)
// NOT WILL evaluate to true is the expression is false
!null // false
! (0 === 0) //false
! (3<=4) //false


let loggedIn;
// if there  isn't a logged in user
if(!loggedIn) {
    console.log("GET OUT OF HERE");
}

let flavor = "watermelon";
if (flavor !== "grape" && flavor !=="cherry"){ 
    console.log("WE DO NOT HAVE THAT FLAVOR");
}

//alternatively
if (!(flavor === "grape" || flavor === "cherry")){
    console.log("WE HAVE THAT FLAVOR")
}
//NOTE THE ! THEN () WRAPPING THE ENTIRE STATEMENT


//OPERATOR PRESIDENCE
// AND (&&) TAKES PRESIDENCE OF OR (||)
// X === 7|| X === 3 && X > 10;
// // WILL EVALUATE TO TRUE
// X === 3 && X > 10 === true
// X === 7 || (X === 3 && X > 10);
// ORDER MATTERS
//LOGICAL ! THEN && THEN || 
// () WILL WILL ALWAYS WIN 


// SWITCH CASE SYNTAX
let day = 7;

switch (day) {
    case 1:
        console.log("MONDAY")
        break;
    case 2:
        console.log("TUESDAY")
        break;
    case 3:
        console.log("WEDNESDAY")
        break;    
    case 4:
        console.log("THURSDAY")
        break;
    case 5:
        console.log("FRIDAY")
        break;
    case 6:
        console.log("SATURDAY")
        break;
    case 7:
        console.log("SUNDAY")
        break;
    default:
        console.log("INVALID DAY") // equivalent to else
}
//NOTE A BREAK MUST ME ADDED AFTER EACH CASE OR THE CODE WILL RUN F
//IN A SLICE PATTERN EX IF DAY = 5  THE CASE FOR FRI, SAT & SUN WILL RUN. 

let emoji = "peach"
switch (emoji) {
    case "sad face":
    case "happy fave":
        console.log("yellow")
        break;
    case "peach":
        console.log("orange")
        break;
    case "heart":
    case "lips":
        console.log("red")
        break;
}
// Switch is great to test one thing agains multiple values
// instead of writing multiple if statements. 


//TERNARY OPERATION
// 3 PIECES -> CONTIONS?  expIfTrue: expIfFalse
//if condition is true. some code runs
//otherwise if false. some other code runs

let num = 7;
if (num === 7){
    console.log("LUCKY");
}
else{
    console.log("BAD")
}
// refactor using Ternary operation
num === 7? console.log("LUCKY"): console.log("BAD")
//note the colon to seperate statement evaluation


let onlineStatus = "offline";
let statusColor = onlineStatus === "offline" ? "red" : "green";




// ARRAYS
// ARRAYS are like lists in python
let shoppingList = ["cereal", "milk", "bread"];

let lottoNumb = [12, 56, 18, 10];

let mixItems = [6, 23, "lebron", "james"];

//Accessing arrays
let arrayOfColors = ["red", "green", "blue"]
// items are accessed by index location
arrayOfColors[0]  = "red"
arrayOfColors[2] = "blue"

//CHANGING ARRAYS
shoppingList[1] = "whole milk"

//Adding items to an array
shoppingList [3] = "ice cream"
//the ABOVE method of adding items will require you know how many
//elements are in the list.
shoppingList[shoppingList.length] = "apples"
shoppingList[shoppingList.length] = "pears"
//using the listname.lehgth will add to the end as well

//PUSH IS A BUILD IN JS METHOD TO USED TO ADD ITEMS TO THE END OF A LIST 
//This works exactly like the append() method in Python
shoppingList.push("potatoes") //this method can take multiple args. 
//use this method!

//pop() method (like in Python) this Js method removes and returns 
//the last item from the array
shoppingList.pop()

//Shift and Unshit methods- unshift method ADDS items to the start of the array
//shift REMOVES items fromt he start of the list
let dishesToDo = ["big platter"]

dishesToDo.unshift("large plate", "fork", "knife"); //multiple items can be passed in to be dded
dishesToDo.unshift("small plate");


//Concat() method used to merge two or more arrays. 
//syntax to merge arrays
//concat() can take in multiple arrays as argas. 
//list order matters
let fruits = ["apple", "banana"];
let veggies = ["asparagus", "brussel sprouts"];
let meats = ["steak", "fish", "chicken"];

let allfood = fruits.concat(veggies,meats)

//include() method looks for a value used to check if a value is present.
allfood.includes("fish") //true

//using includes() in conditional statements. returns true of false
if(allfood.includes("fish")){
    console.log("Tasha cannot eat this")
}


//indexOf() method just like string indexOf returns the index of the item 
//if item not on list it will return -1. used for checking where an item is. 
allfood.indexOf("steak")

//reverse() used to reverse the items in an array.
//a new copy of the array is not made
let letters = ["T", "C", "E", "P", "S", "E", "R"];
letters.reverse


//slice() method
let arteries = ["aorta", "iliac", "cfa", "sfa", "pop", "pta", "peroneal", "ata"];
let infowArteires = arteries.slice(0,2);
let outFlowArteries = arteries.slice(2) 
//not specifying a second index will give all values after the fist index.
//slice can be used to make a copy of a list
let copy = arteries.slice() 
// this will create a copy since no index value is provided. 

//SPLICE take in 3 args (start, # of items to delte and insert location)
//they all do not need to be used. 
    //lets insert something after "cfa"
arteries.splice(3,0, "pfa")
    //first arguement is where you want to start either removing or inserting
    //second is how many to items to delete
    //third what you want to insert