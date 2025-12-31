import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './OrdersPage.css';

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/orders`);

                const userOrders = user?.email
                    ? response.data.filter(o => o.userEmail === user.email)
                    : response.data;


                setOrders(userOrders.reverse());
            } catch (error) {
                console.error("Error fetching orders:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [user]);

    if (loading) return <div className="loading">Loading Orders...</div>;

    if (orders.length === 0) {
        return (
            <div className="empty-orders">
                <img src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png" alt="No Orders" style={{ width: '150px' }} />
                <h2>No Orders Found</h2>
                <p>Looks like you haven't placed any orders yet.</p>
                <button onClick={() => navigate('/')} className="continue-shopping">Start Shopping</button>
            </div>
        );
    }

    return (
        <div className="orders-container">
            <h1>My Orders</h1>
            <div className="orders-list">
                {orders.map((order) => (
                    <div key={order.id} className="order-card">
                        <div className="order-header">
                            <div>
                                <span className="order-id">Order #{order.id}</span>
                                <span className="order-date">{new Date().toLocaleDateString()}</span>

                            </div>
                            <div className="order-status">
                                <span className="status-dot"></span>
                                Delivered
                            </div>
                        </div>
                        <div className="order-items">
                            {order.items.map((item, index) => (
                                <div key={index} className="order-item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="item-info">
                                        <h4>{item.name}</h4>
                                        <p>Size: {item.size} | Qty: {item.quantity}</p>
                                        <p className="item-price">₹{item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="order-footer">
                            <div className="total-amount">
                                Total: <span>₹{order.totalAmount}</span>
                            </div>
                            <button className="help-btn" onClick={() => alert(`Help request for Order #${order.id} raised!`)}>
                                Need Help?
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrdersPage;
