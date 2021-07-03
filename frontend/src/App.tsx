import Login from './components/LabeledInput/Login/Login';
import styled from 'styled-components';

const Root = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: white;
  background-color: #1a182b;

  * {
    background-color: #1a182b;
    color: white;
  }

`;

export default function App() {
  return (
    <Root>
      <Login />
    </Root>
  );
}

