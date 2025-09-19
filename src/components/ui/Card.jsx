import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Card = ({ product, showButton = true }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="aspect-w-16 aspect-h-12 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
            {product.title}
          </h3>
          <span className="text-lg font-bold text-blue-600 ml-2">
            {product.price}
          </span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
            {product.category}
          </span>
          {showButton && (
            <Link to={`/product/${product.id}`}>
              <Button variant="primary" size="sm">
                View Details
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
