
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-800 text-white py-6 mt-12">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} Productify. All rights reserved.</p>
                <p className="text-sm text-slate-400 mt-1">A Demo Product Catalog by a World-Class React Engineer</p>
            </div>
        </footer>
    );
};

export default Footer;
