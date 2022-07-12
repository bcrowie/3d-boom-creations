import { Link } from 'react-router-dom'
import { LINKS } from '../../constants/constants.js'
import '../../styles/Components/Footer/Footer.scss';

const Footer: React.FC = () => {
    return (
        <div className='footer-main'>
            <div className="footer-border"></div>
            <div className="footer-menu">
                <div className="footer-content footer-column-one">
                    <Link to={LINKS.HOME.LINK}>{LINKS.HOME.TEXT}</Link>
                    <Link to={LINKS.HOME.LINK}>{LINKS.HOME.TEXT}</Link>
                    <Link to={LINKS.HOME.LINK}>{LINKS.HOME.TEXT}</Link>
                    <Link to={LINKS.HOME.LINK}>{LINKS.HOME.TEXT}</Link>
                </div>
                <div className="footer-content footer-column-two">
                    <Link to={LINKS.HOME.LINK}>{LINKS.HOME.TEXT}</Link>
                    <Link to={LINKS.HOME.LINK}>{LINKS.HOME.TEXT}</Link>
                    <Link to={LINKS.HOME.LINK}>{LINKS.HOME.TEXT}</Link>
                    <Link to={LINKS.HOME.LINK}>{LINKS.HOME.TEXT}</Link>
                </div>
                <div className="footer-content footer-column-three">
                    <Link to={LINKS.HOME.LINK}>{LINKS.HOME.TEXT}</Link>
                    <Link to={LINKS.HOME.LINK}>{LINKS.HOME.TEXT}</Link>
                    <Link to={LINKS.HOME.LINK}>{LINKS.HOME.TEXT}</Link>
                    <Link to={LINKS.HOME.LINK}>{LINKS.HOME.TEXT}</Link>
                </div>
                <div className="footer-content footer-column-four">
                    <div className="copyright">
                        <p>Copyright 3DBoomCreations 2022</p>
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
