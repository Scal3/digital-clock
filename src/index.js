import { getPartsOfData } from '../utils.js';
import { DELAY } from '../constants.js';

const setTime = () => {
  const timeSelector = document.querySelector('.content__time');
  const { dayName, hours, minutes } = getPartsOfData();
  timeSelector.textContent = `${dayName} ${hours}:${minutes}`;
}

setTime();
setInterval(setTime, DELAY);