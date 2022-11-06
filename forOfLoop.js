// of loop are used to iterate over iterables ex. arrays, strings etc

let subreddits = ["basketball", "gaming", "anime", "cringe", "book"]
//traditionaly for loop
for (let i = 0; i < subreddits.length; i++) {
    console.log(subreddits[i]);
}

//  FOR OF LOOPS (iterating over an array)
for (let subs of subreddits){   
    console.log(subs);
}

//iterating over a string
for (let chars of "Julia") {
    console.log(chars.toUpperCase());
}


//ITERATING OVER OJBECTS WITH FOR OF LOOP
// USING Objects.keys() & Objects.values() method
const kenanuScale = {
    "The Matrix"    : 9.8,
    "John Wick"     : 9.5,
    "47 Ronin"      : 8.5,
    "Speed"         : 8.0,
    "Constantine"   : 7.5
}
for (let movie of Object.keys(kenanuScale)) {
    console.log(movie, kenanuScale[movie]);
    //The keys are used to acces the values in this ex. 
    // console.log(movie) //key output only
}

//finding the average review score

//1. store the values in a variable
const ratings = Object.values(kenanuScale) 
//3. create variable to add all values (rating)
let total = 0 
//2. iterate over the variable (remember ratings is just the values here)
for (let r of ratings) {   
    total += r;  //4. add each value(rating) 
}
//5.create a variable to store the average of the values done outside the loop
let avg = total / ratings.length 
console.log(avg) 














