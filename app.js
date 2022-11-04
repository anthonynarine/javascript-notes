
// if, else if, else
let rating = 1;

if (rating === 3){
    console.log ("you are a superstar")
}

else if (rating === 2){
    console.log("meets expectations");
}
else if (rating === 1){
    console.log("needs impovements");
}


// if else

let hightScore = 1400;
let userScore = 1300;

if (userScore >= hightScore) {
    console.log(`Congrats, you have the new hight score of ${userScore}`);
    hightScore = userScore;

}
else {
    console.log(`Good game. Your score of ${userScore} did not beat the high score of ${hightScore}`)
}


//nested if statements

let password = "kitty"

if (password.length >= 6){
    if (password.indexOf(" ") === -1){
        console.log("Valid Password");
    }
    else{
        console.log("Password is long enought, but cannot contain spaces");
    }
}
else{
    console.log ("Password must be longer");
}

//truthy and falsy values
//almost all values in javascrip are truthy 
//except 
// 0
// " " (empty sring)
//null
//undefined
//NaN

let loggedInUser = null  // this will evaluate to false

if (loggedInUser){
    console.log("YOUR ARE SIGNED IN");
}
else{
    console.log("PLEASE LOG IN");
}

// AND &&
// using && we can refractor the abve nexted if statement

let pWord = "taco tudeday";
if (pWord.length >= 8 && pWord.indexOf(" ") === -1) {
    console.log("VALID PASSWORD");
}
else{
    console.log("INVALID PASSWORD");

}

