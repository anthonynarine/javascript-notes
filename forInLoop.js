//For in loop iterate over objects. 
// FOR IN LOOP SYNTAX AND EXAMPLE

const topScorers = {
    "Kareem"   : 38387,
    "LeBron"   : 37254,
    "Malone"   : 36928,
    "Kobe"     : 33643,
    "Jordan"   : 32292
}
 for (let player in topScorers){
    console.log(`${player} - Total Regular Season Total Points = ${topScorers[player]}`);
    // console.log(topScorers[player]) REFRACTORED ABOVE
}

//sum the scores and get an average

//1. create variable to store the total
let sum = 0;
for (let player in topScorers){
//2. add player score to total
   sum += topScorers[player];
}

console.log(`Top 5 Scorers of All Time Total - points ${total}`);




