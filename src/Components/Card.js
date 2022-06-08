import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  box-shadow: rgba(0, 0, 0, 0.6) 0px 3px 8px;
  border-radius: 5px;
  background: white;
  display: grid;
  grid-template-rows: 70% auto;
  height: 14rem;
  width: 10rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  overflow: hidden;
  font-weight: 600;

  &:hover {
    transform: scale(1.1);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Card = (props) => {
  return (
    <Div onClick={() => props.onClick(props.id)}>
      <div>
        <Img src={props.imgPath} />
      </div>
      <div>
        <p>{props.name}</p>
      </div>
    </Div>
  );
};

export default Card;
