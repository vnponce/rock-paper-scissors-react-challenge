import React from 'react';
import styled from 'styled-components';

const TokenStyled = styled.div`
  width: 130px;
  height: 125px;
  padding: ${({ name }) => (name === 'default') ? '16px' : '0'};
  border: 16px solid ${({color}) => color.base};
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  background: ${({ name }) => (name === 'default') ? '#122343' : 'white'};
  box-shadow: 0 5px 0 ${({color}) => color.border};
  cursor: pointer;
  position: relative;
  z-index: 2;
  ${({ isShadowAnimated }) => isShadowAnimated && 'box-shadow: 0 0 0 40px rgba(255, 255, 255, .03), 0 0 0 80px rgba(255, 255, 255, .02), 0 0 0 120px rgba(255, 255, 255, .01);'}
  &:active {
    transform: scale(.9);
  }
  .box {
    box-shadow: 0 -4px 0 #BABFD4;  
    flex: 1;
    align-self: stretch;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;  
  }
`;

const colors = {
  paper: {
    base: '#516ef4',
    border: '#2543c3',
  },
  rock: {
    base: '#de3a5a',
    border: '#980e31',
  },
  scissors: {
    base: '#eca81e',
    border: '#c76c14',
  },
  default: {
    base: 'transparent',
    border: 'transparent',
  },
};

function Token({ name = 'default', onClick, isShadowAnimated = false }) {
  function handleClick() {
    if(onClick) {
      onClick(name);
    }
  };
  const color = colors[name];
  return (
    <TokenStyled color={color} onClick={handleClick} name={name} isShadowAnimated={isShadowAnimated}>
      <div className="box">
        <img src={`/images/icon-${name}.svg`} alt=""/>
      </div>
    </TokenStyled>
  );
}

export default Token;