/// Some method \\\

// Similar to every, but returns true if ANY of the array 
// elements pass the test function

const bBallPlayers = ["Lebron", "Jordan", "Kareem", "Magic", "Shaq", "Kobe"]
//Are there any players with names > 5 charcters long
const longName = bBallPlayers.some(player => {
    return player.length >5;
})

//check if some of the elements starts with M
const mStart = bBallPlayers.some(player => player[0] === "M");
