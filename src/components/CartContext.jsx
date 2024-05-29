import { createContext, useContext, useState } from "react";

const CartContext = createContext("");

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index > -1) {
      const prevCount = cart[index].count;
      const newCount = prevCount + item.count;
      setCart((prevCart) => {
        const newCart = [...prevCart];
        newCart[index].count = newCount;
        return [...newCart];
      });
    } else {
      setCart((prevCart) => [...prevCart, item]);
    }
  };
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
