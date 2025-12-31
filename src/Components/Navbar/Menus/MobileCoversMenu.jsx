import React from 'react';
import { Link } from 'react-router-dom';
import './Menus.css';

const MobileCoversMenu = () => {
    return (
        <div className="mega-menu-content">
            <div className="menu-column">
                <h4>Nothing</h4>
                <Link to="/covers-nothing-3a">Nothing Phone 3a</Link>
                <Link to="/covers-nothing-cmf-1">Nothing CMF Phone 1</Link>
                <Link to="/covers-nothing-2">Nothing Phone 2</Link>
                <Link to="/covers-nothing-2a">Nothing Phone 2a Covers & Cases</Link>
                <Link to="/covers-nothing-1">Nothing Phone 1</Link>

                <h4 style={{ marginTop: '20px' }}>Xiaomi</h4>
                <Link to="/covers-xiaomi-12-pro-plus">Xiaomi Redmi Note 12 Pro Plus 5G</Link>
                <Link to="/covers-xiaomi-10-pro">Xiaomi Redmi Note 10 Pro 5G</Link>
                <Link to="/covers-xiaomi-12">Xiaomi Redmi Note 12 5G</Link>
            </div>
            <div className="menu-column">
                <h4>Google Pixel</h4>
                <Link to="/covers-pixel-8">Google Pixel 8</Link>
                <Link to="/covers-pixel-8a-pro">Google Pixel 8a pro</Link>
                <Link to="/covers-pixel-8a">Google Pixel 8A</Link>
                <Link to="/covers-pixel-7a">Google Pixel 7A</Link>
                <Link to="/covers-pixel-6a">Google Pixel 6A</Link>

                <h4 style={{ marginTop: '20px' }}>Oneplus</h4>
                <Link to="/covers-oneplus-nord-5">OnePlus Nord 5 5G</Link>
                <Link to="/covers-oneplus-nord-ce5">OnePlus Nord CE5 5G</Link>
                <Link to="/covers-oneplus-13">OnePlus 13</Link>
                <Link to="/covers-oneplus-nord-ce4">OnePlus Nord CE4 Lite</Link>
            </div>
            <div className="menu-column">
                <h4>Apple</h4>
                <Link to="/covers-iphone-17-pro-max">iPhone 17 Pro Max</Link>
                <Link to="/covers-iphone-17-pro">iPhone 17 Pro</Link>
                <Link to="/covers-iphone-17-air">iPhone 17 Air</Link>
                <Link to="/covers-iphone-17">iPhone 17</Link>
                <Link to="/covers-iphone-16-pro-max">iPhone 16 Pro Max</Link>
                <Link to="/covers-iphone-16-pro">iPhone 16 Pro</Link>
                <Link to="/covers-iphone-16-plus">iPhone 16 Plus</Link>
                <Link to="/covers-iphone-16">iPhone 16</Link>
                <Link to="/covers-iphone-15-pro-max">iPhone 15 Pro max</Link>
                <Link to="/covers-iphone-15-pro">iPhone 15 Pro</Link>
            </div>
            <div className="menu-column">
                <h4>Realme</h4>
                <Link to="/covers-realme-15-pro">Realme 15 Pro 5G</Link>
                <Link to="/covers-realme-13-pro-plus">Realme 13 Pro Plus 5G</Link>
                <Link to="/covers-realme-13-plus">Realme 13 Plus 5G</Link>
                <Link to="/covers-realme-13">Realme 13 5G</Link>
                <Link to="/covers-realme-gt7">Realme Gt7 Pro</Link>
                <Link to="/covers-realme-11x">Realme 11X 5G</Link>
                <Link to="/covers-realme-11">Realme 11 5G</Link>
                <Link to="/covers-realme-10">Realme 10</Link>
                <Link to="/covers-realme-8s">Realme 8S 5G</Link>
                <Link to="/covers-realme-c65">Realme C65 5G</Link>
            </div>
            <div className="menu-column">
                <h4>Oppo</h4>
                <Link to="/covers-oppo-reno11-pro">Oppo Reno11 Pro 5G</Link>
                <Link to="/covers-oppo-a3-pro">Oppo A3 Pro 5G</Link>
                <Link to="/covers-oppo-reno11-pro-2">Oppo Reno11 Pro 5G</Link>
                <Link to="/covers-oppo-a3-pro-2">Oppo A3 Pro 5G</Link>
                <Link to="/covers-oppo-reno11-pro-3">Oppo Reno11 Pro 5G</Link>
                <Link to="/covers-oppo-a79">Oppo A79 5G</Link>
                <Link to="/covers-oppo-a38">Oppo A38</Link>
                <Link to="/covers-oppo-a18">Oppo A18</Link>
                <Link to="/covers-oppo-reno12-pro">Oppo Reno12 Pro 5G</Link>
                <Link to="/covers-oppo-f27">Oppo F27 Pro Plus</Link>
            </div>
            <div className="menu-column banner-column">
                <img src="https://images.bewakoof.com/nav_menu/Hardcore-Gamer-1668772678.jpg" alt="Hardcore Gamer" className="menu-banner" />
                <button className="shop-now-btn">Shop Now</button>
            </div>
        </div>
    );
};

export default MobileCoversMenu;
