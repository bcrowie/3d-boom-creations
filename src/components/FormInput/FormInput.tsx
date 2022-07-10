import { Dispatch, SetStateAction } from "react";
import { FormState } from "../../types"

import "../../styles/Components/Input/Input.scss"

export interface InputProps {
    id: string
    label: string,
    name: string,
    setData: Dispatch<SetStateAction<FormState>>;
}

const Input: React.FC<InputProps> = (props) => {
    const {label, name, id} = props;

    return (
        <div className={`input ${id}`}>
            <label htmlFor={id}>{label}</label>
            <input type="text" name={name} id={id} />
        </div>
    )
}

export default Input
