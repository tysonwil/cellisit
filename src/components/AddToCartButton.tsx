'use client';

import { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function AddToCartButton() {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    // In a real application, this would add the product to the cart
    // For now, we'll just show a success message
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full space-y-4">
      <div className="flex items-center">
        <button
          type="button"
          className="rounded-l-md border border-gray-300 px-3 py-2 text-gray-900 hover:bg-gray-50"
          onClick={decreaseQuantity}
        >
          -
        </button>
        <div className="border-t border-b border-gray-300 px-4 py-2 text-center w-16">
          {quantity}
        </div>
        <button
          type="button"
          className="rounded-r-md border border-gray-300 px-3 py-2 text-gray-900 hover:bg-gray-50"
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>
      
      <button
        type="button"
        className={`flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 ${
          isAdded ? 'bg-green-600 hover:bg-green-700' : 'bg-violet-700 hover:bg-violet-800'
        }`}
        onClick={handleAddToCart}
      >
        <ShoppingCartIcon className="h-5 w-5 mr-2" aria-hidden="true" />
        {isAdded ? 'Added to Cart!' : 'Add to Cart'}
      </button>
    </div>
  );
} 