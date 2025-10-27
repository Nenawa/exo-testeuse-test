
import React, { useState, useEffect } from 'react';
import { Product } from './types';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch data from the new backend API, assuming it runs on localhost:3001
                const response = await fetch('http://localhost:3001/api/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: Product[] = await response.json();
                setProducts(data);
                setFilteredProducts(data);
            } catch (e) {
                if (e instanceof Error) {
                    setError(`Failed to fetch products: ${e.message}. Please make sure the API server is running.`);
                } else {
                    setError('An unknown error occurred.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const results = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
    }, [searchTerm, products]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
                <svg className="animate-spin h-10 w-10 text-sky-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-xl font-semibold text-slate-700">Loading Products...</p>
            </div>
        );
    }

    if (error) {
        return (
             <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 p-4">
                <div className="text-center p-8 bg-white shadow-xl rounded-lg border border-red-200 max-w-lg">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h2 className="text-2xl font-bold text-red-700 mb-2">Oops! Something went wrong.</h2>
                    <p className="text-slate-600 mb-6">We couldn't load the products right now. Please try again later.</p>
                    <p className="text-sm text-slate-500 bg-slate-100 p-3 rounded-md font-mono">{error}</p>
                </div>
            </div>
        );
    }

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
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <p className="text-xl text-slate-500">No products found matching your search.</p>
                        <p className="text-slate-400 mt-2">Try searching for something else!</p>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default App;
