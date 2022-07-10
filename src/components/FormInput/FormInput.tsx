import { Dispatch, SetStateAction } from "react";
import { ContactForm, QuoteForm } from "../../types"

import "../../styles/Components/Input/Input.scss"

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

export interface InputProps {
    id: string
    label: string,
    name: string,
    setData: Dispatch<SetStateAction<ContactForm | QuoteForm>>;
}
