import { createSlice } from '@reduxjs/toolkit';

const loadWishlistFromStorage = () => {
    try {
        const serializedState = localStorage.getItem('wishlist');
        if (serializedState === null) {
            return { wishlistItems: [] };
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return { wishlistItems: [] };
    }
};

const initialState = loadWishlistFromStorage();

const saveWishlistToStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('wishlist', serializedState);
    } catch (e) {
      
    }
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.wishlistItems.find((item) => item.id === newItem.id);

            if (!existingItem) {
                state.wishlistItems.push(newItem);
                saveWishlistToStorage(state);
            }
        },
        removeFromWishlist: (state, action) => {
            const id = action.payload;
            state.wishlistItems = state.wishlistItems.filter((item) => item.id !== id);
            saveWishlistToStorage(state);
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
