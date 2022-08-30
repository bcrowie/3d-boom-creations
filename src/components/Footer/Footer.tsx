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
                    <Link to={LINKS.QUOTES.LINK}>{LINKS.QUOTES.TEXT}</Link>
                    <Link to={LINKS.TESTIMONIALS.LINK}>{LINKS.TESTIMONIALS.TEXT}</Link>
                    <Link to={LINKS.CONTACT.LINK}>{LINKS.CONTACT.TEXT}</Link>
                </div>
                <div className="footer-content footer-column-four">
                    <div className="copyright">
                        <p>© 2022 3DBoomCreations</p>
                    </div>
                    <div className="social">
                        <Link to="#">Twitter</Link>
                        <Link to="#">Instagram</Link>
                        <a href="https://www.facebook.com/profile.php?id=100085335301174" target="_blank">Facebook</a>
                        <a href="https://www.reddit.com/user/cr0wstuf" target="_blank">Reddit</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
