// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-12">
            <div className="container mx-auto text-center">
                <p>
                    &copy; {new Date().getFullYear()} Idli Shop. All rights reserved.
                </p>
                <div className="mt-4">
                    <a href="#" className="hover:text-gray-300 mr-4">
                        Facebook
                    </a>
                    <a href="#" className="hover:text-gray-300 mr-4">
                        Twitter
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        Instagram
                    </a>
                </div>
                <p className="mt-2">
                    Contact: example@idlishop.com | +91-XXXXXXXXXX | Address
                </p>
            </div>
        </footer>
    );
};

export default Footer;