import React from 'react';
import styled from 'styled-components';
import Score from './score'

const HeaderStyled = styled.div`
  color: white;
  border: 3px solid rgba(255, 255, 255, 0.29);
  padding: 12px 12px 12px 23px;
  border-radius: .5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 18px;
    text-transform: uppercase;
    line-height: 16px;
    font-weight: 700;
    margin: 0;
  }
  @media screen and (min-width: 768px) {
    padding: 24px;
    h1 {
      font-size: 36px;
      line-height: .8;
    }
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <h1>
        Rock <br/>Paper <br/> Scissors
      </h1>
      <Score />
    </HeaderStyled>
  )
}

export default Header;