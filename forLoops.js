//for loops
//SYNTAX

//let run a loop ten total time
// 50 initial value
// 60 when to run the loop
// +1 how to change value each time
for (let i = 1; i <= 10; i++) {
    console.log("meme", i);
}
//let i = 1  is the initial value (start at 1)
// i <= 10 is the condition. (stop at 10)
// i++ increments i by one on each iteration (add 1 each time)
for (let i = 1; i <= 10; i += 3) {  // increment by 3
    console.log("meme", i);
}

for (let i = 1; i <= 20; i++) {
    console.log(`${i}x${i} = ${num * num}`, i);
}

for (let i = 200; i >= 0; i -= 25){  //backwards count
    console.log(i);
}
console.log("AFTER THE LOOP")