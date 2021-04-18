import React from 'react';
import logo from '../../assets/images/logo.png';
import Facebook from '../../assets/svgIcons/Facebook';
import Instagram from '../../assets/svgIcons/Instagram';
import Linkedin from '../../assets/svgIcons/Linkedin';
import Twitter from '../../assets/svgIcons/Twitter';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="links">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="social-icons">
                        <i><Facebook /></i>
                        <i><Instagram /></i>
                        <i><Linkedin /></i>
                        <i><Twitter /></i>
                    </div>
                </div>
                <div className="navs">
                    <ul className="navs-list">
                        <li>Support</li>
                        <li>Understand</li>
                        <li>Terms & Regulations</li>
                    </ul>
                    <div className="copyright">
                        <p>Inploy 2020. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;