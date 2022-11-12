/// Every Method \\\
//every is a boolean method will returns true of false

// tests whether ALL the elements in an array 
// pass the provided function. It returns a 
// boolean value

const words1 = ["dog", "dig", "log", "bag", "wag"]

const all3Lets = words1.every(word =>{
    return word.length ===3;
})


//all elements must be 3 characters long for this function to return true. 

//check to see if every word ends in the letter g
const allEndInG = words1.every(word => {
    const last = word.length -1;
    return word[last] === "g"
})