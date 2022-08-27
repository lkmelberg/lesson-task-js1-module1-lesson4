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
