import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CartPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/Cart/cartSlice';


const EmptyCart = () => {
    const navigate = useNavigate();
    return (
        <div className="cart-empty-state">
            <img
                src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png"
                alt="Empty Cart"
                style={{ width: '150px' }}
            />
            <p>Nothing in the bag</p>
            <button className="continue-shopping-btn" onClick={() => navigate('/')}>
                Continue Shopping
            </button>
        </div>
    );
};

const CartItem = ({ item, onRemove }) => {
    const imageUrl = item.image.startsWith('http') ? item.image : `${import.meta.env.VITE_API_URL}${item.image}`;
    return (
        <div className="cart-item-card">
            <div className="item-details">
                <h4>{item.name}</h4>
                <p>Size: {item.size}</p>
                <p>Qty: {item.quantity}</p>
                <p style={{ fontWeight: 'bold', color: '#333' }}>₹{item.price}</p>

                <button
                    className="remove-btn"
                    onClick={() => onRemove(item)}
                >
                    Remove
                </button>
            </div>
            <div className="item-image">
                <img src={imageUrl} alt={item.name} />
            </div>
        </div>
    );
};


const CartPage = () => {

    const { cartItems, totalAmount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    const handleRemove = (item) => {
        dispatch(removeFromCart({ id: item.id, size: item.size }));
    };

    const isCartEmpty = cartItems.length === 0;

    return (
        <div className="cart-container">
            <h2>My Bag <span>{cartItems.length} item(s)</span></h2>

            <div className="cart-content">

                <div className={`cart-items ${isCartEmpty ? 'empty' : ''}`}>
                    {isCartEmpty ? (
                        <EmptyCart />
                    ) : (
                        cartItems.map((item, index) => (
                            <CartItem
                                key={`${item.id}-${item.size}-${index}`}
                                item={item}
                                onRemove={handleRemove}
                            />
                        ))
                    )}
                </div>
                <div className="price-summary">
                    <h3>Price Summary</h3>

                    <div className="summary-row">
                        <span>Total MRP (Incl. of taxes)</span>
                        <span>₹{totalAmount}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping Charges</span>
                        <span>FREE</span>
                    </div>
                    <div className="summary-row">
                        <span>Bag Discount</span>
                        <span>- ₹0</span>
                    </div>

                    <div className="summary-row total">
                        <span>Subtotal</span>
                        <span>₹{totalAmount}</span>
                    </div>

                    <Link to="/shipping" style={{ textDecoration: 'none' }}>
                        <button
                            className="checkout-btn"
                            disabled={isCartEmpty}
                        >
                            CHECKOUT
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
