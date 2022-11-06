// for of loop are used to iterate over iterables ex. arrays, strings etc

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
const keanuMovie = {
    "The Matrix"    : 9.8,
    "John Wick"     : 9.5,
    "47 Ronin"      : 8.5,
    "Speed"         : 8.0,
    "Constantine"   : 7.5
}
for (let movie of Object.keys(keanuMovie)) {
    console.log(movie, keanuMovie[movie]);
    //The keys are used to acces the values in this ex. 
    // console.log(movie) //key output only
}

//finding the average review score

//1. store the values in a variable
const ratings = Object.values(keanuMovie) 
//3. create variable to add all values (rating)
let total = 0 
//2. iterate over the variable (remember ratings is just the values here)
for (let r of ratings) {   
    total += r;  //4. add each value(rating) 
}
//5.create a variable to store the average of the values done outside the loop
let avg = total / ratings.length 
console.log(avg) 


//REFACTOR USING FOR IN LOOP (accessing Key and value)
for (let movie in keanuMovie) {
    console.log(`${movie} Personal Rating ${keanuMovie[movie]}`)
}
//REFACTOR USING FOR IN LOOP (SUMMING VALUES)
let refractoredTotal = 0;
for (let movie in keanuMovie) {
    refractoredTotal += keanuMovie[movie];
}
let refractoredAvg = `${refractoredTotal} / ${keanuMovie.length}`
console.log(refractoredAvg)















