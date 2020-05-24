import React from 'react';
import './App.css';
import Header from './header';
import styled from 'styled-components';
import Wrapper from './Wrapper'
import Table from './Table';
import Rules from './Rules'

const AppStyled = styled.main`
  color: white;
  background-image: radial-gradient(circle at top, #1F3757 0%, #131537 100%);
  font-family: 'Barlow Semi Condensed', sans-serif;
  .app-content {
    padding: 2em;
    box-sizing: border-box;  
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

function App() {
  return (
    <AppStyled>
      <Wrapper>
        <div className="app-content">
          <Header/>
          <Table />
          <Rules />
        </div>
      </Wrapper>
    </AppStyled>
  );
}

export default App;
