import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.div`
  display: inline-flex;
  border: 1px solid white;
  border-radius: .5em;
  min-width: 128px;
  padding: 0.7em;
  box-sizing: border-box;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2.5px;
`;

export const WhiteButton = styled(ButtonStyled)`
  background: #fff;
  color: black;
  min-width: 220px;
`;

function Button({ children, ...props }) {
  return (
    <ButtonStyled {...props}>
      {children}
    </ButtonStyled>
  );
}

export default Button;