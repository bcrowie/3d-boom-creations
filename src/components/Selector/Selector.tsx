import { SelectorPropsInterface } from "../../pages/Contact/Contact"

const Selector: React.FC<SelectorPropsInterface> = (props) => {
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
