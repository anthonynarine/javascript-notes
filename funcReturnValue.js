//the RETURN IN STATEMENTS ENDS FUNCTION EXECUTION

// function isDaughter(daughter) {
//     if (daughter.toLowerCase() === "julia"){
//         return true;
//     }
//     return false; //return used in place of else
// }

//REFACTOR isDaughter()
//if we are only returning a boolean (yes or no situation)
function isDaughter(daughter) {
    return daughter.toLowerCase() === "julia";
    }
// isDaughter(); function called in console

    
function containsCar(arr) {
    for (let car of arr){
        if (car === "RS5" || car === "S5"){
            return true;
        }
    }
    return false; 
}
// containsCar(); function called in console

// NOTE return statement moved out of for of loop to allow the
// loop to iterate over all elements in the arry before returning 
// a false value


//Write a isValidPassword function
//it accepts 2 args; password and username
//password must:
//  -be at least 8 chars
//  -cannot contain spaces 
//  -cannot contain the username6
// if all requirements are met, return true.
// otherwise: false
function isValidPassword(password, username){
    if (
        password.lenght < 8 ||
        password.indexOf(" ") !== -1 ||
        password.indexOf(username) !== -1
        ){
            return false;
        }
        return true;
}
//INDEXOF GIVE US -1 IF THAT CHARACTER IS NOT IN THERE
//SO IF -1 IS NOT IN THERE SOMETHING IS WRONG

// isValidPassword();  function called in console


///(((VARIATION IS TO TURN EACH CONDITION INTO A VARIABLE then use ||)))
function isValidPassword(password, username){
    const tooShort = password.lenght < 8;
    const hasSpace = password.indexOf(" ") !== -1;
    const toosimilar = password.indexOf(username) !== -1;
    if (!tooShort || hasSpace || toosimilar) return false;
    return true;       
}

//{{{{((((((((((MY PERSONAL FAVORITE AND MOST READABLE))))))))))}}}}
///(((((VARIATION IS TO TURN EACH CONDITION INTO A VARIABLE ! + &&)))))
function isValidPassword(password, username){
    const tooShort = password.lenght < 8;
    const hasSpace = password.indexOf(" ") !== -1;
    const toosimilar = password.indexOf(username) !== -1;
    if (!tooShort && !hasSpace && !toosimilar) return true;
    return false;       
}



//Write a function to find the average value in an array of numbers
// avg[0,50]  //25
//avg ([75,76,80,95,100]) //82.5

function avgnums(arr){
    let total = 0;
    //loop over each num
    for (let num of arr){
        //add them together
        total += num;
    }
    //divide by num of nums
    return total / arr.lenght;
}