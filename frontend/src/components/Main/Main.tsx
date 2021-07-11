import styled from 'styled-components';

const MainWrapper = styled.div`
    background: black;
    margin: 0 auto;

    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
    
    h1, p {
        margin-top: 0;
        color: white;
        text-align: center;
    }
    
    p {
        font-size: 1.2rem;
    }
    
    li {
        color: white;
    }
`;

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`;

export default function Main() {
    return(
        <MainWrapper>
            <Container>
                <h1>Hello world!</h1>
                <p>Hello world!</p>
                <p>Hello world!</p>
                <ol>
                    <li>Hello 1</li>
                    <li>Hello 2</li>
                    <li>Hello 3</li>
                    <li>Hello 4</li>
                    <li>Hello 5</li>
                    <li>Hello 6</li>
                    <li>Hello 7</li>
                    <li>Hello 8</li>
                </ol>
                <h1>Hello world!</h1>
                <p>Hello world!</p>
                <p>Hello world!</p>
                <ol>
                    <li>Hello 1</li>
                    <li>Hello 2</li>
                    <li>Hello 3</li>
                    <li>Hello 4</li>
                    <li>Hello 5</li>
                    <li>Hello 6</li>
                    <li>Hello 7</li>
                    <li>Hello 8</li>
                </ol>
                <h1>Hello world!</h1>
                <p>Hello world!</p>
                <p>Hello world!</p>
                <ol>
                    <li>Hello 1</li>
                    <li>Hello 2</li>
                    <li>Hello 3</li>
                    <li>Hello 4</li>
                    <li>Hello 5</li>
                    <li>Hello 6</li>
                    <li>Hello 7</li>
                    <li>Hello 8</li>
                </ol>
                <h1>Hello world!</h1>
                <p>Hello world!</p>
                <p>Hello world!</p>
                <ol>
                    <li>Hello 1</li>
                    <li>Hello 2</li>
                    <li>Hello 3</li>
                    <li>Hello 4</li>
                    <li>Hello 5</li>
                    <li>Hello 6</li>
                    <li>Hello 7</li>
                    <li>Hello 8</li>
                </ol>
            </Container>
        </MainWrapper>
    )
};
