// app/page.tsx
import React from 'react';
import Image from 'next/image';

const featuredIdlis = [
  {
    id: 1,
    name: 'Plain Idli',
    description: 'Classic steamed rice cakes.',
    price: '₹40',
    image: '/images/plain-idli.jpg',
  },
  {
    id: 2,
    name: 'Rava Idli',
    description: 'Idli made with semolina.',
    price: '₹50',
    image: '/images/rava-idli.jpg',
  },
  {
    id: 3,
    name: 'Sambar Idli',
    description: 'Idli soaked in spicy sambar.',
    price: '₹60',
    image: '/images/sambar-idli.jpg',
  },
];

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Idli Shop
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          The best place for authentic South Indian Idlis.
        </p>
        <Image
          src="/images/idli-banner.jpg"
          alt="Idli Banner"
          width={1200}
          height={400}
          className="rounded-xl shadow-lg mx-auto"
        />
      </section>

      {/* Featured Idlis */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Featured Idlis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredIdlis.map((idli) => (
            <div
              key={idli.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={idli.image}
                alt={idli.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {idli.name}
                </h3>
                <p className="text-gray-700 mb-2">{idli.description}</p>
                <p className="text-gray-800 font-bold">{idli.price}</p>
                <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Visit Us Today</h2>
        <p className="text-lg text-gray-700 mb-8">
          Come and enjoy the best Idlis in town!
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">
          Find Us on Google Maps
        </button>
      </section>
    </div>
  );
};

export default HomePage;