

/// Map creates a new array with the results of 
// calling a callback on every element in the array 

const digits = [20, 21, 22, 23, 24, 25];
const words = ["asap", "byob", "rsvp", "diy"]

//create a new array with the number in digits doubled
const doubleDigits = numbers.map(function(num){
    return num * 2;
});

//chreat a new array using that checks if the numbers are even
const digitdetails = digits.map(function(n){
    return {
        value: n,
        isEven: n % 2 === 0
    }
});


// PROMBEM 1 //create a new array from word where each string is all caps and seperated by periods like e.g a.s.a.p

//1.use map
//2. for all caps use .toUpperCase()

//3.use .toSplit("") split will want to know where it should split  if we give it an empty string it will create an array for each  word in the words array ["a", "s", "a", "p"]

//4. we call .join(".") which will take each array we created using split and join it together into one string. 

let loudWords = words.map(function(word){
    return word.toUpperCase().split('').join('.');
})



//create a new array using .map() with all the book titles
let novels = [
    {
        title:  "Harry Potter and the Sorcerer's Stone",
        author: ["J.K Rowling"],
        rating: 4.9            
    },
    {
        title:  "Dune",
        author: ["Frank Herbert"],
        rating: 4.6            
    },
    {
        title:  "A Game of Thrones",
        author: ["George R.R Martin"],
        rating: 4.75            
    }
];

let novelTitles = novels.map(function(book){
    return book.title.toUpperCase();
});


