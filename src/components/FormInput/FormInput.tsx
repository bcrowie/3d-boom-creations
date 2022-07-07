import { InputPropsInterface } from "../../pages/Contact/Contact";

import "../../styles/Components/Input/Input.scss"
const Input: React.FC<InputPropsInterface> = (props) => {
    const {label, name, id} = props;

    return (
        <div className={`input ${id}`}>
            <label htmlFor={id}>{label}</label>
            <input type="text" name={name} id={id} />
        </div>
    )
}

export default Input
