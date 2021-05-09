import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
    return (
        <div className='footer-container'>

            {/* Social Section */}
            <section className="social-media">
                <Link to='/' id="iconBox">
                    <div className="social-logo" />
                    <h3 id="footerH3">Image Repository</h3>
                </Link>
                <h5 className="footerH5">Made by Yue Cheng | Contact: chengyue@utexas.edu</h5>
            </section>
        </div>
    );
}

export default Footer
