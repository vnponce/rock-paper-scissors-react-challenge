import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Token from './Token';
import { WhiteButton } from './Button'
import { ScoreContext } from "./App";

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
    width: 200px;
    top: 58px;
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
    h2 {
      text-transform: uppercase;
      font-size: 56px;
      margin: 10px;
    }
  }
  @media screen and (min-width: 1024px) {
    // grid-gap: 30px 140px;
    grid-template-columns: 300px 300px;
    ${({ playing, results }) => (playing && results) && 'grid-template-columns: 300px 110px 110px 300px;'}
    & div:nth-of-type(3) {
      ${({ playing, results }) => (playing && results) && 'grid-column: 2 / 4; grid-row: 1;'}
    }
    .line {
      width: 300px;
    }
    .results {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .in-game {
      font-size: 1.2em;
      display: flex;
      flex-direction: column-reverse;
      p {
        margin-bottom: 2em;
      }
    }
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
  const [result, setResult] = useState('');
  const [housePick, setHousePick] = useState('default');
  const { score, setScore } = useContext(ScoreContext);
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * ( max - min) + min);
  }
  function launchHousePick() {
    return new Promise((resolve, reject) => {
      let pick;
      const interval = setInterval(() => {
        pick = elements[getRandomInt(0, 3)];
        setHousePick(pick);
      }, 75);
      setTimeout(() => {
        clearInterval(interval);
        resolve(pick);
      }, 2000);
    });
    // return elements[getRandomInt(0, 3)];
  }
  async function onClick(name) {
    setResult('');
    setPlaying(true);
    setPick(name);
    const house = await launchHousePick();
    const results = playWithIA(name, house);
    setResult(results);
    if(results === 'win') {
      setScore(score + 1);
    }
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
    <TableWrapper playing={playing} results={result !== ''}>
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
              <Token name={pick} playing={playing} isShadowAnimated={result === 'win'}/>
              <p>You picked</p>
            </div>
            <div className="in-game">
              <Token name={housePick} playing={playing} isShadowAnimated={result === 'lose'}/>
              <p>The house picked</p>
            </div>
              <div className="results">
                { result &&
                  <>
                    <h2>YOU {result}</h2>
                    <WhiteButton onClick={handleTryAgainClick}>
                      Try Again
                    </WhiteButton>
                  </>
                }
              </div>
          </>
        )
      }
    </TableWrapper>
  );
}

export default Table;