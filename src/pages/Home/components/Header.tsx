import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="w-full h-20 lg:h-20 max-w-screen-lg mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center">
                <img src="/path-to-logo.png" alt="Logo" className="h-10 w-10" />
                <span className="ml-2 text-xl font-bold">Your Logo</span>
            </div>
            <nav className="hidden md:flex space-x-4">
                <a href="#home" className="text-gray-700 hover:text-gray-900">Home</a>
                <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
                <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
                <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </nav>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Sign Up
            </button>
        </header>
    );
};

export default Header;