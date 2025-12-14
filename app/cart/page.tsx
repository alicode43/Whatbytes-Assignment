'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/cartContext';
import { Trash2, Plus, Minus } from 'lucide-react';

function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
      return total + price * item.quantity;
    }, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-[#002a5c] mb-8">Shopping Cart</h1>
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">Your cart is empty.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-[#002a5c] mb-8">Shopping Cart</h1>
      
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
            <div className="relative w-20 h-20 bg-gray-50 rounded-lg overflow-hidden">
              <Image
                fill
                src={item.image}
                alt={item.name}
                className="object-contain"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#002a5c]">{item.name}</h3>
              <p className="text-gray-600">{item.price}</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-1 rounded"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-gray-700 w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-1 rounded"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            
            <div className="text-lg font-bold text-gray-900">
              ${(parseFloat(item.price.replace(/[^0-9.-]+/g, '')) * item.quantity).toFixed(2)}
            </div>
            
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700 p-2"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">Total:</span>
          <span className="text-2xl font-bold text-[#002a5c]">${getTotalPrice().toFixed(2)}</span>
        </div>
        
        <div className="flex space-x-4">
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors"
          >
            Clear Cart
          </button>
          <button className="bg-[#0056b3] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#004494] transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
