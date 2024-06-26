import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-page">     
            <img className='image' src="public/images/logo.jpg" alt="Orchid World Logo" />
                <h2>Contact</h2>
                <div className="address">
                    <p><strong>Address:</strong></p>
                    <p>District 9</p>
                    <p>Ho Chi Minh City</p>
                    <p>Viet Nam</p>
                </div>
                <div className="opening-hours">
                    <p><strong>Opening hours physical store*:</strong></p>
                    <p>Friday 09:30-12:30 (closed June 1 & 30).</p>
                    <p>* Assortment in store is limited to tropical green houseplants. Orchids are hardly available. Orchids are mainly sold only through the webshop.</p>
                    <p>Some random flowering orchids will be presented sporadically (these cannot be predetermined).</p>
                </div>
                <form>
                    <input type="text" placeholder="Your name"/>
                    <input type="email" placeholder="Your email"/>
                    <textarea placeholder="Your message" rows="5"></textarea>
                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;