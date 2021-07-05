import LoginWrapper from './components/LabeledInput/Login/Login';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';


const Root = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(.25turn, #797979, #303030);

  * {
    background-color: linear-gradient(45deg, rgb(20, 20, 20), rgb(45, 45, 45), rgb(10, 10, 10));
  }

`;

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

