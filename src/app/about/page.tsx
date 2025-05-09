// app/about/page.tsx
import React from 'react';
import Image from 'next/image';

const AboutPage: React.FC = () => {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Our Story
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Idli Shop started as a small family business in 1990. We've been
                        serving delicious and authentic Idlis ever since. Our passion for
                        quality ingredients and traditional recipes sets us apart.
                    </p>
                    <p className="text-gray-700 mb-4">
                        We believe in providing a warm and welcoming atmosphere for our
                        customers. Every Idli is made with love and care, ensuring a
                        taste that reminds you of home.
                    </p>
                    <p className="text-gray-700">
                        Come and experience the taste of tradition at Idli Shop!
                    </p>
                </div>
                <div>
                    <Image
                        src="/images/Idli-shop-interior.jpeg"
                        alt="Idli Shop Interior"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-md"
                    />
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Our Unique Selling Points
                </h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Freshly made Idlis every day</li>
                    <li>Authentic South Indian recipes</li>
                    <li>High-quality, locally sourced ingredients</li>
                    <li>Warm and friendly service</li>
                    <li>Clean and hygienic environment</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutPage;