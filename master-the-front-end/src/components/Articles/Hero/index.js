import React from "react";
import styles from "./hero.module.scss";

function Hero(props) {
  const titleClone = props.hero.title
    .replace("end", "<br>")
    .replace("i", "<span style='visibility:hidden;'>i</span>")
    .replace("sse", "<br>");
  return (
    <div className={styles.article_wrapper}>
      <article className={`article ${styles.article}`}>
        <svg className={styles.lines_group} height="80%" width="100vw">
          <line
            className="line line-1"
            x1="101%"
            y1="4%"
            x2="-1%"
            y2="78%"
          ></line>
          <line
            className="line line-1"
            x1="101%"
            y1="45%"
            x2="-1%"
            y2="80%"
          ></line>
        </svg>
        <svg className={styles.line_single} height="80%" width="100vw">
          <line
            className="line line-2"
            x1="101%"
            y1="92%"
            x2="-1%"
            y2="53%"
          ></line>
        </svg>
        <div className={styles.title_group}>
          <h1>{props.hero.title}</h1>
          <h1 dangerouslySetInnerHTML={{ __html: titleClone }}></h1>
        </div>
        <p>{props.hero.description}</p>
        <a className="link" href="#tiles">
          <svg width="110">
            <line className="line line-3" x1="100%" y1="0" x2="0" y2="0" />
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-down"
            className="svg-inline--fa fa-arrow-down fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
            ></path>
          </svg>
        </a>
      </article>
    </div>
  );
}

export default Hero;
