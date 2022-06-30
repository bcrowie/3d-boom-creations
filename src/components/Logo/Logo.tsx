import React from 'react'
import logo from '../../assets/Logo.png'
import { Link } from "react-router-dom";
import { logoAlt } from '../../Constants/Constants.js';
import "../../styles/Components/Header/Header.scss"

const Logo: React.FC = () => {
    return (
        <div id="logo">
            <Link to="/">
                <img src={logo} alt={logoAlt} />
            </Link>
        </div>
    );
};

export default Logo;
