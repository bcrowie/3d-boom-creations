import { Dispatch, SetStateAction } from "react";
import { ContactForm, QuoteForm } from "../../types"

import "../../styles/Components/Input/Input.scss"

const Input: React.FC<InputProps> = (props) => {
    const { data, label, name, id, setData} = props;

    return (
        <div className={`input ${id}`}>
            <label htmlFor={id}>{label}</label>
            <input type="text" name={name} id={id} onChange={
                e => setData({...data, [name]: e.target.value})
            }/>
        </div>
    )
}

export default Input

export interface InputProps {
    data: ContactForm | QuoteForm
    id: string
    label: string,
    name: string,
    setData: Dispatch<SetStateAction<ContactForm | QuoteForm>>;
}
