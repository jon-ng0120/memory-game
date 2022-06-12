import React, { useState, useEffect } from 'react';
import { fetchCharacters, randomizeCharacters } from '../utils';
import GridContainer from '../UI/GridContainer';
import Header from '../UI/Header';
import Card from './Card';
import Overlay from './Overlay';

const Gameboard = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameover, setGameover] = useState(false);

  const clickHandler = async (id) => {
    addSelectedcharacter(id);
    if (selectCharacterHandler(id)) {
      setGameover(true);
    } else {
      setCurrentScore((prevScore) => prevScore + 1);
    }
    const randomCharList = randomizeCharacters(characters);
    setCharacters(randomCharList);
  };

  const selectCharacterHandler = (id) => {
    const checkIfCharSelected = selectedCharacters.some((charId) => {
      return charId === id;
    });
    return checkIfCharSelected;
  };

  const addSelectedcharacter = (id) => {
    setSelectedCharacters((prevList) => [...prevList, id]);
  };

  const playAgainHandler = () => {
    setCurrentScore(0);
    setSelectedCharacters([]);
    setGameover(false);
  };

  useEffect(() => {
    const getCharacters = async () => {
      const fetchedCharacters = await fetchCharacters();
      const randomizedCharacters = randomizeCharacters(fetchedCharacters);
      setCharacters((prevList) => [...prevList, ...randomizedCharacters]);
    };
    getCharacters();
  }, []);

  useEffect(() => {
    currentScore > bestScore && setBestScore(currentScore);
  }, [currentScore]);

  return (
    <React.Fragment>
      {gameover && (
        <Overlay
          currentScore={currentScore}
          bestScore={bestScore}
          playAgain={playAgainHandler}
        />
      )}
      {!gameover && (
        <React.Fragment>
          <Header currentScore={currentScore} bestScore={bestScore} />
          <GridContainer>
            {characters &&
              characters.map((character) => {
                return (
                  <Card
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    imgPath={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    onClick={clickHandler}
                  />
                );
              })}
          </GridContainer>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Gameboard;
