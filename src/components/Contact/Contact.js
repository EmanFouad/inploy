import React from 'react';
import Illustration from '../../assets/images/contact-illustration.png';

const Contact = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return ( 
        <section className="contact-container">
            <div className="contact-form">
                <h3>Contact <p>info@inploy.me</p></h3>
                <p className="subtitle">For further assistance with projects or pre registration </p>
                <h4>How would like us to contact you?</h4>
                <form onSubmit={handleSubmit}>
                    <div className="radio-control">
                        <input type="radio"id="call" name="contact" />
                        <label htmlFor="call">Call</label>
                    </div>
                    <div className="radio-control">
                        <input type="radio"id="email" name="contact" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-control">
                        <input type="email" placeholder="Email" />
                    </div>
                    <button className="send-btn" type="submit">Send</button>
                </form>
            </div>
            <div className="illustration">
                <img src={Illustration} alt="illustration"/>
            </div>
        </section>
     );
}
 
export default Contact;