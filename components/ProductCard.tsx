
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const handleAddToCart = () => {
        alert(`${product.name} added to cart! (This is a demo)`);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="relative overflow-hidden">
                <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
                <p className="text-slate-600 flex-grow mb-4">{product.description}</p>
                <div className="flex justify-between items-center mt-auto">
                    <p className="text-2xl font-extrabold text-sky-600">${product.price.toFixed(2)}</p>
                    <button 
                        onClick={handleAddToCart}
                        className="bg-sky-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75 transition-all duration-300 transform group-hover:scale-105"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
