import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IMAGES } from "./data/info";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1">
      <img src={IMAGES.PINA_LOGO} className="pina--logo" />
    </a>
    <App />
  </React.StrictMode>
);
