import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((itemCart) => {
        if (itemCart.id === item.id) {
          return { ...item, cantidad: itemCart.cantidad + cantidad };
        } else {
          return itemCart;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const removeItem = (item) => {
    setCart(
      cart.filter((obj) => {
        return obj.id !== item;
      })
    );
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (item) => {
    const validate = cart.some((obj) => obj.id === item);
    return validate;
  };

  //calcular total de unidades en el cartwidget

  //calcular total precio

  return (
    <CartContext.Provider value={{ cart, addItem, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
