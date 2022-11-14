///USING MAP TO WORK WITH OBJECTS\\\\
// <<<<<<<<<<<<<<<<< DATA SET <<<<<<<<<<<<<<<<<
let dishes = [
    {
      id: 1,
      name: "Pizza",
      cuisine: "Italian",
      servings: 8,
      ingredients: ["tomato", "cheese"],
    },
    {
      id: 2,
      name: "Spaghetti",
      cuisine: "Italian",
      servings: 2,
      ingredients: ["tomato", "cheese"],
    },
    {
      id: 3,
      name: "Ravioli",
      cuisine: "Italian",
      servings: 2,
      ingredients: ["tomato", "cheese"],
    },
    {
      id: 4,
      name: "Enchiladas",
      cuisine: "Mexican",
      servings: 6,
      ingredients: ["tomato", "cheese"],
    },
    {
      id: 5,
      name: "Tacos",
      cuisine: "Mexican",
      servings: 4,
      ingredients: ["tomato", "cheese"],
    },
    {
      id: 6,
      name: "Burrito Supreme",
      cuisine: "Mexican",
      servings: 1,
      ingredients: ["tomato", "cheese"],
    },
    {
      id: 7,
      name: "Elote",
      cuisine: "Mexican",
      servings: 4,
      ingredients: ["corn", "cheese"],
    },
    {
      id: 8,
      name: "Crepes",
      cuisine: "French",
      servings: 1,
      ingredients: ["flour", "sugar"],
    },
    {
      id: 9,
      name: "Corned Beef & Cabbage",
      cuisine: "Irish",
      servings: 10,
      ingredients: ["beef", "cabbage"],
    },
    {
      id: 10,
      name: "Beef Stew",
      cuisine: "Irish",
      servings: 8,
      ingredients: ["beef", "tomato"],
    },
    {
      id: 11,
      name: "Lasagna",
      cuisine: "Vegetarian",
      servings: 8,
      ingredients: ["tomato", "cheese"],
    },
    {
      id: 12,
      name: "Falafel",
      cuisine: "Vegetarian",
      servings: 1,
      ingredients: ["chickpea", "parsley"],
    },
    {
      id: 13,
      name: "Chili",
      cuisine: "Vegetarian",
      servings: 13,
      ingredients: ["tomato", "chickpea"],
    },
    {
      id: 14,
      name: "Goulash",
      cuisine: "Hungarian",
      servings: 15,
      ingredients: ["beef", "tomato"],
    },
  ];

  // <<<<<<<<<<<<<<<<< PROBLEMS <<<<<<<<<<<<<<<<<

//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter
const vegetarianDishes = dishes.filter(vegeDishe => vegeDishe.cuisine.includes("Vegetarian"));
console.log("Vegetarian Dishes: ", vegetarianDishes)

//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

const italianDishes = dishes.filter(italianFoods => (
  italianFoods.cuisine.includes("Italian") && italianFoods.servings > 5
))
console.log("Italian Dishes That Server more than 5", italianDishes);
//3. Create a function that will return only dishes whose serving id number matches their serving count.
//Filter
const idEqualServingCount = dishes.filter (dish =>{
  results = dish.id === dish.servings;
  return results;
})

//4. Create a function that will return only dishes whose serving count is even.
//Filter
const evenServings = dishes.filter(isEven => {
  results1 = isEven.servings % 2 === 0;
  return results1;
})


//5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
//Filter
const caprese = dishes.filter(tommatoAndCheese => {
 dishContains =  tommatoAndCheese.ingredients.includes("tomato") &&
tommatoAndCheese.ingredients.includes("cheese");
return dishContains;
})

//6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
//Map
const cuisineType = dishes.filter(type => type.cuisine)

// BONUS: (come back to this after finishing all)
//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array


//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map
const cuisineName = dishes.map((el) => {
    return `${el.cuisine} ${el.name}`
  })


  //8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter


// <<<<<<<<<<<<<<<<< BONUS <<<<<<<<<<<<<<<<<
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
