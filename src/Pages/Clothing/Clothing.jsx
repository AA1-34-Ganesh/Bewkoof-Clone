import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../Redux/Product/productSlice';
import './Clothing.css';

const FilterGroup = ({ title, options, selectedOptions, onChange }) => {
    return (
        <div className="filter-group">
            <h4>{title}</h4>
            {options.map((option) => (
                <label key={option}>
                    <input
                        type="checkbox"
                        checked={selectedOptions.includes(option)}
                        onChange={() => onChange(option)}
                    /> {option}
                </label>
            ))}
        </div>
    );
};


const ProductCard = ({ item }) => {

    const originalPrice = item.price + 500;

    return (
        <Link to={`/product/${item.id}`} className="product-card" style={{ textDecoration: 'none' }}>
            <img src={item.image} alt={item.name} />
            <div className="product-details">
                <p className="brand-name">Bewakoof</p>
                <p className="product-name">{item.name}</p>
                <div className="price-box">
                    <span className="price">₹{item.price}</span>
                    <span className="old-price">₹{originalPrice}</span>
                </div>
                {item.sizes && item.sizes.length > 0 && (
                    <div className="sizes-available" style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                        Sizes: {item.sizes.join(', ')}
                    </div>
                )}
            </div>
        </Link>
    );
};

const Clothing = () => {
    const location = useLocation();
    const { category, subcategory } = useParams();
    const dispatch = useDispatch();


    const { items: allProducts, status, error } = useSelector((state) => state.products);
    const [products, setProducts] = useState([]);
    const [pageTitle, setPageTitle] = useState('Clothing');


    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortOrder, setSortOrder] = useState('popular');


    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);


    const filterBySubcategory = (productsList, sub) => {
        if (!sub) return productsList;

        const cleanSub = sub.toLowerCase().replace(/-/g, ' ');

        return productsList.filter(p => {
            const nameLower = p.name.toLowerCase();


            if (cleanSub.includes('t shirt') || cleanSub.includes('tee')) {
                return p.category === 'T-Shirt';
            }
            if (cleanSub.includes('shirt') && !cleanSub.includes('t shirt')) {
                return p.category === 'Shirt';
            }
            if (cleanSub.includes('jeans') || cleanSub.includes('denim')) {
                return p.category === 'Jeans' || nameLower.includes('jeans');
            }

            return nameLower.includes(cleanSub.split(' ')[0]);
        });
    };


    useEffect(() => {
        let filtered = allProducts;
        const path = location.pathname;
        let currentGender = '';

        if (path === '/men' || category === 'men') {
            currentGender = 'men';
            setPageTitle("Men's Clothing");
        } else if (path === '/women' || category === 'women') {
            currentGender = 'women';
            setPageTitle("Women's Clothing");
        } else if (path === '/mobile-covers') {
            filtered = filtered.filter(p => p.category === 'Accessories');
            setPageTitle("Mobile Covers");
        } else {
            setPageTitle("All Clothing");
        }


        if (currentGender) {
            filtered = filtered.filter(p => p.gender === currentGender);
        }


        if (subcategory) {
            filtered = filterBySubcategory(filtered, subcategory);


            const cleanSub = subcategory.replace(/-/g, ' ');
            const genderPrefix = currentGender === 'men' ? "Men's" : "Women's";
            setPageTitle(`${genderPrefix} ${cleanSub.charAt(0).toUpperCase() + cleanSub.slice(1)}`);
        }


        if (selectedCategories.length > 0) {
            filtered = filtered.filter(p => selectedCategories.includes(p.category));
        }

        if (selectedSizes.length > 0) {
            filtered = filtered.filter(p => p.sizes.some(size => selectedSizes.includes(size)));
        }


        if (sortOrder === 'lowToHigh') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'highToLow') {
            filtered.sort((a, b) => b.price - a.price);
        }

        setProducts([...filtered]);

    }, [location, category, subcategory, selectedSizes, selectedCategories, sortOrder, allProducts]);



    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };


    const toggleFilter = (item, setState) => {
        setState(prev => {
            if (prev.includes(item)) {
                return prev.filter(i => i !== item);
            } else {
                return [...prev, item];
            }
        });
    };

    useEffect(() => {
        setSelectedCategories([]);
        setSelectedSizes([]);
    }, [location.pathname]);

    const isMobileCovers = location.pathname === '/mobile-covers';
    const currentCategoryOptions = isMobileCovers
        ? ['Accessories']
        : ['T-Shirt', 'Shirt', 'Fashion', 'Jeans', 'Accessories'];

    const currentSizeOptions = isMobileCovers
        ? ['One Size']
        : ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];

    if (status === 'failed') {

        return (
            <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
                <h3>Error Loading Products</h3>
                <p>Please check your connection or try again later.</p>
                {/* <p>{error}</p> */}
            </div>
        );
    }

    return (
        <div className="clothing-container">
            <div className="filters-sidebar">
                <h3>Filters</h3>
                <FilterGroup
                    title="Category"
                    options={currentCategoryOptions}
                    selectedOptions={selectedCategories}
                    onChange={(opt) => toggleFilter(opt, setSelectedCategories)}
                />

                <FilterGroup
                    title="Size"
                    options={currentSizeOptions}
                    selectedOptions={selectedSizes}
                    onChange={(opt) => toggleFilter(opt, setSelectedSizes)}
                />
            </div>


            <div className="products-grid-container">

                <div className="sort-header">
                    <h2>
                        {pageTitle}
                        <span style={{ fontSize: '16px', color: '#878787', fontWeight: 'normal', marginLeft: '10px' }}>
                            ({products.length} Items)
                        </span>
                    </h2>
                    <select onChange={handleSortChange} value={sortOrder}>
                        <option value="popular">Sort by: Popular</option>
                        <option value="lowToHigh">Price: Low to High</option>
                        <option value="highToLow">Price: High to Low</option>
                    </select>
                </div>


                <div className="products-grid">
                    {products.length > 0 ? (
                        products.map((item) => (
                            <ProductCard key={item.id} item={item} />
                        ))
                    ) : (

                        <div style={{ width: '100%', padding: '20px', textAlign: 'center', color: '#666' }}>
                            <p>No products found matching your filters.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Clothing;
