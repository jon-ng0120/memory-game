'use strict';

export const fetchCharacters = async () => {
  try {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/events/238/characters?limit=20&offset=${randomNumber(
        89
      )}&apikey=3c6966520290306ba1bfd532098d66a7`
    );
    const data = await response.json();
    const characters = await data.data.results;
    return characters;
  } catch (e) {
    console.log('Issue with retrieving data from Marvel API');
    console.log(e);
  }
};

export const randomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

export const randomizeCharacters = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
