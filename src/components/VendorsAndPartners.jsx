import React from 'react';
import { vendors } from '../constants';

const VendorsAndPartners = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-blue-950 py-16">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-white mb-12">
          Our Vendors & Partners
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {vendors.map((vendor, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="h-32 flex items-center justify-center mb-4">
                <img
                  src={vendor.logo}
                  alt={vendor.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-white">{vendor.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorsAndPartners;
