import React from "react";
import Landing from "./Components/Landing/Landing";
import Diff from "./Components/WhatsDiff/Diff";
import Testi from "./Components/Testi/Testi";
import Simplify from "./Components/simplify/Simplify";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Landing />
      <Diff />
      <Testi />
      <Simplify />
      <Footer />
    </div>
  );
}

export default App;
