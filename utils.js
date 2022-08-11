import { DAY_NAMES } from './constants.js';

const addZeroToMinutes = (minutes) => {
  if(minutes <= 9) {
    return `0${minutes}`
  }

  return minutes;
}

const getPartsOfData = () => {
  const date = new Date();
  const dayName = DAY_NAMES[date.getDay()];
  const hours = date.getHours();
  const minutes = addZeroToMinutes(date.getMinutes());

  return {
    dayName, hours, minutes
  }
}

export {
  getPartsOfData
}