import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Service from "./components/Service";
import Blog from "./components/Blog";

function App() {
  return (
    <div id="/">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Blog />
    </div>
  );
}

export default App;
