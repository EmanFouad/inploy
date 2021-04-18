import React, { useState, useEffect } from 'react';
import Star from './../../assets/svgIcons/Star';
import Exchange from './../../assets/svgIcons/Exchange';
import Services from './../../assets/svgIcons/Services';

const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        setFeatures([
            {icon: <Star />, content:"Free Commission"},
            {icon: <Exchange />, content:"Free Contact Exchange"},
            {icon: <Services />, content:"30+ Services"},
        ])
    }, []);

    return ( 
        <section className="features container">
            {
                features.map((feature, indx) =>{
                  return(          
                  <div className="feature-card" key={indx}>
                        <i>{feature.icon}</i>
                        <p>{feature.content}</p>
                    </div>
                  )  
                })
            }
        </section>
     );
}
 
export default Features;