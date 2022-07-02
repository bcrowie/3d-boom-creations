import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import * as constants from '../../constants/constants.js'
import "../../styles/Components/Header/Header.scss"

const sendMail = () => {
    window.open('mailto:service@3dboom.org?subject=Print Inquiry')
}

const ContactInfo: React.FC = () => {
    return (
        <div className="contact-info">
        <>
            <p style={{"color": "white"}} className="phone-number">
                <FontAwesomeIcon icon={solid('phone')} className="icon"/>
                {constants.headerPhone}
            </p>
        </>
        <>
            <Link to="#" onClick={sendMail} className="email-link">
                <FontAwesomeIcon icon={solid('envelope')} className="icon envelope" />
                {constants.headerEmail}
            </Link>
        </>
        </div>
    )
}

export default ContactInfo
