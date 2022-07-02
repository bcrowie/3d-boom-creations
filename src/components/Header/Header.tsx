import ContactInfo from './Contact-Info';
import HeaderLinkGroup from './HeaderLinkGroup';
import Logo from '../Logo/Logo';

import '../../styles/Components/Header/Header.scss';

const Header: React.FC = () => {
    return <div className='header-main'>
        <div className="header-menu">
            <Logo />
            <div id="header-contact-links">
                <ContactInfo />
                <HeaderLinkGroup />
            </div>
        </div>
        <div className="header-border"></div>
    </div>;
};

export default Header;
