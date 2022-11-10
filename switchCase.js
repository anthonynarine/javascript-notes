                    /// SWITCH CASE  \\\

//// Switch is great to test one thing agains multiple values\\\\
          ///instead of writing multiple if statements\\\ 


let day = 2;

switch (day) {
    case 1:
        console.log("MONDAY")
        break;
    case 2:
        console.log("TUESDAY")
        break;
    case 3:
        console.log("WEDNESDAY")
        break;    
    case 4:
        console.log("THURSDAY")
        break;
    case 5:
        console.log("FRIDAY")
        break;
    case 6:
        console.log("SATURDAY")
        break;
    case 7:
        console.log("SUNDAY")
        break;
    default:
        console.log("INVALID DAY") // equivalent to else
}
//NOTE A BREAK MUST ME ADDED AFTER EACH CASE OR THE CODE WILL RUN F
//IN A SLICE PATTERN EX IF DAY = 5  THE CASE FOR FRI, SAT & SUN WILL RUN. 

let emoji = "peach"
switch (emoji) {
    case "sad face":
    case "happy fave":
        console.log("yellow")
        break;
    case "peach":
        console.log("orange")
        break;
    case "heart":
    case "lips":
        console.log("red")
        break;
}
