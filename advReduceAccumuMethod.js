
//Grouping all books in individual arrays based on ratings
//using reduce

let bookshop2 = [
    {
        title:  "A Truly Terrible Book",
        author: ["Anthony, Narine"],
        rating: 2.9,
        genres: ["fiction", "garbage"]           
    },
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

const groupedByRatings = bookshop2.reduce((groupedBooks, book) => {
    const rating = Math.floor(book.rating); 
    if (!groupedBooks[rating]) groupedBooks[rating] = [];
    groupedBooks[rating].push(book)
    return groupedBooks;
}, {})

                    // FUNCTION LOGIC \\
// 1. if there is currently no books with whichever rating we're currntly 
//working with then set groupedBooks of that rating to a empyt array.
//since our first book has a rating of 2.9 (floored to 2) an array will be 
// created to hold all books with a rating of 2 in the bookshop2 array :\

// 2. we then push in the entire book into that empty array. 
// 3. finally retrun the grouped books

// we have an empty object at the beginning. We encounter the first book,
// which has a rating. we get that rating and chop the decimal
// now rating is 2. We now check is if there is a rating of 2
// in groupedBooks if there not its an empty object so we set it 
// equal to an empty Array. this will occur for each rating whole num. 
// then we say groupedBooks of 2.push into that Array. and the process 
// runs for each book in the bookshop2 Array. PHEW!





