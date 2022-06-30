import ContactInfo from './Contact-Info';
import HeaderLink from './HeaderLink';
import Logo from '../Logo/Logo';
import { links } from '../../Constants/Constants.js'

import '../../styles/Components/Header/Header.scss';



const Header: React.FC = () => {
    return <div className='header-main'>
        <div className="header-menu">
            <Logo />
            <div id="header-contact-links">
                <ContactInfo />
                <div id="header-links">
                    <HeaderLink link={links.home.link} text={links.home.text}/>
                    <HeaderLink link={links.about.link} text={links.about.text}/>
                    <HeaderLink link={links.work.link} text={links.work.text}/>
                    <HeaderLink link={links.quotes.link} text={links.quotes.text}/>
                    <HeaderLink link={links.testimonials.link} text={links.testimonials.text} />
                    <HeaderLink link={links.contact.link} text={links.contact.text} />
                </div>
            </div>
        </div>
        <div className="header-border"></div>
    </div>;
};

export default Header;
