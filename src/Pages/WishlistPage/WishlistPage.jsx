import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../Redux/Wishlist/wishlistSlice';
import { addToCart } from '../../Redux/Cart/cartSlice';
import { Link } from 'react-router-dom';
import './WishlistPage.css';

const WishlistPage = () => {
    const { wishlistItems } = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

    const moveToBag = (item) => {
        dispatch(addToCart({
            id: item.id,
            image: item.image,
            name: item.name,
            price: item.price,
            size: 'M'
        }));
        dispatch(removeFromWishlist(item.id));
        alert('Moved to Bag');
    };

    if (wishlistItems.length === 0) {
        return (
            <div className="empty-wishlist">
                <h2>Your Wishlist is Empty</h2>
                <Link to="/">Continue Shopping</Link>
            </div>
        );
    }

    return (
        <div className="wishlist-container">
            <h2>My Wishlist ({wishlistItems.length})</h2>
            <div className="wishlist-grid">
                {wishlistItems.map((item) => (
                    <div key={item.id} className="wishlist-card">
                        <img src={item.image} alt={item.name} />
                        <div className="wishlist-details">
                            <h4>{item.name}</h4>
                            <p>₹{item.price}</p>
                            <div className="wishlist-actions">
                                <button onClick={() => moveToBag(item)}>MOVE TO BAG</button>
                                <button onClick={() => dispatch(removeFromWishlist(item.id))} className="remove-btn">
                                    REMOVE
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishlistPage;
