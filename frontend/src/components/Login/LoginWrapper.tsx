import styled from 'styled-components';
import LabeledInput, { InputType } from '../LabeledInput/LabeledInput';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../../Home';



const Container = styled.div`
    width: fit-content;
    margin: 1em;
    padding: 1em;
    display: grid;
    grid-gap: 1em;
    border: 0.2em solid white;
    border-radius: .5em;
`;


const Title = styled.h2`
    margin: auto auto .5em;
    color: white;
`;

const Button = styled.a`
    color: white;
    background: goldenrod;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: .5em;
    margin: 0 auto;
    padding: .5em 2.5em;
    text-transform: uppercase;
    text-decoration: none;

`;

export default function LoginWrapper() {
    return (
        <Router>
            <Container>
                <Title>Sign in</Title>
                <LabeledInput inputType={InputType.USERNAME}/>
                <LabeledInput inputType={InputType.PASSWORD}/>
                <LabeledInput inputType={InputType.EMAIL}/>
                <Link to="/Home"><Button>Join</Button></Link>
            </Container>
            <Switch>
                <Route path="/Home">
                    <Home />
                </Route>
            </Switch>
        </Router>
    ) 
}