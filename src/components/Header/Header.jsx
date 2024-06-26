import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ThemeContext } from '../../theme/ThemeContext';
import { GoogleLogin } from '@react-oauth/google';
import './Header.scss';

const Header = () => {
    const location = useLocation();
    const hideHeaderRoutes = ["/contact", "/detail"];

    const hideHeader = hideHeaderRoutes.some(route => location.pathname.startsWith(route));
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        !hideHeader && (
            <header className={`header ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
                <div className="top-bar">
                    <span>Unique plants & orchids since 2024</span>
                </div>
                <div className="main-header">
                    <div className="logo">
                        <img src="public/images/logo.jpg" alt="Orchid World Logo" />
                        <div>
                            <h1>OrchidTin</h1>
                            <p>ORCHIDS AND PLANTS</p>
                            <p className="since">SINCE 2024</p>
                        </div>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search..." />
                    </div>
                    <div className="user-options">
                        <div className="language-selector">
                            <span>Language</span>
                            <select>
                                <option value="en">English</option>
                                <option value="vi">Vietnamese</option>
                            </select>
                        </div>
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                        <Link to="/account">My Account</Link>
                        <div className="shopping-cart">
                            <Link to="/cart">
                                <i className="fas fa-shopping-cart"></i>
                                <span>0</span>
                            </Link>
                        </div>
                        <button onClick={toggleTheme}>
                            Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
                        </button>
                    </div>
                </div>
                <nav className="nav-bar">
                    <Link to="/new">New</Link>
                    <Link to="/all-plants">All plants</Link>
                    <Link to="/orchids">Orchids</Link>
                    <Link to="/tropical-plants">Tropical plants</Link>
                    <Link to="/import-plants">Import plants</Link>
                    <Link to="/offers">Offers</Link>
                    <Link to="/accessories">Accessories</Link>
                    <Link to="/information">Information</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>
        )
    );
};

export default Header;
