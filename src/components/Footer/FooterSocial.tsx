import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import FooterSocialLink from './FooterSocialLink';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


export interface FooterSocialLinkProps {
    icon: IconDefinition,
    link: string,
    text: string,
}

const FooterSocial: React.FC = () => {
    return (
        <div className="footer-social">
            <FooterSocialLink icon={solid("facebook-square")} link="#" text="Facebook"/>
            <FooterSocialLink icon={solid("twitter-square")} link="#" text="Twitter"/>
            <FooterSocialLink icon={solid("reddit-square")} link="#" text="Reddit"/>
        </div>
    )
}

export default FooterSocial;
