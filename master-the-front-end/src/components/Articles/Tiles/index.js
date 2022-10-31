import React from "react";
import styles from "./tiles.module.scss";
import Tile from "./Tile";

function Tiles(props) {
  return (
    <div id="tiles">
      <article className={`article ${styles.article}`}>
        {" "}
        {props.tiles.map((tile, index) => (
          <Tile key={index} tile={tile}>
            {" "}
          </Tile>
        ))}{" "}
      </article>
    </div>
  );
}

export default Tiles;
