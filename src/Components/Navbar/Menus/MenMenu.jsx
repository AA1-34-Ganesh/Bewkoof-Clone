import React from 'react';
import { Link } from 'react-router-dom';
import './Menus.css';

const MenMenu = () => {
    return (
        <div className="mega-menu-content">
            <div className="menu-column">
                <h4>Topwear</h4>
                <Link to="/men-topwear">All Topwear</Link>
                <Link to="/men-tshirts">All T-Shirts</Link>
                <Link to="/men-shirts">All Shirts</Link>
                <Link to="/men-hoodies">Hoodies</Link>
                <Link to="/men-sweatshirts">Sweatshirts</Link>
                <Link to="/men-jackets">Jackets</Link>
                <Link to="/men-sweaters">Sweaters</Link>
                <Link to="/men-polo">Polo T-Shirts</Link>
                <Link to="/men-oversized">Oversized T-shirts</Link>
                <Link to="/men-classic">Classic Fit T-shirts</Link>
                <Link to="/men-half-sleeve">Half Sleeve T-Shirts</Link>
                <Link to="/men-printed">Printed T-Shirts</Link>
                <Link to="/men-plain">Plain T-Shirts</Link>
                <Link to="/men-plus-top">Plus Size Topwear</Link>
                <Link to="/men-customize">Customize T-shirts</Link>
                <Link to="/men-vests">Vests</Link>
                <Link to="/men-coord">Co-ord Sets</Link>
                <Link to="/men-combo-3">Buy 3 for 1099</Link>
                <Link to="/men-combo-2">Buy 2 for 1099</Link>
                <Link to="/men-full-sleeve">Full Sleeve T-Shirts</Link>
                <Link to="/men-windcheaters">Windcheaters</Link>
                <Link to="/men-sweat-hoodies">Sweatshirts & Hoodies</Link>
            </div>
            <div className="menu-column">
                <h4>Bottomwear</h4>
                <Link to="/men-bottomwear">All Bottomwear</Link>
                <Link to="/men-joggers">Warm Joggers</Link>
                <Link to="/men-trackpants">Trackpants</Link>
                <Link to="/men-trousers">Trousers & Pants</Link>
                <Link to="/men-jeans">Jeans</Link>
                <Link to="/men-pajamas">Pajamas</Link>
                <Link to="/men-shorts">Shorts</Link>
                <Link to="/men-boxers">Boxers</Link>
                <Link to="/men-plus-bottom">Plus Size Bottomwear</Link>
                <Link to="/men-cargos">Cargos</Link>
                <Link to="/men-cargo-joggers">Cargo Joggers</Link>
                <Link to="/men-cargo-pants">Cargo Pants</Link>
                <Link to="/men-parachute">Parachute Pants</Link>
                <Link to="/men-joggers-offer">Buy 2 Joggers at 1599</Link>
                <Link to="/men-pajamas-offer">Buy 2 Pajamas at 1099</Link>
                <Link to="/men-baggy-jeans">Baggy Jeans</Link>
                <Link to="/men-straight-jeans">Straight Fit Jeans</Link>
                <Link to="/men-baggy-pants">Baggy Pants</Link>
                <Link to="/men-bottom-coord">Co-ord Sets</Link>
            </div>
            <div className="menu-column">
                <h4>Winterwear</h4>
                <Link to="/men-winterwear">All Winterwear</Link>
                <Link to="/men-winter-hoodies">Hoodies</Link>
                <Link to="/men-winter-sweatshirts">Sweatshirts</Link>
                <Link to="/men-winter-jackets">Jackets</Link>
                <Link to="/men-winter-sweaters">Sweaters</Link>
                <Link to="/men-winter-windcheaters">Windcheaters</Link>
                <Link to="/men-winter-coord">Co-ord Sets</Link>
                <Link to="/men-winter-sweat-hoodies">Sweatshirts & Hoodies</Link>
                <Link to="/men-winter-plus">Plus Size</Link>

                <h4 style={{ marginTop: '20px' }}>Plus Size</h4>
                <Link to="/men-plus-all">All Plus-size</Link>
                <Link to="/men-plus-topwear">All Topwear</Link>
                <Link to="/men-plus-bottomwear">All Bottomwear</Link>
                <Link to="/men-plus-tshirts">All T-shirts</Link>
                <Link to="/men-plus-joggers">Warm Joggers</Link>
                <Link to="/men-plus-pants">Pants & Trousers</Link>
                <Link to="/men-plus-jeans">Jeans</Link>
                <Link to="/men-plus-pajamas">Pajamas</Link>
                <Link to="/men-plus-hoodies">Hoodies</Link>
                <Link to="/men-plus-sweatshirts">Sweatshirts</Link>
                <Link to="/men-plus-jackets">Jackets</Link>
            </div>
            <div className="menu-column">
                <h4>Footwear</h4>
                <Link to="/men-sneakers">Bewakoof Sneakers</Link>
                <Link to="/men-clogs">Clogs</Link>
                <Link to="/men-sliders">Sliders</Link>
                <Link to="/men-casual-shoes">Casual Shoes</Link>

                <h4 style={{ marginTop: '20px' }}>Accessories</h4>
                <Link to="/men-mobile-covers">Mobile covers</Link>
                <Link to="/men-backpacks">Backpacks</Link>
                <Link to="/men-sling-bags">Sling bags</Link>
                <Link to="/men-duffel-bags">Duffel bags</Link>
                <Link to="/men-caps">Caps</Link>

                <h4 style={{ marginTop: '20px' }}>Top Sellers</h4>
                <Link to="/men-best-tshirts">Best of T-shirts</Link>
                <Link to="/men-best-cargos">Best of Cargos</Link>
                <Link to="/men-best-joggers">Best of Joggers</Link>
                <Link to="/men-best-jeans">Best of Jeans</Link>
                <Link to="/men-best-shirts">Best of Shirts</Link>
                <Link to="/men-best-pajamas">Best of Pajamas</Link>
                <Link to="/men-best-boxers">Best of Boxers</Link>
                <Link to="/men-best-footwear">Best of Footwear</Link>
                <Link to="/men-best-plus">Best of Plus-size</Link>
                <Link to="/men-best-winter">Best of Winterwear</Link>
            </div>
            <div className="menu-column specials-column">
                <h4>SPECIALS</h4>
                <div className="special-item">
                    <img src="https://images.bewakoof.com/nav_menu/Yellow-Friday-Sale-1668772678.jpg" alt="Sale" />
                    <span>Yellow Friday Sale</span>
                </div>
                <div className="special-item">
                    <img src="https://images.bewakoof.com/nav_menu/Live-Now-1668772678.jpg" alt="Live" />
                    <span>Live Now</span>
                </div>
                <div className="special-item">
                    <img src="https://images.bewakoof.com/nav_menu/Winterwear-Collection-1668772678.jpg" alt="Winter" />
                    <span>Winterwear Collection</span>
                </div>
                <div className="special-item">
                    <img src="https://images.bewakoof.com/nav_menu/Shop-Now-1668772678.jpg" alt="Shop" />
                    <span>Shop Now</span>
                </div>
            </div>
        </div>
    );
};

export default MenMenu;
