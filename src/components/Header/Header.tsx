import { Link } from 'react-router-dom';

import HeaderLink from './HeaderLink';
import Logo from '../Logo/Logo';
import { links } from '../../Constants/Constants.js'

import '../../styles/Components/Header/Header.scss';

const sendMail = () => {
    window.open('mailto:service@3dboom.org?subject=Print Inquiry')
}

const Header: React.FC = () => {
    return <div className='header-main'>
        <div className="header-menu">
            <Logo />
            <div id="header-contact-links">
                <div className="contact-info">
                    <p style={{"color": "white"}} className="phone-number">Phone: (863) 606-8318</p>
                    <Link to="#" onClick={sendMail} className="email-link">Email: service@3dboom.org</Link>
                </div>
                <div id="header-links">
                <HeaderLink link={links.home.link} text={links.home.text}/>
                    <HeaderLink link={links.about.link} text={links.about.text}/>
                    <HeaderLink link={links.work.link} text={links.work.text}/>
                    <HeaderLink link={links.quotes.link} text={links.quotes.text}/>
                    <HeaderLink link={links.contact.link} text={links.contact.text} />
                    <HeaderLink link={links.testimonials.link} text={links.testimonials.text} />
                </div>
            </div>
        </div>
    </div>;
};

export default Header;
