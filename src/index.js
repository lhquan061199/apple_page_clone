import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page14Pro from "./Page/Page14Pro";
import Page14 from "./Page/Page14";
import Page13 from "./Page/Page13";
import PageSe from "./Page/PageSe";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

import GlobalStyles from "./components/GlobalStyles";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App></App>} />
            <Route path="/iphone-14pro" element={<Page14Pro></Page14Pro>} />
            <Route path="/iphone-14" element={<Page14></Page14>} />
            <Route path="/iphone-13" element={<Page13></Page13>} />
            <Route path="/iphone-SE" element={<PageSe></PageSe>} />
          </Routes>
        </BrowserRouter>
      </GlobalStyles>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
