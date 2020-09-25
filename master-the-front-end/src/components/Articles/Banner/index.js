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
                    stroke-width="3"
                  />
                  <path
                    d="M51.0001 2L59.2001 10.2344L51.0001 19"
                    stroke="#F54E52"
                    stroke-width="3"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div class="titles_line_link_group">
          <h2>{props.banner.subtitle}</h2>
          <h1>{props.banner.title}</h1>
        </div>
      </article>
    </div>
  );
}

export default Banner;
