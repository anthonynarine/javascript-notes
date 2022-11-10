         //// ARRAYS \\\\
///ARRAYS are like lists in python\\\\

let shoppingList = ["cereal", "milk", "bread"];

let lottoNumb = [12, 56, 18, 10];

let mixItems = [6, 23, "lebron", "james"];

//Accessing arrays
let arrayOfColors = ["red", "green", "blue"]
// items are accessed by index location
arrayOfColors[0]  = "red"
arrayOfColors[2] = "blue"

//CHANGING ARRAYS\\
shoppingList[1] = "whole milk"

//Adding items to an array\\
shoppingList [3] = "ice cream"
//the ABOVE method of adding items will require you know how many
//elements are in the list\\
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