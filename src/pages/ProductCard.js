import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../features/cart/cartSlice';

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItem = cartItems.find(item => item._id === product._id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cartItems.push({ ...product, quantity });
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        
        dispatch(addToCart({ ...product, quantity }));
    };

    const handleNavigate = () => {
        navigate(`/product/${product._id}`);
    };

    return (
        <div className="group ml-2 my-5 flex w-full max-w-xs flex-col overflow-hidden rounded-md border border-gray-100 bg-white shadow-sm transform transition-transform duration-300 hover:scale-105">
            <button onClick={handleNavigate} className="relative mx-2 mt-2 flex h-40 overflow-hidden rounded-md">
                <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={product.imageUrl} alt={product.name} />
            </button>
            <div className="mt-3 px-4 pb-4">
                <h5 className="text-lg tracking-tight text-slate-900">{product.name}</h5>
                <div className="mt-1 mb-4 flex items-center justify-between">
                    <p>
                        <span className="text-2xl font-bold text-slate-900">${product.price}</span>
                    </p>
                </div>
                <div className="mt-3">
                    <label className="block text-gray-700 text-xs font-bold mb-1" htmlFor="quantity">
                        Quantity
                    </label>
                    <input
                        id="quantity"
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    onClick={handleAddToCart}
                    className="flex items-center justify-center rounded-md bg-[#97644E] px-3 py-2 text-center text-xs font-medium text-white hover:bg-gray-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-3"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
