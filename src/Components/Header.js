import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';



function Header() {



    return (
        <>
            <header>
                {/* Website Logo and Title */}
                <div id="header_icon">
                    <Link to="/" className="headerLink">
                        <div id="homeLogo" />
                        <h1>Image Repository</h1>
                    </Link>
                </div>

                {/* Navigation */}
                <nav>
                    <Link to="/guide" className="headerLink">
                        User Guide
                </Link>

                </nav>

            </header>

        </>
    );
}

export default Header;