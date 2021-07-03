import './LabeledInput.css'

export enum InputType {
    USERNAME,
    PASSWORD,
    EMAIL
}

type Props = {
    inputType: InputType;
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




export default function LabeledInput(props : Props) {
    return (
        <>
            <label>
                Username:            
                <input 
                    type={getType(props.inputType)} 
                    id={getId(props.inputType)}
                    name={getName(props.inputType)}
                    className={getId(props.inputType)}
                />
            </label>
        </>
    );
}


//export default const Input2 = styled.