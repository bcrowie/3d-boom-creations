import HeaderLink from './HeaderLink'
import { LINKS } from '../../constants/constants.js'

import '../../styles/Components/Header/Header.scss'

const HeaderLinkGroup: React.FC = () => {
    return (
        <div id="header-links">
            <HeaderLink link={LINKS.HOME.LINK} text={LINKS.HOME.TEXT}/>
            <HeaderLink link={LINKS.PRODUCTS.LINK} text={LINKS.PRODUCTS.TEXT}/>
            <HeaderLink link={LINKS.QUOTES.LINK} text={LINKS.QUOTES.TEXT}/>
            <HeaderLink link={LINKS.TESTIMONIALS.LINK} text={LINKS.TESTIMONIALS.TEXT} />
            <HeaderLink link={LINKS.CONTACT.LINK} text={LINKS.CONTACT.TEXT} />
        </div>
    )
}

export default HeaderLinkGroup
