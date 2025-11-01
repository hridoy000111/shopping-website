// src/context/CartContext.jsx
import { createContext, useContext, useState } from "react";

// Context তৈরি করছি
const CartContext = createContext();

// Custom hook (সহজে ব্যবহার করার জন্য)
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // 🛒 Product cart এ add করা
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        // quantity বাড়াও
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // নতুন করে add করো
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // ➖ quantity কমানো
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ❌ Remove item সম্পূর্ণভাবে মুছে ফেলা
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 💰 মোট দাম গণনা করা
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
