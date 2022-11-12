
                //// REDUCE \\\\
/// Eexecutes a reducer function on each element of the
/// array resulting in a single value.

            /// BASICS OF REDUCE \\\
/// SUMMING AN ARRAY (ACCUMULATOR)
/// ACCUMULATOR STORES THE END RESULT OF REDUCE
// currentVlaue, Val, max, element represents each 
// individual element in the array as reduce works
// its way across
const nums1 = [ 3,4,5,6,7];

const product = nums1.reduce((total, currentVal) => {
    return total * currentVal
})

//// Function breakdown \\\

// total            currentVal
// 3                   4
// 12                  5
// 60                  6
// 360                 7
// 2520

///FINDING THE MAX VALUE IN AN ARRAY USING THE ACCUMULATROR \\\
let grade1 = [ 89,94,59,77,99,73,80,76]

const topScore = grade1.reduce((max, currentVal) => {
    if (currentVal > max) return currentVal;
    return max;
});
//topscore; // 99
// max  currentVal    return
// 89      94            94 
// 94      59            94  
// 94      77            94          
// 94      99            99  

//the function can be re-written using Math.max
const topScore1 = grade1.reduce((max, currentVal) => {
    return Math.max(max, currentVal)
});

//we can alos use this to find the min grade
const lowScore = grade1.reduce((min, currentVal) => {
    return Math.min(min, currentVal)
});



//we can INITILIZE A STARTING VALUE when using reduce
//it is optional and can be and object (see below) if it is not provided js will start with the frist value in the array.

// SYNTAX TO INITIALIZE WITH A STARTING VALUE
const sumWithInitialVal = [10,20,30,40,50].reduce((sum, currVall) => {
    return sum + currVall;
}, 1000) // initial value 
// sumWithInitialVal; // 1150

    
// TALLYING VOTES IN AN ARRAY USING REDUCE \\\
// this problme will works using true of false, yay or nay etc..
const votes = [ "y", "y", "n", "y", "n", "y", "n","y"];

const results1 = votes.reduce((tally, currentVote) => {
    if(tally[currentVote]) {
        tally[currentVote]++;
    }
    else{
        tally[currentVote] = 1;
    }
    return tally
}, {})

//the thing that will actyally return, add into or update
// is going to be an object which will be set as 
// our initial value as described above
//{}


//fist pass will check for a y is there a y? yes
// {y:1} it will hold this value and move to the next element 
// {y:2} y is also the next element it will add one to y's current val
//{y:2 , n:1} n is the next element so js stores n + 1.
//this will go on for each element in the array
// until all the elements are tallied. 

// in the example above the 1st time the code runs the if statement is 
//not executed because there is no value in tally (there is no y or n)
//for this reason we set our else statement with a val of one. 
//Note that [] are used to accesses the index of the {} object.
//{} fist pass
//{y:1} second pass
//{y:2} thrid pass
//{y:2 , n:1} fourth pass and so on to the end of the array. 


// this function will also cater for other value as well ex. absent votes
const votes1 = [ "y", "y", "n","absent", "y", "n","absent", "y", "n","y"];

const results2= votes1.reduce((tally, currentVote) => {
    if(tally[currentVote]) {
        tally[currentVote]++;
    }
    else{
        tally[currentVote] = 1;
    }
    return tally
}, {})

/// REFRACTORING THE LOGIC \\\
const results3= votes1.reduce((tally, currentVote) => {
        tally[currentVote] = (tally[currentVote] || 0) + 1;
    return tally
}, {})
//basically if something exist add one to it if it does not
// set it to one. 