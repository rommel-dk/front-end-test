import React from "react";
import "./App.scss";
import Hero from "./components/Articles/Hero";
import Tiles from "./components/Articles/Tiles";
import data from "./assets/data.json";

function App() {
  return (
    <div className="App">
      <Hero hero={data.hero1}></Hero>
      <Tiles tiles={data.tiles}></Tiles>)
    </div>
  );
}

export default App;
