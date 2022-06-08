import React from 'react';
import styled from 'styled-components';
import Scoreboard from '../Components/Scoreboard';
import logo from '../Images/marvel-logo.png';

const HeaderContainer = styled.div`
  width: 100%;
  background: #0a0a0a;
  padding: 0.5rem 0;
  position: fixed;
`;

const LogoContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  font-weight: 600; ;
`;

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 50rem;
  margin: auto;
  padding: 0 1rem;
`;

const Img = styled.img`
  width: 6rem;
`;

const Header = (props) => {
  return (
    <HeaderContainer>
      <HeaderDiv>
        <LogoContainer>
          <Img src={logo} />
          <p>Marvel Memory Game</p>
        </LogoContainer>
        <Scoreboard
          currentScore={props.currentScore}
          bestScore={props.bestScore}
        />
      </HeaderDiv>
    </HeaderContainer>
  );
};

export default Header;
