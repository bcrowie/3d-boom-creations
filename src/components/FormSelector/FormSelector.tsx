import { Dispatch, SetStateAction } from "react";
import { FormState } from "../../types"

export interface SelectorProps {
    id: string,
    label: string,
    name: string,
    options: object
    setData: Dispatch<SetStateAction<FormState>>;
}

const Selector: React.FC<SelectorProps> = (props) => {
    const {id, label, name, options} = props;

    return (
        <div className="selector">
            <div className={id}>
                <label htmlFor={id}>{label}</label>
                <select name={name} id={id}>
                    {Object.entries(options).map(([key, val]) => (
                        <option value={key}>{val}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Selector
