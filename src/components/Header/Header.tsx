import HeaderLink from './HeaderLink';
import Logo from '../Logo/Logo';
import '../../styles/Components/Header/Header.scss';


const Header: React.FC = () => {
    return <div className='header-main'>
        <div className="header-menu">
            <Logo />
            <div id="header-contact-links">
                <div className="contact">
                    <p className="phone-number">(863) 606-8318</p>
                    <p className="email-link">service@3dboom.com</p>
                </div>
                <div id="header-links">
                    <HeaderLink link={"/about"} text="About"/>
                    <HeaderLink link={"/work"} text="Work"/>
                    <HeaderLink link={"/quotes"} text="Quotes"/>
                    <HeaderLink link={"/contact"} text="Contact" />
                    <HeaderLink link={"/testimonials"} text="Testimonials" />
                </div>
            </div>
        </div>
    </div>;
};

export default Header;
