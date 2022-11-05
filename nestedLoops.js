// for (let i = 1; i <= 10; i++) {
//     console.log("OUTER LOOP, i")
//     for (let j = 10; j >= 0; j -=2) {
//         console.log ("   INNER loop", j)
//     }
// }
//the outer loop will go throught one cycle
//while the inner loop for go throgh every 
//cycle untile j is 0 or less. 

const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

let totlaScore = 0;
for(let i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i];
    for (let j = 0; j < row.length; j++) {
        totlaScore += row[j];
        console.log(totlaScore)
    }
}
//first loop (i) through each array in gameboard which will output each row.
//then loop over each row. row is assigned as a variable which will access i
//i will hold the value of the row index on each iteration.

//we use row.length and gamegaborad.lenght as to not 
//hard code the number of elements in the arrays since that can change

//to total all the numbers in each array gameboard contains
//set a variable lets say totalScore and set it to 0
//this is set before the loops.
//we then add it += each time the inner look iterates over the row elements




