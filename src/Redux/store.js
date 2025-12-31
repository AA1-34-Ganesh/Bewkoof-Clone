import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Cart/cartSlice';
import userReducer from './User/userSlice';
import wishlistReducer from './Wishlist/wishlistSlice';
import productReducer from './Product/productSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        wishlist: wishlistReducer,
        products: productReducer,
    },
});
