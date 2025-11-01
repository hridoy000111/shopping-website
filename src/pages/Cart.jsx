// src/components/Cart.jsx
import React from "react";
import { useCart } from "../components/CartContext";

const Cart = () => {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart, totalAmount } =
    useCart();

  return (
    <div className="max-w-6xl mx-auto mt-20 pt-20">
      <h2 className="text-3xl font-bold text-center mb-8">Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty 🛍️</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Item List */}
          <div className="md:col-span-2 border rounded-lg p-4">
            <h3 className="font-semibold mb-3 border-b pb-2">Item List</h3>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-3 border-b"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain"
                  />
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                <div>
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3 border-b pb-2">Order Summary</h3>
            <p className="flex justify-between mb-2">
              <span>Products ({cartItems.length})</span>
              <span>${totalAmount.toFixed(2)}</span>
            </p>
            <p className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>$30</span>
            </p>
            <hr className="my-2" />
            <p className="flex justify-between font-semibold mb-4">
              <span>Total amount</span>
              <span>${(totalAmount + 30).toFixed(2)}</span>
            </p>
            <button className="bg-black text-white w-full py-2 rounded-lg hover:bg-gray-800">
              Go to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
