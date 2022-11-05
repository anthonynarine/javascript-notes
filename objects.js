// Objects
// objects are containers for information made up of key value pairs
//think python dictionary
//rather accessing data using an index, we use custom keys.
//creating a an object

const fitBitData = {
    totalSteps: 333030,
    totalMiles: 200.10,
    avgCalorieBurn: 5700,
    workoutsThisWeek: "5 of 7",
    avgGoodSleep: "2:15"
};

//Valid keys are all turned into strings

//to access data in an object we use dot notation
//access total miles
fitBitData.totalMiles
//access total steps.
fitBitData.totalSteps
//square brackets can allso be used
//this method is used when you need to be dynamic
const pallett = {
    red: "eb4d4b",
    yellow: "#9ca24",
    blue: "#30336b"
}
pallett.blue
pallett["blue"]
//bot will return #30336b
//Square brackets are mainly used to acces values from a 
//key that is a variable or some dynamic value
let mysteryColor = "black";
pallett[mysteryColor]

//updating values
const userReview = {};

userReview["queenBee49"] = 4.0;  // suqre brackets can be used 
userReview.mrSmith78 = 3.5; 
userReview.mrSmith78 += 1;

//array object equality
const user = {
    userName      : "CherryGarcia8",
    email         : "garcia@gmail.com",
    notifications : []
};
if(user.notifications == [])
//this will not work even though notification is an empty array 
//the both have different addresses in memory
//to check if notifications is empty
if(user.notifications.length === 0) {     
    console.log("NO NEW NOTIFICATION")
}

