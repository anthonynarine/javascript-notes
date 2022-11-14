let driverArray = [
{   
    driverName:  "Anthony",
    engineClass:  444,
    favoriteTrack: "Belt Pkwy",
    colorPalette: "grey black"
},
{
    driverName: "Ravi",
    engineClass: 500,
    favoriteTrack: "Atlantic Ave",
    colorPalette: "white grey"
},
{
    driverName: "Dane",
    engineClass: 320,
    favoriteTrack: "Interstate 95",
    colorPalette: "grey black"
},
{
    driverName: "Aleem",
    engineClass: 500,
    favoriteTrack: "Floyd Benette",
    colorPalette: "wite red"
},
{
    driverName: "Nigel",
    engineClass: 250,
    favoriteTrack: "Sunset Park",
    colorPalette: "wite black"
},
{
    driverName: "Kenny",
    engineClass: 475,
    favoriteTrack: "Five Borough",
    colorPalette: "grey orange"
},
];

function searchByColorPalette(driverArray){
    let userInput = prompt("Please enter a color to search by: ");
    let foundDrivers = driverArray.filter((driver) =>{
        if(driver.colorPalette.include(userInput)){
            return true;
        }
    });
    return foundDrivers;
}
// console.log(searchByColorPalette(driverArray));

//the foundDrivers Array can now be used as part of a larger operation
// passed into a function or just left alone. 

// THE FUNCTION BELOW USING BRACKET NOTATION WILL GIVE US THE ABILITY 
//TO HAVE THE USER DEFINE A ANY KEY AND VALUE PAIR  MAKING THE FUNCTION
//ABOVE PRETTY MUCH OBSOLETE \\\
                 // POWER STUFF \\

//SEARCHING FOR USER DEFINED KEY'S A VALUES. 
// **THIS FUNCTION WILL NOT ACOUNT FOR INT ENTRIES B/C .INCLUDES IS 
//NOT CALLIBLE ON .Include()
//NOTE look at the usage of the brackett notation rather than dot

// function searchByUserDefinedProp(driverArray){
//     let userInputProp = prompt ("Enter key: ");
//     let userInputVal = prompt ("Enter value");
//     let foundDriversItems = driverArray.filter(function(item){
//         if(item[userInputProp].includes(userInputVal)){
//             return true;
//         }
//     });
//     return foundDriversItems;
// }

// console.log(searchByUserDefinedProp(driverArray))
//using bracket notation rather than dot notation will accomodate for any type of 
//array passed rather than specifically defining the key we are searching for. 

// **** searchByUserDefinedProp FUNCTION REFRACTORED TO HANDLE INTEGER ENTRIES

function searchByUserDefinedProp(driverArray){
    let userInputProp = prompt ("Enter key: ");
    let userInputVal = prompt ("Enter value");
    let foundDriversItems = driverArray.filter(function(item){
        try {
            if(item[userInputProp].includes(userInputVal)){
                return true;
            }            
        } catch (error) {
            console.log(error);           
        }
        finally{
            if(item[userInputProp] === parseInt(userInputVal)){
                return true;
            }
        }
    });
    return foundDriversItems;
}
// console.log(searchByUserDefinedProp(driverArray));

///becuase searchByUserDefinedProp function packages and ships an array we can call the map method right away

let driverInfo = searchByUserDefinedProp(driverArray).map((element) => {
    return `${element.driverName} likes to drive his/her ${element.engineClass}hp car around his/her favorite track ${element.favoriteTrack}`
})

console.log(driverInfo);
