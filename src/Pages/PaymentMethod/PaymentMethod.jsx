import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './PaymentMethod.css';
import { clearCart } from '../../Redux/Cart/cartSlice';

const PaymentMethod = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cartItems, totalAmount } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);
    const [selectedMode, setSelectedMode] = useState('');

    const paymentModes = [
        { id: 'cod', label: 'Cash On Delivery (COD)' },
        { id: 'card', label: 'Credit/Debit Card' },
        { id: 'upi', label: 'UPI' },
        { id: 'netbanking', label: 'Net Banking' },
    ];

    const handlePaymentSuccess = async () => {

        const newOrder = {
            userEmail: user?.email || 'guest@example.com',
            items: cartItems,
            totalAmount: totalAmount,
            date: new Date().toISOString(),
            status: 'Delivered',
            paymentMode: selectedMode
        };

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/orders`, newOrder);
            dispatch(clearCart());
            alert('Payment Successful! Order Placed.');
            navigate('/orders');
        } catch (error) {
            console.error("Failed to place order", error);
            alert('Order placement failed. Please try again.');
        }
    };

    const handleGenericPayment = () => {
        if (!selectedMode) {
            alert('Please select a payment mode');
            return;
        }
        handlePaymentSuccess();
    };

    return (
        <div className="payment-container">
            <h2>Choose Payment Mode</h2>

            <div className="payment-options">
                {paymentModes.map((mode) => (
                    <div className="payment-option-wrapper" key={mode.id}>
                        <div className="payment-option">
                            <input
                                type="radio"
                                name="payment"
                                id={mode.id}
                                value={mode.id}
                                checked={selectedMode === mode.id}
                                onChange={(e) => setSelectedMode(e.target.value)}
                            />
                            <label htmlFor={mode.id}>{mode.label}</label>
                        </div>
                    </div>
                ))}
            </div>

            <button className="pay-btn" onClick={handleGenericPayment}>
                PAY NOW
            </button>
        </div>
    );
};

export default PaymentMethod;
