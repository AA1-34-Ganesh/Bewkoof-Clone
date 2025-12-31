import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/Product/productSlice';
import ProductCard from '../../Components/ProductCard/ProductCard';

const trendingCategories = [
    { id: 1, name: "Printed T-Shirts", image: `${import.meta.env.VITE_API_URL}/images/men/t-shirt/men_1.jpg` },
    { id: 2, name: "Oversized Tees", image: `${import.meta.env.VITE_API_URL}/images/men/t-shirt/men_11.jpg` },
    { id: 3, name: "Joggers", image: `${import.meta.env.VITE_API_URL}/images/men/pants/men_pants_5.jpg` },
    { id: 4, name: "Vests", image: `${import.meta.env.VITE_API_URL}/images/men/fashion/men_fashion_2.jpg` },
    { id: 5, name: "Full Sleeve Tees", image: `${import.meta.env.VITE_API_URL}/images/men/t-shirt/men_8.jpg` },
    { id: 6, name: "Sweatshirts", image: `${import.meta.env.VITE_API_URL}/images/men/fashion/men_fashion_11.jpg` },
];

const CategoryCard = ({ data }) => {

    const { image, name } = data;

    return (
        <div className="category-card">
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
    );
};

const HomePage = () => {
    const dispatch = useDispatch();
    const { items: allProducts, status } = useSelector((state) => state.products);

    React.useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    const [selectedGender, setSelectedGender] = React.useState('MEN');
    const isMen = selectedGender === 'MEN';

    const menTShirts = allProducts
        .filter(product => product.gender === 'men' && product.category === 'T-Shirt')
        .slice(0, 8);

    const menPants = allProducts
        .filter(product => product.gender === 'men' && product.category === 'Pants')
        .slice(0, 8);

    const menShirts = allProducts
        .filter(product => product.gender === 'men' && product.category === 'Shirt')
        .slice(0, 8);

    const womenFashion = allProducts
        .filter(product => product.gender === 'women' && product.category === 'Fashion')
        .slice(0, 8);

    const womenPants = allProducts
        .filter(product => product.gender === 'women' && product.category === 'Pants')
        .slice(0, 8);

    const accessories = allProducts
        .filter(product => product.category === 'Accessories')
        .slice(0, 8);

    const trendingMen = allProducts.slice(0, 4);
    const newArrivalsWomen = allProducts
        .filter(product => product.category === 'Fashion')
        .slice(0, 4);

    const menSliderImages = [
        { id: 1, src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1920&h=600&fit=crop", alt: "Men's Collection" },
        { id: 2, src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1920&h=600&fit=crop", alt: "New Arrivals" },
        { id: 3, src: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1920&h=600&fit=crop", alt: "Trending Now" },
        { id: 4, src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1920&h=600&fit=crop", alt: "Best Sellers" },
    ];

    const womenSliderImages = [
        { id: 1, src: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&h=600&fit=crop", alt: "Women's Fashion" },
        { id: 2, src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=1920&h=600&fit=crop", alt: "New Collection" },
        { id: 3, src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=600&fit=crop", alt: "Trending Styles" },
        { id: 4, src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&h=600&fit=crop", alt: "Shop Now" },
    ];

    const currentSliderImages = isMen ? menSliderImages : womenSliderImages;

    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

    React.useEffect(() => {
        setCurrentSlideIndex(0);
    }, [selectedGender]);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlideIndex((prevIndex) =>
                prevIndex === currentSliderImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(timer);
    }, [currentSliderImages.length, selectedGender]);

    return (
        <div className="homepage-container">

            <div className="home-sub-nav">
                <div className="gender-toggle-btn">
                    <button
                        className={`gender-btn ${isMen ? 'active' : ''}`}
                        onClick={() => setSelectedGender('MEN')}
                    >
                        MEN
                    </button>
                    <button
                        className={`gender-btn ${!isMen ? 'active' : ''}`}
                        onClick={() => setSelectedGender('WOMEN')}
                    >
                        WOMEN
                    </button>
                </div>
                <ul className="sub-nav-links">
                    <li>LIVE-NOW</li>
                    <li>WINTERWEAR</li>
                    <li>SHOP NOW</li>
                    <li>PLUS SIZE</li>
                    <li>BWKF X GOOGLE AI</li>
                    <li>ACCESSORIES</li>
                </ul>
            </div>

            <div className="horizontal-slider-container">
                <div
                    className="slider-track"
                    style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
                >
                    {currentSliderImages.map((slide) => (
                        <div className="slider-slide" key={slide.id}>
                            <img src={slide.src} alt={slide.alt} />
                        </div>
                    ))}
                </div>


                <div className="slider-dots">
                    {currentSliderImages.map((_, index) => (
                        <span
                            key={index}
                            className={`slider-dot ${index === currentSlideIndex ? 'active' : ''}`}
                            onClick={() => setCurrentSlideIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>


            <div className="section-container">
                <h2 className="section-title">TRENDING CATEGORIES</h2>
                <div className="categories-grid">
                    {trendingCategories.map((category) => (
                        <CategoryCard key={category.id} data={category} />
                    ))}
                </div>
            </div>


            <div className="section-container">
                <h2 className="section-title">TRENDING MEN</h2>
                <div className="designs-grid">
                    {trendingMen.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>


            <div className="section-container">
                <h2 className="section-title">NEW ARRIVALS (WOMEN'S FASHION)</h2>
                <div className="designs-grid">
                    {newArrivalsWomen.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>


            {menTShirts.length > 0 && (
                <div className="section-container">
                    <h2 className="section-title">MEN'S T-SHIRTS</h2>
                    <div className="designs-grid">
                        {menTShirts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            )}


            {womenFashion.length > 0 && (
                <div className="section-container">
                    <h2 className="section-title">WOMEN'S FASHION</h2>
                    <div className="designs-grid">
                        {womenFashion.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            )}


            {menPants.length > 0 && (
                <div className="section-container">
                    <h2 className="section-title">MEN'S PANTS & JEANS</h2>
                    <div className="designs-grid">
                        {menPants.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            )}


            {menShirts.length > 0 && (
                <div className="section-container">
                    <h2 className="section-title">MEN'S SHIRTS</h2>
                    <div className="designs-grid">
                        {menShirts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            )}


            {womenPants.length > 0 && (
                <div className="section-container">
                    <h2 className="section-title">WOMEN'S PANTS & BOTTOMS</h2>
                    <div className="designs-grid">
                        {womenPants.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            )}


            {accessories.length > 0 && (
                <div className="section-container">
                    <h2 className="section-title">ACCESSORIES</h2>
                    <div className="designs-grid">
                        {accessories.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default HomePage;
