import React from "react";
import styles from "./hero.module.scss";

function Hero2(props) {
  return (
    <div className={styles.article_wrapper}>
      <article className={`article ${styles.article_2}`}>
        <svg className={styles.lines_group} height="70%" width="100vw">
          <line
            className="line line-2"
            x1="101%"
            y1="12%"
            x2="40%"
            y2="20%"
          ></line>
        </svg>
        <svg className={styles.lines_group} height="70%" width="100vw">
          <line
            className="line line-1"
            x1="101%"
            y1="30%"
            x2="-1%"
            y2="80%"
          ></line>
        </svg>
        <svg className={styles.line_single} height="80%" width="100vw">
          <line
            className="line line-2"
            x1="101%"
            y1="90%"
            x2="-1%"
            y2="35%"
          ></line>
        </svg>
        <div className={styles.title_group}>
          <h1>{props.hero.title}</h1>
        </div>
        <div className={styles.title_link_group}>
          <h2>
            {props.hero.subtitle}
            <span>
              {" "}
              <a className="link" href="#">
                <div className="arrows_group">
                  <svg width="55" height="5">
                    <line
                      className="line line-3"
                      x1="100%"
                      y1="0"
                      x2="0"
                      y2="0"
                    />
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
                </div>
              </a>
            </span>
          </h2>{" "}
        </div>
        <p>{props.hero.description}</p>
      </article>
    </div>
  );
}

export default Hero2;
