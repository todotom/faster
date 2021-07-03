import styled from "styled-components";
import LabeledInput, { InputType } from "../components/LabeledInput/LabeledInput";


const StyledDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    
`;


export default function LoginWrapper() {
    return (
        <StyledDiv>
           <LabeledInput inputType={InputType.USERNAME}/>
           <LabeledInput inputType={InputType.PASSWORD} upperGap={2}/>
           <LabeledInput inputType={InputType.EMAIL} upperGap={2}/>
        </StyledDiv>
    ) 
}