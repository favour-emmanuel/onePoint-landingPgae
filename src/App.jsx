import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Service from "./components/Service";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="/">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
