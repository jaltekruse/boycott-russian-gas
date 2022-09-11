/**
 * Start of invasion. For this I used the time of Putin's announcement of a "special military
 * operation" at 06:00 Moscow time (03:00 UTC) on 2022-02-24.
 * Source: https://en.wikipedia.org/wiki/2022_Russian_invasion_of_Ukraine
 * (Number of milliseconds since start of epoch)
 **/
const startTime = new Date(Date.UTC(2022, 1, 24, 3)).getTime();

/** Number of milliseconds in year. */
const year = 1000 * 60 * 60 * 24 * 365.25;

/**
 * Source: https://www.politico.eu/article/europe-eu-oil-gas-trade-russia-budget-military-spending-ukraine-war-crisis/
 * This is a lower bound since it's from 2020 which was abnormally low.
 */
const eurosPerYear = 60.1e9;

const framesPerSecond = 10;

window.onload = () => {
  const amountSinceStartElement = document.getElementById("amount");
  const billionsPerYearElement = document.getElementById("billionsPerYear");

  billionsPerYearElement.innerText = (eurosPerYear / 1e9).toString();

  const updateTicker = () => {
    const currentTime = new Date().getTime();

    const timeSinceStart = currentTime - startTime;

    const eurosSinceStart = (eurosPerYear * timeSinceStart) / year;

    amountSinceStartElement.innerText =
      Math.floor(eurosSinceStart).toLocaleString();

    setTimeout(updateTicker, 1000 / framesPerSecond);
  };

  updateTicker();
};
