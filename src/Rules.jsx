import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button'

const RulesStyled = styled.div`
  text-align: center;
  &::before {
    display: ${({ visible }) => visible ? 'block' : 'none'};
    content: '';
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .rules-modal {
    padding: 4em 0;
    background: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    h2 {
      color: #3b4262;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: -2px;
      margin-bottom: 1em;
    }
  }
  .close-button {
    margin-top: 2em;
    cursor:pointer;
  }
  @media screen and (min-width: 768px) {
    .button {
      position: fixed;
      right: 2em;
      bottom: 2em;
    }
    .rules-modal {
      width: 400px;
      margin: auto;
      border-radius: 8px;
      top: 0;
      bottom: initial;
      transform: translateY(50%);
      padding: 2em;
      box-sizing: border-box;
      h2 {
        align-self: flex-start;
        font-size: 32px;
        margin: 0 0 1.2em 0;
      }
    }
    .close-button {
      position: absolute;
      right: 2em;
      top: .8em;
    }
  }
`;

function Rules() {
  const [visible, setVisible] = useState(false);
  function handleToggleClick() {
    setVisible(!visible);
  }
  return (
    <RulesStyled visible={visible}>
      {
        visible && (
          <div className="rules-modal">
            <h2>Rules</h2>
            <img src="/images/image-rules.svg" alt="Game rules"/>
            <img className="close-button" onClick={handleToggleClick} src="/images/icon-close.svg" alt="Close game rules"/>
          </div>
        )
      }
      <Button onClick={handleToggleClick} className="button">
        Rules
      </Button>
    </RulesStyled>
  );
}

export default Rules;