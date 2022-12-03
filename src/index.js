import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Theme } from "./Components/Theme/theme";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Custom from "./Components/Customer/Custom";
import Navbar from "./Components/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Custom />}>
            <Route path="/" element={<Navbar />}>
              <Route path="" element={<App />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
