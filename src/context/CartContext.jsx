import { useState, createContext } from "react";

export const CartContext = createContext();
const tempChart = [
  {
    id: 1,
    title: "rr",
    price: 543,
    quantity: 5,
    image:
      "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
  },
  {
    id: 2,
    title: "gh",
    price: 83,
    quantity: 6,
    image:
      "https://t4.ftcdn.net/jpg/03/03/62/45/360_F_303624505_u0bFT1Rnoj8CMUSs8wMCwoKlnWlh5Jiq.jpg",
  },
  {
    id: 3,
    title: "kj",
    price: 51,
    quantity: 2,
    image:
      "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
  },
];
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    // JSON.parse(localStorage.getItem('cart')) || []
    tempChart
  );

  //cart methods

  const addItemToCart = (item) => {
    setCart([...cart, item]);
    localStorage.setItem("cart", JSON.stringify([...cart, item]));
  };

  const removeItemFromCart = (id) => {
    setCart(cart.filter((cartItem) => cartItem.id !== id));
    localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter((cartItem) => cartItem.id !== id))
    );
  };

  const isInCart = (itemId) => cart.some((cartItem) => cartItem.id === itemId);

  const amountOfItemsInCart = () =>
    cart.reduce((acc, item) => (acc += item.quantity), 0);

  const totalCartPrice = () =>
    cart.reduce((acc, item) => (acc += item.price * item.quantity), 0);

  const resetCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItemToCart,
        removeItemFromCart,
        isInCart,
        amountOfItemsInCart,
        totalCartPrice,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
