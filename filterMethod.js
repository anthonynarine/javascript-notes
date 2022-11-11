/// FILTER \\\

/// Creates a new array with all the elements that pass the thest implemented byt he provided function \\\

const jersey_num = [9, 8, 7, 6, 5, 4, 3 , 2, 1 ]
const odds = jersey_num.filter(num => {
    return num % 2 == 1;
})
// the callback will return true of false
//if it returns true, num is added to a filtered array
// [9,7,5,3,1]

//return all numbers less than and greater than5 using an implecit arrow func in seperates arrays. 
const smallNums = jersey_num.filter(nums => nums < 5);
const bigNums = jersey_num.filter(nums => nums > 5);


let bookshop = [
    {
        title:  "Harry Potter and the Sorcerer's Stone",
        author: ["J.K Rowling"],
        rating: 4.9,
        genres: ["fiction", "fantays"]           
    },
    {
        title:  "Dune",
        author: ["Frank Herbert"],
        rating: 4.6,
        genres: ["fiction", "fantays"]            
    },
    {
        title:  "A Game of Thrones",
        author: ["George R.R Martin"],
        rating: 4.75,  
        genres: ["fiction", "fantays"]           
    },
    {
        title:  "Python Crash Course",
        author: ["Eric Matthews"],
        rating: 4.0,  
        genres: ["Education", "manual"]          
    },
    {
        title:  "The Subtle Art Of Not Giving A Fuck",
        author: ["Eric Matthews"],
        rating: 3.8,  
        genres: ["Education", "self help"]          
    },
    {
        title:  "How to Make Money in Stocks",
        author: ["O'Neil"],
        rating: 3.5,  
        genres: ["Education", "investing"]          
    }
];

//filter all the books with a >4 rating.
let topRatedBooks = bookshop.filter(trbook => trbook.rating > 4);

//filter for all the fantays books
let fantaysBooks = bookshop.filter(fbooks => fbooks.genres.includes("fantays"))

//multiple filter parameters
let helpfulBooks = bookshop.filter(shBook => (
    shBook.genres.includes("Education") ||
    shBook.genres.includes("self help")
))

//mimic a search box
const query = ""; //User input needed here
const results = bookshop.filter(book => (
    book.title.toLowerCase().includes(query.toLowerCase())
))