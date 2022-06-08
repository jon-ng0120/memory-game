import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  max-width: 50rem;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  justify-content: center;
`;

const GridContainer = (props) => {
  return <Div>{props.children}</Div>;
};

export default GridContainer;
