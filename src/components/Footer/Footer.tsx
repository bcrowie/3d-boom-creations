import { Link } from 'react-router-dom'
import * as constants from '../../constants/constants.js'
import '../../styles/Components/Footer/Footer.scss';

const Footer: React.FC = () => {
    return (
        <div className='footer-main'>
            <div className="footer-border"></div>
            <div className="footer-menu">
                <div className="footer-content footer-column-one">
                    <Link to={constants.links.home.link}>{constants.links.home.text}</Link>
                    <Link to={constants.links.home.link}>{constants.links.home.text}</Link>
                    <Link to={constants.links.home.link}>{constants.links.home.text}</Link>
                    <Link to={constants.links.home.link}>{constants.links.home.text}</Link>
                </div>
                <div className="footer-content footer-column-two">
                    <Link to={constants.links.home.link}>{constants.links.home.text}</Link>
                    <Link to={constants.links.home.link}>{constants.links.home.text}</Link>
                    <Link to={constants.links.home.link}>{constants.links.home.text}</Link>
                    <Link to={constants.links.home.link}>{constants.links.home.text}</Link>
                </div>
                <div className="footer-content footer-column-three">
                    <Link to={constants.links.home.link}>{constants.links.home.text}</Link>
                    <Link to={constants.links.home.link}>{constants.links.home.text}</Link>
                    <Link to={constants.links.home.link}>{constants.links.home.text}</Link>
                    <Link to={constants.links.home.link}>{constants.links.home.text}</Link>
                </div>
                <div className="footer-content footer-column-four">
                    <div className="copyright">
                        <p>copyright 3DBoomCreations 2022</p>
                    </div>
                    <div className="social">
                        <Link to="#">Facebook</Link>
                        <Link to="#">Twitter</Link>
                        <Link to="#">Reddit</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
