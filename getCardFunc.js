//Write a get card function which returns a random playing card object

function getCard(){
    //1.create an array to hold each card value
    const values = [
       " 2", 
        "3",
        "4", 
        "5", 
        "6", 
        "7", 
        "8", 
        "9", 
        "10",
        "J",
        "Q",
        "K",
        "A"
    ]
    //2. generate a random number that corresponds to an index
    const valueIndex = Math.floor(Math.random() * values.length);
    //3. create a variable that stores the value of the correspondign index value
    const value = values[valueIndex];
    //4. we do the same for the suits
    const suits = [ "clubs", "spades", "hearts", "diamonds"];
    const suitIndex = Math.floor(Math.random() * suits.length);
    const suit = suits[suitIndex];
    return {value: value, suit: suit};
}

//multiplying by the lenght of values will give up 13.9999..at most
//remember Math.random() give a decimant between 0-.99
//Math.floor()rounds up the the .99 to one then * by values lenght(13)
//we then store that value in a variable