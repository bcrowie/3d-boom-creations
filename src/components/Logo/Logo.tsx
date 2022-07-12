import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/Logo.png'

import { LOGO_ALT } from '../../constants/constants.js';
import "../../styles/Components/Header/Header.scss"

const Logo: React.FC = () => {
    return (
        <div id="logo">
            <Link to="/">
                <img src={logo} alt={LOGO_ALT} />
            </Link>
        </div>
    );
};

export default Logo;
