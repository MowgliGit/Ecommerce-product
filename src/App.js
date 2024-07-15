import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, count: item.count + product.count }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, product]);
    }

    setCartCount(cartCount + product.count);
  };

  const removeFromCart = (productId) => {
    const productToRemove = cartItems.find((item) => item.id === productId);

    if (!productToRemove) {
      return;
    }

    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    setCartCount(cartCount - productToRemove.count);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);

    if (!isCartVisible) {
      setCartCount(0);
    }
  };

  const handleCheckout = () => {
    setIsCartVisible(false);
    setCartItems([]);
    setCartCount(0);
  };

  return (
    <div className="App">
      <Header
        cartCount={cartCount}
        toggleCartVisibility={toggleCartVisibility}
      />
      <Main addToCart={addToCart} />
      {isCartVisible && (
        <Card
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          handleCheckout={handleCheckout}
        />
      )}
    </div>
  );
}

export default App;
