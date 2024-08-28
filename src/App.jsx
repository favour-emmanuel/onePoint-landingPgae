import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cart from "./components/cart";
import Navball from "./components/Navball";
import Example from "./components/Example";

function App() {
  const [cartItems, setCartItems] = useState(["product1", "product2"]);

  return (
    <>
      <Navbar />
      <Hero />
      <Navball cartItemsCount={cartItems.length} />
      <Cart />
      <Example />
    </>
  );
}

export default App;
