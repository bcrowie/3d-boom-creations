import { Link } from "react-router-dom"
import "../../styles/Components/Header/HeaderLink.scss"

interface HeaderLinkProps {
    link: string
    text: string
}
const HeaderLink: React.FC<HeaderLinkProps> = ({link, text}) => {
    return <div className="header-link-container">
        <Link to={link} className="header-link">{text}</Link>
    </div>
}

export default HeaderLink
