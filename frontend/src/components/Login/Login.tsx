import styled from "styled-components";
import LoginWrapper from "./LoginWrapper";
import logo from "./logo.svg";

const LogoImage = styled.img`
    width: 8vh;
    margin: 0 auto 1em;
`;

const StyledName = styled.h1`
    margin: 0 auto;
    font-size: 4rem;
    color: white;
`;

export default function Login() {
    return (
        <>
            <StyledName>Faster</StyledName>
            <LogoImage src={logo} alt="Faster's logo" />
            <LoginWrapper/>
        </>
    )
}