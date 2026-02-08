import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import {} from "@reduxjs/toolkit"
import { Provider } from "react-redux";
import { Store } from "./Components/App/Store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>,
);
