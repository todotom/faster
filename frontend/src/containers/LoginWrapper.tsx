import LabeledInput, { InputType } from "../components/LabeledInput/LabeledInput";

export default function LoginWrapper() {
    return (
        <div className="login-wrapper">
           <LabeledInput inputType={InputType.USERNAME}/>
        </div>
    ) 
}