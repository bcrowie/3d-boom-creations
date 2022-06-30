import { Link } from "react-router-dom";
import "../../styles/Components/Header/Header.scss"

const Logo: React.FC = () => {
    return (
        <div id="logo">
            <Link to="/" className="logo">3DBoom</Link>
            <Link to="/" className="logo">Creations</Link>
        </div>
    );
};

export default Logo;
