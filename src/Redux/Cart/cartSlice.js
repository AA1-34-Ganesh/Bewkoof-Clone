import { createSlice } from '@reduxjs/toolkit';

const loadCartFromStorage = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        if (serializedState === null) {
            return {
                cartItems: [],
                totalAmount: 0,
                totalItems: 0,
            };
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return {
            cartItems: [],
            totalAmount: 0,
            totalItems: 0,
        };
    }
};

const initialState = loadCartFromStorage();

const saveCartToStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState);
    } catch (e) {

    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id && item.size === newItem.size);

            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += newItem.price;
            } else {
                state.cartItems.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            }

            state.totalAmount += newItem.price;
            state.totalItems += 1;
            saveCartToStorage(state);
        },
        removeFromCart: (state, action) => {
            const { id, size } = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id && item.size === size);

            if (existingItem) {
                state.totalAmount -= existingItem.totalPrice;
                state.totalItems -= existingItem.quantity;
                state.cartItems = state.cartItems.filter((item) => !(item.id === id && item.size === size));
            }
            saveCartToStorage(state);
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalAmount = 0;
            state.totalItems = 0;
            saveCartToStorage(state);
        }
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
