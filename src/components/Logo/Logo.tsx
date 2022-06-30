import React from 'react'
import logo from '../../assets/Logo.png'
import { Link } from "react-router-dom";
import "../../styles/Components/Header/Header.scss"

const Logo: React.FC = () => {
    return (
        <div id="logo">
            <Link to="/">
                <img src={logo} alt="3D Boom Creations Logo" />
            </Link>
        </div>
    );
};

export default Logo;
