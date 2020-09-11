import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import data from "./assets/data.json";

function App() {
  return (
    <div className="App">
      <Hero hero={data.hero1}></Hero>
    </div>
  );
}

export default App;
