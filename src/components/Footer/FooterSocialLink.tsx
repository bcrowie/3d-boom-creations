import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FooterSocialLinkProps } from './FooterSocial';

const FooterSocialLink: React.FC<FooterSocialLinkProps> = (props) => {
    const {icon, link, text} = props

    return (
        <>
            <FontAwesomeIcon icon={icon} className="icon" />
            <Link to={link}>{text}</Link>
        </>
    )
}

export default FooterSocialLink
