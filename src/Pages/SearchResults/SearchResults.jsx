import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from '../../Components/ProductCard/ProductCard';
import './SearchResults.css';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const query = searchParams.get('q') || '';

    const { items: allProducts } = useSelector((state) => state.products);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (query && allProducts.length > 0) {
            const searchLower = query.toLowerCase();
            const results = allProducts.filter(product =>
                product.name.toLowerCase().includes(searchLower) ||
                product.category.toLowerCase().includes(searchLower) ||
                product.gender.toLowerCase().includes(searchLower)
            );
            setFilteredProducts(results);
        } else {
            setFilteredProducts([]);
        }
    }, [query, allProducts]);

    if (!query) {
        return (
            <div className="search-results-container">
                <div className="no-query">
                    <h2>Please enter a search term</h2>
                    <button onClick={() => navigate('/')}>Go to Home</button>
                </div>
            </div>
        );
    }

    return (
        <div className="search-results-container">
            <div className="search-header">
                <h1>Search Results for "{query}"</h1>
                <p>{filteredProducts.length} products found</p>
            </div>

            {filteredProducts.length > 0 ? (
                <div className="search-results-grid">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="no-results">
                    <h2>No products found</h2>
                    <p>Try searching with different keywords</p>
                    <button onClick={() => navigate('/')}>Continue Shopping</button>
                </div>
            )}
        </div>
    );
};

export default SearchResults;
