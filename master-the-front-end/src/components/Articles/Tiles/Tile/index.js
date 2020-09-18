import React from "react";
import styles from "./tile.module.scss";

function Tile(props) {
  return (
    <div className={styles.tile}>
      <img src={props.tile.image} alt={props.tile.image_alt}></img>
      <p>
        {props.tile.type} {props.tile.date}
      </p>
      <h2>{props.tile.author}</h2>
      <h1>{props.tile.title}</h1>
      <a className="link" href="#">
        <svg width="55">
          <line className="line line-3" x1="100%" y1="0" x2="0" y2="0" />
        </svg>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="arrow-right"
          className="svg-inline--fa fa-arrow-right fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
          ></path>
        </svg>
      </a>
    </div>
  );
}
export default Tile;
