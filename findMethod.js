/// Find Function \\\

//returns the value of the FIRST ELEMENT in the array that satisfies the provided testing functin\\

let movies = [
    "Pulp Fiction",
    "The Hatefull 8 ",
    "Django",
    "Unbreakable",
    "The Phantom Menace"   
]

let movie = movies.find(movie => {
    return movie.toLowerCase().includes("the");
})
//find() will only return The FIRST value that evaluates to TRUE and return that value while looping through the array. In this e.g only The Hatefull 8 will be returned. 

//finding the first movie that starts with "The" not just including the. (use implicit return)
let movie2 = movies.find(movie => (
    movie.toLowerCase().indexOf("django") === 0
))



let graphicNovels = [
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
    },
    {
        title:  "Fantastic Beast",
        author: ["J.K Rowling"],
        rating: 4.5            
    }
];

// Find a book with a rating of > 4s
let goodNovel = graphicNovels.find(novel => novel.rating > 4)
// we will get the fist match ONLY (NOTE all books are rated over 4.0)

//Find the the author of a book
let rowlingBook = graphicNovels.find(novel => (
    novel.author.includes("J.K Rowling")
))
//note that the first time her name appears in the array will equate to true and return that element only. 