/* eslint-disable */
import { nanoid } from 'nanoid';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newDie() {
  return {
    value: getRandomInt(1, 6),
    isHeld: false,
    id: nanoid(),
  };
}

function newDiceArray() {
  const array = [];

  for (let i = 0; i < 10; i++) {
    array.push(newDie());
  }

  return array;
}

export { newDiceArray, newDie };
