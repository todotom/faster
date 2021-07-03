import styled from "styled-components";
import LabeledInput, { InputType } from "../LabeledInput";


const Container = styled.div`
    width: fit-content;
    margin: 1em;
    padding: 1em;
    display: grid;
    grid-gap: 1em;
    border: 0.1em solid white;

    -webkit-box-shadow: .5rem .5rem 0 .2rem #ffffff33; 
    box-shadow: .5rem .5rem 0 .2rem #ffffff33;
`;


const Title = styled.h2`

`;


export default function LoginWrapper() {
    return (
        <Container>
            <Title>Sign in</Title>
            <LabeledInput inputType={InputType.USERNAME}/>
            <LabeledInput inputType={InputType.PASSWORD}/>
            <LabeledInput inputType={InputType.EMAIL}/>
        </Container>
    ) 
}