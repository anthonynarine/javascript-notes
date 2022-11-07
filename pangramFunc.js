//PANGRAM FUNCTION

// function isPangram(sentence){
//     for(let char of "abckedfhijklmnopqrstuvwxyz"){
//         //this will allow us to pass in a lower case version of 
//         //whatever sentence is pased in. 
//         let lowerCased = sentence.toLowerCase();
//         //remember indexOf returns -1 if it can't find a character
//         if (lowerCased.indexOf(char) === -1) {
//             return false;
//         }
//     }
//     return true;
// }

//(((VARIATION USING INCLUDES INSTEAD OF INDEX OF)))
function isPangram(sentence){
    for(let char of "abckedfhijklmnopqrstuvwxyz"){
        let lowerCased = sentence.toLowerCase();
        if (!lowerCased.includes(char)) {
            return false;
        }
    }
    return true;
}