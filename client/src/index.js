import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/bootstrap.css";
import "./assets/css/animate.min.css";
import "./assets/css/custom.css";

import App from "./App";
const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
