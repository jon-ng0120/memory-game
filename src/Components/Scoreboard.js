import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.2rem;
  font-weight: 800;
  color: #dbdbdb;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }

  & div {
    text-align: center;
  }
`;

const Scoreboard = (props) => {
  return (
    <Div>
      <div>
        <p>Current Score</p>
        <p>{props.currentScore}</p>
      </div>
      <div>
        <p>Best Score</p>
        <p>{props.bestScore}</p>
      </div>
    </Div>
  );
};

export default Scoreboard;
