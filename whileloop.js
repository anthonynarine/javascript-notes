//While loops excell when you need to write a loop
//where you don't know exactly how many times it
//needs to run. ex while (stillAlive), (!gameOver), (liveLeft > 0)

const target = Math.floor(Math.random() * 10); //Js random # generator
let guess = Math.floor(Math.random() * 10);

while(guess !== target) {
    console.log (`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
}

console.log (`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!`);

//WHILE (SOME CONDITION) 
//  guess not = to target (target =  Math.floor(Math.random() * 10);)

//IN LOOP, UPDATE OR ATTEMPT TO MAKE THAT CONDITION FALSE
// guess = target ( Math.floor(Math.random() * 10);)


//using BREAK (SYNTAX) 

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
while (true) {
    if (target === guess) break;
    console.log (`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
}
console.log (`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!`);




