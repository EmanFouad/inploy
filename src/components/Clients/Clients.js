import React from 'react';
import clientLogo1 from '../../assets/images/client-logo1.png';
import clientLogo2 from '../../assets/images/client-logo2.png';
import clientLogo3 from '../../assets/images/client-logo3.png';
import clientLogo4 from '../../assets/images/client-logo4.png';
import clientLogo5 from '../../assets/images/client-logo5.png';
import clientLogo6 from '../../assets/images/client-logo6.png';
import clientLogo7 from '../../assets/images/client-logo7.png';
import clientLogo8 from '../../assets/images/client-logo8.png';
import clientLogo9 from '../../assets/images/client-logo9.png';
import clientLogo10 from '../../assets/images/client-logo10.png';

const Clients = () => {
    return ( 
        <section className="clients">
            <div className="clients-logo container">
                <h3>Success stories with 400+ Clients</h3>
                <div className="logos">
                    <div className="img-container">
                        <img src={clientLogo1} alt="logo1"/>
                    </div>
                    <div className="img-container">
                        <img src={clientLogo2} alt="logo2"/>
                    </div>
                    <div className="img-container">
                        <img src={clientLogo3} alt="logo3"/>
                    </div>
                    <div className="img-container">
                        <img src={clientLogo4} alt="logo4"/>
                    </div>  
                </div>
                <div className="more-logos">
                    <div className="img-container">
                        <img src={clientLogo5} alt="logo5"/>
                    </div>
                    <div className="img-container">
                        <img src={clientLogo6} alt="logo6"/>
                    </div>
                    <div className="img-container">
                        <img src={clientLogo7} alt="logo7"/>
                    </div>
                    <div className="img-container">
                        <img src={clientLogo8} alt="logo8"/>
                    </div>
                    <div className="img-container">
                        <img src={clientLogo9} alt="logo9"/>
                    </div>
                    <div className="img-container">
                        <img src={clientLogo10} alt="logo10"/>
                    </div>
                    
                    
                    
                    
                    
                    
                </div>
            </div>
        </section>
     );
}
 
export default Clients;