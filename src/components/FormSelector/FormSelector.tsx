import { Dispatch, SetStateAction } from "react";
import { ContactForm, QuoteForm } from "../../types"

const Selector: React.FC<SelectorProps> = (props) => {
    const {id, label, name, options} = props;

    return (
        <div className="selector">
            <div className={id}>
                <label htmlFor={id}>{label}</label>
                <select name={name} id={id}>
                    {Object.entries(options).map(([val, title]) => (
                        <option value={val}>{title}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Selector

export interface SelectorProps {
    id: string,
    label: string,
    name: string,
    options: object
    setData: Dispatch<SetStateAction<ContactForm | QuoteForm>>;
}
