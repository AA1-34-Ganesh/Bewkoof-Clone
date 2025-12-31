import React, { useState, useEffect } from 'react';
import './SingleProduct.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/Cart/cartSlice';
import { addToWishlist } from '../../Redux/Wishlist/wishlistSlice';

const SingleProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState('');
    const [product, setProduct] = useState(null);

    const allProducts = useSelector((state) => state.products.items);

    useEffect(() => {
        const found = allProducts.find(p => p.id === parseInt(id));
        if (found) {
            setProduct(found);
        }
    }, [id]);

    if (!product) return <div style={{ padding: '50px', textAlign: 'center' }}>Loading or Product Not Found...</div>;

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
        dispatch(addToCart({
            id: product.id,
            image: product.image,
            name: product.name,
            price: product.price,
            size: selectedSize
        }));
        alert('Added to bag!');
    };

    const handleWishlist = () => {
        dispatch(addToWishlist({
            id: product.id,
            image: product.image,
            name: product.name,
            price: product.price
        }));
        alert('Added to Wishlist!');
    };

    // Logic for similar products
    const similarProducts = allProducts
        .filter(p => p.gender === product.gender && p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="page-wrapper">
            <div className="single-product-container">
                <div className="product-images">
                    <div className="thumbnail-list">
                        <img src={product.image} alt="thumb" />
                        <img src={product.image} alt="thumb" />
                        <img src={product.image} alt="thumb" />
                    </div>
                    <div className="main-image">
                        <img src={product.image} alt="Main Product" />
                    </div>
                </div>
                <div className="product-details-section">
                    <h3 className="brand-title">Bewakoof</h3>
                    <h1 className="product-title">{product.name}</h1>
                    <div className="rating-box">
                        <span>4.5 <i className="star-icon">★</i></span>
                    </div>

                    <div className="price-section">
                        <span className="current-price">₹{product.price}</span>
                        <span className="mrp">₹{product.price + 500}</span>
                        <span className="discount-tag">50% OFF</span>
                    </div>
                    <p className="tax-note">inclusive of all taxes</p>

                    <div className="size-selector">
                        <h4>SELECT SIZE</h4>
                        <div className="sizes">
                            {product.sizes ? product.sizes.map((size) => (
                                <button
                                    key={size}
                                    className={selectedSize === size ? 'selected' : ''}
                                    onClick={() => setSelectedSize(size)}
                                    style={{ backgroundColor: selectedSize === size ? '#ffd84d' : 'white' }}
                                >
                                    {size}
                                </button>
                            )) : <div>No sizes available</div>}
                        </div>
                    </div>

                    <div className="action-buttons">
                        <button className="add-to-bag" onClick={handleAddToCart}>
                            ADD TO BAG
                        </button>
                        <button className="wishlist-btn" onClick={handleWishlist}>
                            WISHLIST
                        </button>
                    </div>

                    <div className="product-description">
                        <h4>Product Description</h4>
                        <p>
                            Make a statement with this stylish t-shirt. Made from 100% cotton, it offers comfort and durability. Perfect for casual outings.
                        </p>
                    </div>
                </div>
            </div>

            {/* Recommendations Section */}
            <div className="recommendation-section">
                <h2>Similar Products</h2>
                <div className="recommendation-grid">
                    {similarProducts.map(rec => (
                        <div key={rec.id} className="rec-card" onClick={() => navigate(`/product/${rec.id}`)}>
                            <img src={rec.image} alt={rec.name} />
                            <h4>{rec.name}</h4>
                            <p>₹{rec.price}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reviews Section */}
            <div className="reviews-section">
                <h2>Ratings & Reviews</h2>
                <div className="review-list">
                    {product.category === 'Accessories' ? (
                        <>
                            <div className="review-card">
                                <div className="review-header">
                                    <span className="reviewer-name">Vikram Singh</span>
                                    <span className="review-rating">★★★★★</span>
                                </div>
                                <p className="review-text">Perfect fit for my phone! The print quality is amazing and it feels sturdy.</p>
                            </div>
                            <div className="review-card">
                                <div className="review-header">
                                    <span className="reviewer-name">Priya Sharma</span>
                                    <span className="review-rating">★★★★☆</span>
                                </div>
                                <p className="review-text">Nice cover, looks exactly like the picture. A bit slippery but manageable.</p>
                            </div>
                            <div className="review-card">
                                <div className="review-header">
                                    <span className="reviewer-name">Arjun Mehta</span>
                                    <span className="review-rating">★★★★★</span>
                                </div>
                                <p className="review-text">Value for money. Protects the camera bump well.</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="review-card">
                                <div className="review-header">
                                    <span className="reviewer-name">Rahul Kumar</span>
                                    <span className="review-rating">★★★★★</span>
                                </div>
                                <p className="review-text">Great quality and perfect fit! Really loved the fabric texture.</p>
                            </div>
                            <div className="review-card">
                                <div className="review-header">
                                    <span className="reviewer-name">Sneha Singh</span>
                                    <span className="review-rating">★★★★☆</span>
                                </div>
                                <p className="review-text">Nice design, but the size is slightly smaller than expected. Order one size up.</p>
                            </div>
                            <div className="review-card">
                                <div className="review-header">
                                    <span className="reviewer-name">Amit Patel</span>
                                    <span className="review-rating">★★★★★</span>
                                </div>
                                <p className="review-text">Value for money. Delivery was super fast too!</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
