import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Navball from "./components/Navball";
import Example from "./components/Example";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Navball cartItemsCount={cartItems.length} />
      <Example />
    </>
  );
}

export default App;
