import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.2rem;
  font-weight: 800;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }

  & div {
    text-align: center;
  }
`;

const CurrentScore = styled.div`
  color: #dbdbdb;
`;

const BestScore = styled.div`
  color: #dbdbdb;
`;

const Scoreboard = (props) => {
  return (
    <Div>
      <CurrentScore>
        <p>Current Score</p>
        <p>{props.currentScore}</p>
      </CurrentScore>
      <BestScore>
        <p>Best Score</p>
        <p>{props.bestScore}</p>
      </BestScore>
    </Div>
  );
};

export default Scoreboard;
