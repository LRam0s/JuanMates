import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((itemCart) => {
        if (itemCart.id === item.id) {
          return { ...item, cantidad: cantidad };
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

  const itemWidget = () => {
    let aux = 0;
    cart.forEach((prod) => {
      aux += prod.cantidad;
    });
    return aux;
  };
  const totalPrice = () => {
    let aux = 0;
    cart.forEach((prod) => {
      aux += prod.cantidad * prod.price;
    });
    return aux;
  };

  const getProductQuantity = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.cantidad;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clear,
        removeItem,
        totalPrice,
        itemWidget,
        getProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
