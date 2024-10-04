import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Service from "./components/Service";

function App() {
  return (
    <div id="/">
      <Navbar />
      <Hero />
      <About />
      <Service />
    </div>
  );
}

export default App;
