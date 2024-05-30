// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.items.find(item => item._id === action.payload._id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.items.push({ ...action.payload, quantity: action.payload.quantity });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item._id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        updateQuantity: (state, action) => {
            const item = state.items.find(item => item._id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        setCart: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const { addToCart, removeFromCart, clearCart, updateQuantity, setCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;
