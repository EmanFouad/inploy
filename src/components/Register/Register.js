import React from 'react';
import DownArrow from '../../assets/svgIcons/DownArrow';
import servicesCards from '../../assets/images/services-cards.png';

const Register = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return ( 
        <section className="register container">
            <h2>2000+ Service Providers on board</h2>
            <div className="content">
                <div className="services-cards">
                    <img src={servicesCards} alt="Services Cards"/>
                </div>
                <div className="register-form">
                    <h3>Register Now</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <input type="text" placeholder="Full Name"/>
                            <input type="text" placeholder="Job Title"/>
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Email"/>
                            <input type="number" placeholder="Number"/>
                        </div>
                        <div className="form-control select-control">
                            <select>
                                <option value="category" defaultValue hidden>Category</option>
                                <option value="software">Software</option>
                                <option value="computer">Computer Engineering</option>
                                <option value="design">Design</option>
                            </select>
                            <div className="arrow">
                                <DownArrow />
                            </div>
                        </div>
                        <button className="register-btn">Register Now</button>
                    </form>
                </div>   
            </div>
        </section>
     );
}
 
export default Register;