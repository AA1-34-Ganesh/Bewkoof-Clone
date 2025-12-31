import React from 'react';
import { Link } from 'react-router-dom';
import './Shipping.css';

const Shipping = () => {
    return (
        <div className="shipping-container">
            <h2>Shipping Address</h2>
            <form className="address-form">
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Mobile Number" />
                <input type="text" placeholder="Pincode" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="State" />
                <textarea placeholder="Flat no, Building, Street"></textarea>
                <textarea placeholder="Area, Colony, Sector"></textarea>

                <Link to="/payment">
                    <button type="button" className="save-address-btn">SAVE ADDRESS & CONTINUE</button>
                </Link>
            </form>
        </div>
    );
};

export default Shipping;
