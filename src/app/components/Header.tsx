// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center py-4">
                <Link href="/" className="text-2xl font-bold text-gray-800">
                    Idli Shop
                </Link>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="text-gray-700 hover:text-gray-900">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-gray-700 hover:text-gray-900">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;