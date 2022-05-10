import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import store from "./app/store";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>
);
