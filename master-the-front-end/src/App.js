import React from "react";
import "./App.scss";
import Hero1 from "./components/Articles/Heroes/hero1";
import Hero2 from "./components/Articles/Heroes/hero2";
import Tiles from "./components/Articles/Tiles";
import data from "./assets/data.json";

function App() {
  return (
    <div className="App">
      <Hero1 hero={data.hero1}></Hero1>
      <Tiles tiles={data.tiles}> </Tiles>
      <Hero2 hero={data.hero2}></Hero2>
    </div>
  );
}

export default App;
