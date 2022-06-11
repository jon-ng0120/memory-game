import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background: rgb(55, 55, 55);
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #dbdbdb;
`;

const GameOver = styled.p`
  font-size: 5rem;
  font-weight: 800;
`;

const ScoresContainer = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const Btn = styled.button`
  margin-top: 2rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.1rem;
  color: #dbdbdb;
  border: none;
  transition: all 0.1s ease-in;

  &:hover {
    transform: scale(1.1);
    background: rgba(80, 80, 80);
  }
`;

const Overlay = (props) => {
  const playAgain = () => props.playAgain();

  return (
    <Div>
      <div>
        <GameOver>GAME OVER</GameOver>
        <ScoresContainer>
          <p>You scored {props.currentScore}</p>
          <p>Your best score is {props.bestScore}</p>
        </ScoresContainer>
        <div>
          <Btn type="button" onClick={playAgain}>
            Play Again
          </Btn>
        </div>
      </div>
    </Div>
  );
};

export default Overlay;
