import styled from 'styled-components';
import LoginWrapper from './components/Login/LoginWrapper';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
// import Main from './components/Main/Main';
// import Navbar from './components/Navbar/Navbar';

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
      <BrowserRouter>
          <Navbar/>
          <Root>
            <Switch>
              <Route path='/login'>
                <LoginWrapper/>
              </Route>
              <Route path='/'>
                <Home/>
              </Route>
            </Switch>
          </Root>
      </BrowserRouter>
    </>
  );
}

