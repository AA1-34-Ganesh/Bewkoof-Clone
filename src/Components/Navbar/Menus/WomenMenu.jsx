import React from 'react';
import { Link } from 'react-router-dom';
import './Menus.css';

const WomenMenu = () => {
    return (
        <div className="mega-menu-content">
            <div className="menu-column">
                <h4>Topwear</h4>
                <Link to="/women-topwear">All Topwear</Link>
                <Link to="/women-tshirts">All T-Shirts</Link>
                <Link to="/women-hoodies">Hoodies</Link>
                <Link to="/women-sweatshirts">Sweatshirts</Link>
                <Link to="/women-jackets">Jackets</Link>
                <Link to="/women-sweaters">Sweaters</Link>
                <Link to="/women-oversized">Oversized T-Shirts</Link>
                <Link to="/women-boyfriend">Boyfriend T-Shirts</Link>
                <Link to="/women-classic">Classic Fit T-Shirts</Link>
                <Link to="/women-shirts">All Shirts</Link>
                <Link to="/women-half-sleeve">Half Sleeves T-Shirts</Link>
                <Link to="/women-printed">Printed T-Shirts</Link>
                <Link to="/women-plain">Plain T-Shirts</Link>
                <Link to="/women-plus-top">Plus Size Topwear</Link>
                <Link to="/women-customize">Customize T-shirts</Link>
                <Link to="/women-fashion-tops">Fashion Tops</Link>
                <Link to="/women-dresses">Dresses</Link>
                <Link to="/women-coord">Co-ord Sets</Link>
                <Link to="/women-combo-3">Buy 3 for 1099</Link>
                <Link to="/women-combo-2">Buy 2 for 1099</Link>
                <Link to="/women-full-sleeve">Full Sleeve T-Shirts</Link>
                <Link to="/women-windcheaters">Windcheaters</Link>
                <Link to="/women-sweat-hoodies">Sweatshirts & Hoodies</Link>
            </div>
            <div className="menu-column">
                <h4>Bottomwear</h4>
                <Link to="/women-bottomwear">All Bottomwear</Link>
                <Link to="/women-joggers">Warm Joggers</Link>
                <Link to="/women-trackpants">Trackpants</Link>
                <Link to="/women-trousers">Trousers & Pants</Link>
                <Link to="/women-jeans">Jeans</Link>
                <Link to="/women-pajamas">Pajamas</Link>
                <Link to="/women-shorts">Shorts</Link>
                <Link to="/women-plus-bottom">Plus Size Bottomwear</Link>
                <Link to="/women-cargos">Cargos</Link>
                <Link to="/women-cargo-joggers">Cargo Joggers</Link>
                <Link to="/women-cargo-pants">Cargo Pants</Link>
                <Link to="/women-parachute">Parachute pants</Link>
                <Link to="/women-korean">Korean Pants</Link>
                <Link to="/women-wide-leg">Wide Leg Jeans</Link>
                <Link to="/women-joggers-offer">Buy 2 Joggers at 1599</Link>
                <Link to="/women-pajamas-offer">Buy 2 Pajamas at 1099</Link>
                <Link to="/women-baggy-jeans">Baggy Jeans</Link>
                <Link to="/women-straight-jeans">Straight Fit Jeans</Link>
                <Link to="/women-bottom-coord">Co-ord Sets</Link>
            </div>
            <div className="menu-column">
                <h4>Winterwear</h4>
                <Link to="/women-winterwear">All Winterwear</Link>
                <Link to="/women-winter-hoodies">Hoodies</Link>
                <Link to="/women-winter-sweatshirts">Sweatshirts</Link>
                <Link to="/women-winter-jackets">Jackets</Link>
                <Link to="/women-winter-sweaters">Sweaters</Link>
                <Link to="/women-winter-windcheaters">Windcheaters</Link>
                <Link to="/women-winter-coord">Co-ord Sets</Link>
                <Link to="/women-winter-sweat-hoodies">Sweatshirts & Hoodies</Link>

                <h4 style={{ marginTop: '20px' }}>Plus Size</h4>
                <Link to="/women-plus-all">All Plus-Size</Link>
                <Link to="/women-plus-topwear">All Topwear</Link>
                <Link to="/women-plus-bottomwear">All Bottomwear</Link>
                <Link to="/women-plus-tshirts">All T-shirts</Link>
                <Link to="/women-plus-shirts">All Shirts</Link>
                <Link to="/women-plus-joggers">Warm Joggers</Link>
                <Link to="/women-plus-pants">Pants & Trousers</Link>
                <Link to="/women-plus-pajamas">Pajamas</Link>
                <Link to="/women-plus-tops">Tops</Link>
                <Link to="/women-plus-dresses">Dresses</Link>
                <Link to="/women-plus-hoodies">Hoodies</Link>
                <Link to="/women-plus-sweatshirts">Sweatshirts</Link>
                <Link to="/women-plus-jackets">Jackets</Link>
            </div>
            <div className="menu-column">
                <h4>Footwear</h4>
                <Link to="/women-sliders">Sliders</Link>

                <h4 style={{ marginTop: '20px' }}>Accessories</h4>
                <Link to="/women-mobile-covers">Mobile Covers</Link>
                <Link to="/women-bags">Bags & Backpacks</Link>
                <Link to="/women-sling-bags">Sling bags</Link>
                <Link to="/women-duffel-bags">Duffel bags</Link>
                <Link to="/women-caps">Caps</Link>

                <h4 style={{ marginTop: '20px' }}>Top Sellers</h4>
                <Link to="/women-best-tshirts">Best of T-shirts</Link>
                <Link to="/women-best-bf-tshirts">Best of BF T-shirts</Link>
                <Link to="/women-best-joggers">Best of Joggers</Link>
                <Link to="/women-best-jeans">Best of Jeans</Link>
                <Link to="/women-best-pajamas">Best of Pajamas</Link>
                <Link to="/women-best-winter">Best of Winterwear</Link>
            </div>
            <div className="menu-column specials-column">
                <h4>SPECIALS</h4>
                <div className="special-item">
                    <img src="https://images.bewakoof.com/nav_menu/Rashmika-Mandanna-1668772678.jpg" alt="Rashmika" />
                    <span>Bwkf X Rashmika Mandanna</span>
                </div>
                <div className="special-item">
                    <img src="https://images.bewakoof.com/nav_menu/Winterwear-Collection-1668772678.jpg" alt="Winter" />
                    <span>Winterwear Collection</span>
                </div>
                <div className="special-item">
                    <img src="https://images.bewakoof.com/nav_menu/Acid-Wash-Drip-1668772678.jpg" alt="Acid Wash" />
                    <span>Acid Wash Drip</span>
                </div>
                <div className="special-item">
                    <img src="https://images.bewakoof.com/nav_menu/Yellow-Friday-Sale-1668772678.jpg" alt="Sale" />
                    <span>Yellow Friday Sale</span>
                </div>
            </div>
        </div>
    );
};

export default WomenMenu;
