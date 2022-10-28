function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(function () {
    return Math.floor(Math.random() * 6) + 1;
  });
}

function getDicePlaceHolderHtml(diceCount) {
  return new Array(diceCount)
    .fill(0)
    .map(function () {
      return `<div class="placeholder-dice"></div>`;
    })
    .join("");
}

const getPercentage = (remainingHealth, maximumHealth) =>
  (100 * remainingHealth) / maximumHealth;

export { getDiceRollArray, getDicePlaceHolderHtml, getPercentage };
