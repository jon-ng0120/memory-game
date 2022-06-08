import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  // justify-content: center;
  // box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
  //   rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
  //   rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  gap: 2rem;
  // // margin: 2rem auto;
  // // width: 20rem;
  // background: #ebebeb;
  // padding: 1rem;
  // line-height: 1.5;
  font-size: 1.2rem;
  font-weight: 800;

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
