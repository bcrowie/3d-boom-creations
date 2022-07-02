import HeaderLink from './HeaderLink'
import { links } from '../../constants/constants.js'

import '../../styles/Components/Header/Header.scss'

const HeaderLinkGroup: React.FC = () => {
    return (
        <div id="header-links">
            <HeaderLink link={links.home.link} text={links.home.text}/>
            <HeaderLink link={links.about.link} text={links.about.text}/>
            <HeaderLink link={links.products.link} text={links.products.text}/>
            <HeaderLink link={links.quotes.link} text={links.quotes.text}/>
            <HeaderLink link={links.testimonials.link} text={links.testimonials.text} />
            <HeaderLink link={links.contact.link} text={links.contact.text} />
        </div>
    )
}

export default HeaderLinkGroup
