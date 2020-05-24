import React from 'react';
import './App.css';
import Header from './header';
import styled from 'styled-components';
import Wrapper from './Wrapper'

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, #1F3757 0%, #131537 100%);
  min-height: 100vh;
  padding: 2em;
  font-family: 'Barlow Semi Condensed', sans-serif;  
  body {
    font-family: 'Barlow Semi Condensed', sans-serif;  
  }
`;

function App() {
  return (
    <AppStyled>
      <Wrapper>
        <Header/>
      </Wrapper>
    </AppStyled>
  );
}

export default App;
