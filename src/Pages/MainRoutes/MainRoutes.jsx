import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Clothing from '../Clothing/Clothing';
import AuthPage from '../AuthPage/AuthPage';
import CartPage from '../CartPage/CartPage';
import SingleProduct from '../SingleProduct/SingleProduct';
import Shipping from '../Shipping/Shipping';
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import WishlistPage from '../WishlistPage/WishlistPage';
import SearchResults from '../SearchResults/SearchResults';
import ContactUs from '../ContactUs/ContactUs';

import OrdersPage from '../OrdersPage/OrdersPage';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/men" element={<Clothing />} />
            <Route path="/women" element={<Clothing />} />
            <Route path="/mobile-covers" element={<Clothing />} />
            <Route path="/:category/:subcategory" element={<Clothing />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/payment" element={<PaymentMethod />} />
            <Route path="/orders" element={<OrdersPage />} />
        </Routes>
    );
};

export default MainRoutes;
