import React, { useState } from 'react';
import styled from 'styled-components';
import Token from './Token';
import { WhiteButton } from './Button'

const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  grid-gap: 30px 50px;
  margin: 2em 0;
  position: relative;
  & div:nth-of-type(3) {
    grid-column: span 2;
  }
  .line {
    display: ${({ playing }) => !playing ? 'block' : 'none'};
    height: 15px;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 60px;
    right: 60px;
    top: 60px;
    &:before {
      content: '';
      height: 15px;
      background: rgba(0, 0, 0, 0.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(60deg);
      transform-origin: left top;
    }
    &:after {
      content: '';
      height: 15px;
      background: rgba(0, 0, 0, 0.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(-60deg);
      transform-origin: right top;
    }
  }
  .in-game {
    text-align: center;
    text-transform: uppercase;
    font-size: .8em;
    font-weight: 700;
    letter-spacing: 2px;
  }
  .results {
    text-align: center;
  }
`;

const elements = [
  'paper',
  'scissors',
  'rock',
];

function Table() {
  // const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [pick, setPick] = useState('');
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * ( max - min) + min);
  }
  function onClick(name) {
    setPlaying(true);
    setPick(name);
    const housePick = elements[getRandomInt(0, 3)];
    console.log('la casa eligió ', housePick);
    const results = playWithIA(name, housePick);
    console.log('results =>', results);
  }
  function playWithIA(pick, housePick) {
    console.log('comparando', pick, housePick);
    if(housePick === pick) {
      return 'draw';
    }
    // paper
    if(pick === 'paper') {
      if(housePick === 'scissors') {
        return 'lose'
      }
      if(housePick === 'rock') {
        return 'win'
      }
    }
    // scissors
    if(pick === 'scissors') {
      if(housePick === 'paper') {
        return 'win';
      }
      if(housePick === 'rock') {
        return 'lose'
      }
    }
    // rock
    if(pick === 'rock') {
      if(housePick === 'paper') {
        return 'lose';
      }
      if(housePick === 'scissors') {
        return 'win'
      }
    }

  }
  function handleTryAgainClick() {
    setPlaying(false);
  }
  return (
    <TableWrapper playing={playing}>
      <span className="line"></span>
      {
        !playing ? (
          <>
            <Token name="paper" onClick={onClick} />
            <Token name="scissors" onClick={onClick} />
            <Token name="rock" onClick={onClick} />
          </>
        ) : (
          <>
            <div className="in-game">
              <Token name={pick} />
              <p>You picked</p>
            </div>
            <div className="in-game">
              <Token />
              <p>The house picked</p>
            </div>
            <div className="results">
              <h2>YOU ???</h2>
              <WhiteButton onClick={handleTryAgainClick}>
                Try Again
              </WhiteButton>
            </div>
          </>
        )
      }
    </TableWrapper>
  );
}

export default Table;