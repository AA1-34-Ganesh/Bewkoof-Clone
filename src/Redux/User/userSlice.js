import { createSlice } from '@reduxjs/toolkit';

const loadUserFromStorage = () => {
    try {
        const serializedState = localStorage.getItem('user');
        if (serializedState === null) {
            return {
                currentUser: null,
                isAuthenticated: false,
                error: null,
                loading: false,
            };
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return {
            currentUser: null,
            isAuthenticated: false,
            error: null,
            loading: false,
        };
    }
};

const initialState = loadUserFromStorage();

const saveUserToStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('user', serializedState);
    } catch (e) {

    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.isAuthenticated = true;
            state.error = null;
            saveUserToStorage(state);
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
            state.error = null;
            saveUserToStorage(state);
        },
        signupStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signupSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.isAuthenticated = true;
            state.error = null;
            saveUserToStorage(state);
        },
        signupFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export const {
    loginStart, loginSuccess, loginFailure, logout,
    signupStart, signupSuccess, signupFailure
} = userSlice.actions;

export default userSlice.reducer;
