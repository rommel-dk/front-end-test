import React from "react";
import styles from "./banner.module.scss";

function Banner(props) {
  return (
    <div className={styles.article_wrapper}>
      <article className={`article ${styles.article}`}>
        <div className={styles.banner}>
          <img src={props.banner.image} alt={props.banner.image_alt}></img>
          <div className={styles.overlay}></div>
          <div className={styles.text_frame}>
            <h3>
              {props.banner.author}, {props.banner.year}
            </h3>
            <p>{props.banner.description}</p>
            <a className="link" href="#">
              <div className={`arrows_group ${styles.arrow_right_small}`}>
                <svg
                  width="62"
                  height="21"
                  viewBox="0 0 62 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10.334H58.9158"
                    stroke="#F54E52"
                    strokeWidth="3"
                  />
                  <path
                    d="M51.0001 2L59.2001 10.2344L51.0001 19"
                    stroke="#F54E52"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.titles_line_link_group}>
          <h2>{props.banner.subtitle}</h2>
          <h1>{props.banner.author}</h1>
          <h1> {props.banner.title}</h1>
          <svg className={styles.line_small} height="60px" width="73%">
            <line
              className="line-secondary line-4"
              x1="100%"
              y1="80%"
              x2="1%"
              y2="55%"
            ></line>
          </svg>
          <a className="link down" href="#imagewide">
            <div className={`arrows_group ${styles.arrow_down_big}`}>
              <svg
                width="126"
                height="47"
                viewBox="0 0 126 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M125.5 3.73438H18.6404V41.4999"
                  stroke="#F54E52"
                  stroke-width="6"
                />
                <path
                  d="M3 24.9999L18.5 41.9999L35 24.9999"
                  stroke="#F54E52"
                  stroke-width="6"
                />
              </svg>
            </div>
          </a>
        </div>
      </article>
    </div>
  );
}

export default Banner;
