import React from 'react';
import headerTitle from '../../assets/images/header-title.png';

const Header = () => {
    return ( 
        <header className="header">
            <img src={headerTitle} alt="welcome to inploy"/>
            <p className="subtitle">Register now and secure your spot on top of your category</p>
            <div className="buttons">
                <button className="btn service-btn">Service Provider</button>
                <button className="btn client-btn">Client</button>
            </div>
        </header>
     );
}
 
export default Header;