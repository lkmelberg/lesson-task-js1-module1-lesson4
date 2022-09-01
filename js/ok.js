function createGames(arry) {
  let html = "";

  for (let i = 0; i < arry.length; i++) {
    let hasRelease = "Unknown year";

    if (arry[i].released) {
      hasRelease = arry[i].released;
    }

    html += `<div class="game">
                    <h5>${arry[i].name}</h5>
                    <p>Released: ${hasRelease}</p>
                </div>`;
  }

  return html;
}

const newHTML = createGames(games);

const gameContainer = document.querySelector(".game-container");
gameContainer.innerHTML = newHTML;
