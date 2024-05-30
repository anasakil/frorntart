import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../features/products/productsSlice'; // Adjust the path as necessary
import { addToCart } from '../features/cart/cartSlice'; // Adjust the path as necessary

const sharedClasses = {
    textZinc: 'text-zinc-700 dark:text-zinc-300',
    textZincDark: 'text-zinc-600 dark:text-zinc-400',
    buttonPrimary: 'bg-blue-600 text-white px-6 py-2 rounded-md',
    buttonSecondary: 'border border-blue-600 text-blue-600 px-6 py-2 rounded-md',
    inputField: 'w-12 p-2 border border-zinc-300 rounded-md text-center',
};

const ProductDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.products.find(p => p._id === id));
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (!product) {
            dispatch(fetchProductById(id));
        }
        document.title=product.name;
    }, [dispatch, id, product]);

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

    const handleBuyNow = () => {
        handleAddToCart();
        navigate('/checkout');
    };

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'failed') {
        return <p>{error}</p>;
    }

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <br /><br />
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <img src={product.imageUrl} alt={product.name} className="w-full rounded-lg" crossorigin="anonymous" />
                </div>
                <div className="flex-1">
                    <h1 className="text-2xl font-bold">{product.name}</h1>
                    <p className={`${sharedClasses.textZinc} text-xl mt-2`}>${product.price}</p>
                    <p className={`${sharedClasses.textZinc} mt-4`}>
                        {product.description}
                    </p>
                    {product.features && product.features.length > 0 && (
                        <ul className={`${sharedClasses.textZinc} list-disc list-inside mt-4`}>
                            {product.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    )}
                    <p className={`${sharedClasses.textZinc} mt-2`}>Region: {product.region}</p>
                    <p className={`${sharedClasses.textZinc} mt-2`}>Stock: {product.stock}</p>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                            Quantity
                        </label>
                        <input
                            id="quantity"
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            className={sharedClasses.inputField}
                        />
                    </div>
                    <div className="flex items-center mt-6">
                        <button
                            onClick={handleAddToCart}
                            className={`ml-4 ${sharedClasses.buttonPrimary}`}
                        >
                            Add to Cart
                        </button>
                    </div>
                    <button onClick={handleBuyNow} className={`${sharedClasses.buttonSecondary} mt-4 w-full`}>
                        Buy Now
                    </button>
                    <div className={`${sharedClasses.textZincDark} text-sm mt-4`}>
                        <p>Free worldwide shipping on all orders over $100</p>
                        <p>Delivers in 3-7 Working Days <a href="/" className="text-blue-600">Shipping & Returns</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
