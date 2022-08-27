// Question 1
// Create a function called printSeason that accepts one argument (has one parameter) called season.
// Inside the function log the value of the argument.
// Call the function and pass in the value "summer` as the argument.

function printSeason(season) {
  console.log(season);
}
printSeason("summer");

// Question 2
// Create a function called printNumbers that has two parameters, firstNumber and secondNumber.
// Inside the function log each value that is passed in.
// Call the function and pass in two numbers as the arguments.

function printNumbers(firstNumber, secondNumber) {
  console.log(firstNumber, secondNumber);
}
printNumbers(1, 3);

// Question 3
// Create a function called addNumbers that has three parameters.
// Inside the function add all the paramters and return the result.
// Assign the result to a variable and assign the variable to the innerHTML property of the DOM element with the class of total.

function addNumbers(num1, num2, num3) {
  const added = num1 + num2 + num3;
  return added;
}

const addedTotal = addNumbers(4, 5, 10);

const total = document.querySelector(".total");

total.innerHTML = addedTotal;

// Question 4
// Create a function called createGreeting that has one parameter.
// Inside the function add the value passed in to the string "Hello, my name is " and return the new string.
// Assign the returned value to the innerHTML property of the DOM element with the id of name.

function createGreeting(param) {
  const name = "Hello, my name is " + param;
  return name;
}

const nameString = createGreeting("Gregg");

const nameDiv = document.querySelector("#name");

nameDiv.innerHTML = nameString;

// Question 5
// Create a function called printListItems that has one parameter.
// Inside the function loop through the value passed in and log each item.
// Call the function and pass the sports array in script.js in as the argument.

const sports = ["golf", "football", "cricket"];

function printListItems(list) {
  for (i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}
printListItems(sports);

// Question 6
// Create a function called createGames that has one parameter.
// Inside the function loop through the value passed in, create HTML for each property in each object and return the HTML.
// Provide a default value for the released property if it is missing.
// Assign the return value of the function to the innerHTML property of the DOM element with the class of game-container.

const games = [
  {
    name: "Starcraft 2",
    released: "2010",
  },
  {
    name: "Age of Empires II",
  },
  {
    name: "Cyberpunk 2077",
    released: 2020,
  },
];

function createGames(arry) {
  let html = "";

  for (i = 0; i < arry.length; i++) {
    let hasRelease = "Unknown";

    if (arry[i].released) {
      hasRelease = arry[i].released;
    }

    html += `<div class="game"> 
                    <h2>Name: ${arry[i].name}</h2> 
                    <p>Released: ${hasRelease}<p> 
                 </div>`;
  }
  return html;
}

const createdGames = createGames(games);

const container = document.querySelector(".game-container");
container.innerHTML = createdGames;

// jsbsbv

// function createGames(gamesList) {
//   let html = "";

//   for (let i = 0; i < gamesList.length; i++) {
//     let releaseYear = "Unknown year";

//     if (gamesList[i].released) {
//       releaseYear = gamesList[i].released;
//     }

//     html += `<div class="game">
//                     <h5>${gamesList[i].name}</h5>
//                     <p>Released: ${releaseYear}</p>
//                 </div>`;
//   }

//   return html;
// }

// const newHTML = createGames(games);

// const gameContainer = document.querySelector(".game-container");
// gameContainer.innerHTML = newHTML;
