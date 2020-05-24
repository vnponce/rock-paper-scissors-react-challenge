import React from 'react';
import styled from 'styled-components';

const ScoreStyled = styled.div`
  background: #fff;
  padding: 10px 0;
  text-align: center;
  border-radius: 8px;
  width: 80px;
  small {
    color: #2a45c2;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  p {
    color: #565468;
    font-size: 40px;
    margin: 0;
    font-weight: 700;
    letter-spacing: -2px;
    position: relative;
    left: -2.5px;
  }
`;

function Score() {
  return (
    <ScoreStyled>
      <small>Score</small>
      <p>12</p>
    </ScoreStyled>
  );
}

export default Score;