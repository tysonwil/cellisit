'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Cellisit 201 Anti-Hairloss Therapy Shampoo',
      price: 59.99,
      quantity: 1,
    },
  ]);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 75 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>

        <div className="mt-12">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium text-gray-900">Your cart is empty</h2>
              <p className="mt-4 text-gray-500">
                Looks like you haven't added any products to your cart yet.
              </p>
              <div className="mt-6">
                <Link
                  href="/shop"
                  className="rounded-md bg-violet-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          ) : (
            <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
              <div className="lg:col-span-7">
                <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex py-6 sm:py-10">
                      <div className="flex-shrink-0">
                        <div className="h-24 w-24 rounded-md overflow-hidden relative bg-violet-100 flex items-center justify-center">
                          <p className="text-violet-700 text-xs font-medium">Cellisit 201</p>
                        </div>
                      </div>

                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <Link href="/shop" className="font-medium text-gray-700 hover:text-gray-800">
                                  {item.name}
                                </Link>
                              </h3>
                            </div>
                            <p className="mt-1 text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                          </div>

                          <div className="mt-4 sm:mt-0 sm:pr-9">
                            <label htmlFor={`quantity-${item.id}`} className="sr-only">
                              Quantity, {item.name}
                            </label>
                            <div className="flex items-center">
                              <button
                                type="button"
                                className="rounded-l-md border border-gray-300 px-3 py-2 text-gray-900 hover:bg-gray-50"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <div className="border-t border-b border-gray-300 px-4 py-2 text-center w-16">
                                {item.quantity}
                              </div>
                              <button
                                type="button"
                                className="rounded-r-md border border-gray-300 px-3 py-2 text-gray-900 hover:bg-gray-50"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>

                            <div className="absolute right-0 top-0">
                              <button
                                type="button"
                                className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => removeItem(item.id)}
                              >
                                <span className="sr-only">Remove</span>
                                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
                <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">Subtotal</p>
                    <p className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-600">Shipping</p>
                    <p className="text-sm font-medium text-gray-900">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <p className="text-base font-medium text-gray-900">Order total</p>
                    <p className="text-base font-medium text-gray-900">${total.toFixed(2)}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full rounded-md border border-transparent bg-violet-700 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Checkout
                  </button>
                </div>
                <div className="mt-6 text-center text-sm text-gray-500">
                  <p>
                    or{' '}
                    <Link href="/shop" className="font-medium text-violet-700 hover:text-violet-600">
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 