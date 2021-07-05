import styled from "styled-components";

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
    
    const StyledLabel = styled.label`
        width: fit-content;
        padding: 0em 1em 1em;
        color: white;
    `;


    const StyledInput = styled.input`
        margin-top: .5em;
        font-size: large;
        padding: .5em;
        border: .1em solid white;
        border-radius: .5em;
        outline: none;
        :focus {
            border: 0.1em solid ${getColor(props.inputType)};
        }

        ::selection {
            background: white;
            color: black;
        }

        ::-moz-selection {
            background: white;
            color: black;
        }
    `;

    return (
        <StyledLabel>
            {getLabel(props.inputType)}:
            <br/>            
            <StyledInput 
                type={getType(props.inputType)} 
                id={getId(props.inputType)}
                name={getName(props.inputType)}
            />
        </StyledLabel>
    );
}


const getType = (inputType : InputType) : string => {
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

const getId = (inputType : InputType) : string => {
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

const getName = (inputType : InputType) : string => {
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

const getColor = (inputType : InputType) : string => {
    let color : string;

    switch(inputType) {
        case InputType.EMAIL:
            color = "#ffce8f";
            break;
        case InputType.USERNAME:
            color = "#ff3d3d";
            break;
        case InputType.PASSWORD:
            color = "#5cffe4";
            break;
    }

    return color;
}


const getLabel = (inputType : InputType) : string => {
    let label : string;

    switch(inputType) {
        case InputType.EMAIL:
            label = "Email"
            break;
        case InputType.USERNAME:
            label = "Username";
            break;
        case InputType.PASSWORD:
            label = "Password";
            break;
    }

    return label;
}