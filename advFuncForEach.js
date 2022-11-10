/// forEach() \\\

// accepts a callback function. 
// calls the function once per element 
// in the array

const numbers = [20, 21, 22, 23, 24, 25];

numbers.forEach(function(num){
    console.log(num * 2)
})


function printTriple(n){
    console.log(n * 3);
}

numbers.forEach(printTriple)
//here we're telling for is here i want you to call for each element\\

// internally it would call print triple with:
// 20 then 21 and then 22 until it hits the end 
// the Array. it then executes the print tripple's 
// logic

/// ** A SECOND PERIMETER CAN BE ADDED WE WE WANT TO USE THE  INDEX. INDEX IS OPTIONAL  \\\

numbers.forEach(function (num, index){
    console.log(`${num} is index ${index}`);
})

let books = [
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
// Call the title of each book using forEach
books.forEach(function(book) {
    console.log(book.title.toUpperCase());
})

//a for of loop will do the ecact same thing\\
for (let book of books) {
    console.log(book.author[0].toLocaleLowerCase());
}

//a traditional for loop can also do the same thing\\
for (let i = 0; i < books.length; i++){
    console.log(books[i].rating);
}