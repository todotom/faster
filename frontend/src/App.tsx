import React from 'react';
import LoginWrapper from './containers/LoginWrapper';
import styled from 'styled-components';

const StyledApp = styled.div`
  width: 100vh;
  height: 100vh;
  color: white;
  background-color: #2d2b4b;

  * {
    background-color: #2d2b4b;
    color: white;
  }
`;

function App() {
  return (
    <StyledApp id="root" className="root">
      <LoginWrapper />
    </StyledApp>
  );
}

export default App;
