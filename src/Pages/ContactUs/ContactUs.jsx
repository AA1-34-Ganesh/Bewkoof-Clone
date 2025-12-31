import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);

        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="contact-us-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <div className="info-card">
                        <div className="info-icon">📧</div>
                        <h3>Email</h3>
                        <p>support@bewakoof.com</p>
                    </div>

                    <div className="info-card">
                        <div className="info-icon">📞</div>
                        <h3>Phone</h3>
                        <p>+91 1234567890</p>
                    </div>

                    <div className="info-card">
                        <div className="info-icon">📍</div>
                        <h3>Address</h3>
                        <p>Mumbai, Maharashtra, India</p>
                    </div>

                    <div className="info-card">
                        <div className="info-icon">⏰</div>
                        <h3>Working Hours</h3>
                        <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                </div>

                <div className="contact-form-section">
                    {submitted ? (
                        <div className="success-message">
                            <div className="success-icon">✓</div>
                            <h2>Thank You!</h2>
                            <p>Your message has been sent successfully. We'll get back to you soon.</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="What is this about?"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
