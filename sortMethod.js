//// ARRAY METHOD SORT \\\

const prices = [400.00, 3000, 99.99, 35.99, 12.00, 9500];

// prices.sort(prices);
//the default sort in javascript is to convert all numbers
//into string and sort them as string :|

//to CUSTOMIZE .sort(compareFunc(a,b))    // pass in the comparefunc.
    // If compareFunc(a,b) returns less than (<) 0
        // Sort a before b
    // If compareFunc(a,b) returns 0
        // Leave a and b unchanged
    // If compareFunc(a,b) returns greater than (>)
        // Sort b before a

//     //// COMPARE FUNCTION SYNTAX \\\
// const ascendingSort = prices.sort((a, b) => a - b);
//   /// SORT FROM SMALLEST TO LARGEST \\
// const decendingSort = prices.sort((a, b) => b - a);
// /// SORT FROM LARGEST TO SMALLEST....\\

/// SORT is one of the few array methods that \\\\
///       mutates the origina array            \\\\ 

let bookshop1 = [
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

/// WRITE A SORT IN ACENDING ORDER OF THE MOVIE RATINGS \\\
//a and b will be objects they are referring to one element in the array
//use DOT notation to compare rating
const decendingRating = bookshop1.sort((a, b) => a.rating - b.rating);

const acendingRating = bookshop1.sort((a, b) => b.rating - a.rating);