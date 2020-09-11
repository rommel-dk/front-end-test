import React from "react";
import "./App.css";
import data from "./assets/data.json";

function App() {
  return (
    <div className="App">
      <article className="article">
        <svg className="lines-group" height="75vh" width="100%">
          <line className="line line-1" x1="100%" y1="40" x2="0" y2="500" />
          <line className="line line-1" x1="100%" y1="300" x2="0" y2="500" />
          <line className="line line-2" x1="100%" y1="600" x2="0" y2="350" />
        </svg>
        <h1>{data.hero1.title}</h1>
        <p>{data.hero1.description}</p>
        <a className="link" href="#tiles">
          <svg height="4" width="100">
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

export default App;
