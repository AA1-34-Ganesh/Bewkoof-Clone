import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { id, name, price, image } = product;
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    const originalPrice = price + 500;

    const imageUrl = image.startsWith('http') ? image : `${import.meta.env.VITE_API_URL}${image}`;

    const fallbackImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect width='300' height='400' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%23999'%3EImage Not Available%3C/text%3E%3C/svg%3E";

    const handleImageError = (e) => {
        setImageError(true);
        setImageLoading(false);
    };

    const handleImageLoad = () => {
        setImageError(false);
        setImageLoading(false);
    };

    return (
        <Link to={`/product/${id}`} className="design-card" style={{ textDecoration: 'none' }}>
            <div className="product-image-container">
                {imageLoading && !imageError && (
                    <div className="image-skeleton">
                        <div className="skeleton-shimmer"></div>
                    </div>
                )}
                <img
                    src={imageError ? fallbackImage : imageUrl}
                    alt={name}
                    onError={handleImageError}
                    onLoad={handleImageLoad}
                    style={{ display: imageLoading && !imageError ? 'none' : 'block' }}
                />
            </div>
            <div className="product-info">
                <p className="brand">Bewakoof</p>
                <p className="name">{name}</p>
                <div className="price">
                    <span className="actual-price">₹{price}</span>
                    <span className="original-price">₹{originalPrice}</span>
                    <span className="discount">50% OFF</span>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
