
import React, { useState, useEffect } from 'react';
import { Product } from './types';
import { mockProducts } from './data/products';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Simulate fetching data from an API
        setProducts(mockProducts);
        setFilteredProducts(mockProducts);
    }, []);

    useEffect(() => {
        const results = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
    }, [searchTerm, products]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">Our Exclusive Collection</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Discover our curated selection of high-quality products, designed to inspire and delight.</p>
                </div>
                
                <div className="mb-8 max-w-lg mx-auto">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-xl text-slate-500">No products found matching your search.</p>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default App;
