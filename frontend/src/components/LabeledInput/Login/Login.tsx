import styled from 'styled-components';
import LoginWrapper from './LoginWrapper';
import logo from './logo.svg';

const LogoImage = styled.img`
    width: 10vh;
`;

export default function Login() {
    return (
        <>
            <h1>Faster</h1>
            <LogoImage src={logo} alt="Faster's logo" />
            <LoginWrapper/>
        </>
    )
}