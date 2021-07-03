import styled from 'styled-components'


export enum InputType {
    USERNAME,
    PASSWORD,
    EMAIL
}


type Props = {
    inputType: InputType;
    upperGap?: number;
}


export default function LabeledInput(props : Props) {
    const StyledInput = styled.input`
        //
        margin-left: 1em;
        margin-top: ${props.upperGap ? props.upperGap : 0}em;
        padding: 0.5em;
        width: 10em;
        border-radius: 0.5em;
        border: 10px solid ${getColor(props.inputType)}
    `;

    const StyledLabel = styled.label`
        display: block;
    `;

    return (
        <StyledLabel>
            Username:            
            <StyledInput 
                type={getType(props.inputType)} 
                id={getId(props.inputType)}
                name={getName(props.inputType)}
                className={getId(props.inputType)}
            />
        </StyledLabel>
    );
}


const getType = (inputType : InputType) => {
    let type : string;

    switch(inputType) {
        case InputType.EMAIL:
            type = "email";
            break;
        case InputType.USERNAME:
            type = "text";
            break;
        case InputType.PASSWORD:
            type = "password";
            break;
    }

    return type;
}

const getId = (inputType : InputType) => {
    let id : string;

    switch(inputType) {
        case InputType.EMAIL:
            id = "email-input";
            break;
        case InputType.USERNAME:
            id = "username-input";
            break;
        case InputType.PASSWORD:
            id = "password-input";
            break;
    }

    return id;
}

const getName = (inputType : InputType) => {
    let inputName : string;

    switch(inputType) {
        case InputType.EMAIL:
            inputName = "email-input";
            break;
        case InputType.USERNAME:
            inputName = "username-input";
            break;
        case InputType.PASSWORD:
            inputName = "password-input";
            break;
    }

    return inputName;
}

const getColor = (inputType : InputType) => {
    let color : string;

    switch(inputType) {
        case InputType.EMAIL:
            color = "#ffb656";
            break;
        case InputType.USERNAME:
            color = "#ff0000";
            break;
        case InputType.PASSWORD:
            color = "#0051ff";
            break;
    }

    return color;
}