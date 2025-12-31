import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <footer className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>CUSTOMER SERVICE</h4>
                        <ul>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><a href="#track">Track Order</a></li>
                            <li><a href="#return">Return Order</a></li>
                            <li><a href="#cancel">Cancel Order</a></li>
                        </ul>
                        <div className="footer-badges">
                            <div className="badge-item">
                                <span className="badge-icon">📦</span>
                                <span>15 Days Return Policy*</span>
                            </div>
                            <div className="badge-item">
                                <span className="badge-icon">💵</span>
                                <span>Cash On Delivery*</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>COMPANY</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#terms">Terms & Conditions</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#hiring">We are Hiring</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>CONNECT WITH US</h4>
                        <ul className="social-links">
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <span className="social-icon">📘</span> 4.7M People like this
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <span className="social-icon">📷</span> 1M People like this
                                </a>
                            </li>
                        </ul>
                        <div className="social-icons-row">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
                            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">📌</a>
                            <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">👻</a>
                            <a href="https://apple.com" target="_blank" rel="noopener noreferrer">🍎</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>KEEP UP TO DATE</h4>
                        <div className="subscribe-box">
                            <input type="email" placeholder="Enter Email Id" />
                            <button>SUBSCRIBE</button>
                        </div>
                        <div className="download-app">
                            <h5>DOWNLOAD THE APP</h5>
                            <div className="app-buttons">
                                <a href="#playstore" className="app-btn">
                                    <span>📱</span> Google Play
                                </a>
                                <a href="#appstore" className="app-btn">
                                    <span>🍎</span> App Store
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="payment-section">
                        <h5>100% SECURE PAYMENT</h5>
                        <div className="payment-icons">
                            <span className="payment-badge">COD</span>
                            <span className="payment-badge">VISA</span>
                            <span className="payment-badge">💳</span>
                            <span className="payment-badge">MasterCard</span>
                            <span className="payment-badge">PayPal</span>
                            <span className="payment-badge">UPI</span>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <p>© 2026 Bewakoof Clone. All Rights Reserved.</p>
                </div>
            </footer>

            {showScrollTop && (
                <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
                    <span className="arrow-up">↑</span>
                    <span className="top-text">TOP</span>
                </button>
            )}
        </>
    );
};

export default Footer;
