import React, { Dispatch, SetStateAction } from "react";
import { useNavigate } from 'react-router-dom'
import { ContactForm, QuoteForm } from "../../types"
import { CONTACT_INQUIRY_SELECT } from "../../constants/constants";

const Selector: React.FC<SelectorProps> = (props) => {
    const {data, id, label, name, options, setData} = props;
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if(e.target.value === "PRINT_QUOTE"){
            navigate('/quotes')
        } else {
            setData({...data, [name]: e.target.value})
        }
    }

    return (
        <div className="selector">
            <div className={id}>
                <label htmlFor={id}>{label}</label>
                <select name={name} id={id} onChange={handleChange}>
                    {Object.entries(options).map(([val, title]) => (
                        <option key={title} value={val}>{title}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Selector

export interface SelectorProps {
    data: ContactForm | QuoteForm
    id: string,
    label: string,
    name: string,
    options: object
    setData: Dispatch<SetStateAction<ContactForm | QuoteForm>>;
}
