
import "../../styles/Components/Button/Button.scss"
const Button: React.FC = () => {
    return (
        <button type="submit" onClick={(e) => console.log(e)}>Submit</button>
    )
}

export default Button
