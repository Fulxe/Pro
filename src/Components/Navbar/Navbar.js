import React from "react";
import "./Navbar.css";
import Logo from "./31c267a2f9f62512211e33aed7f060b0.png";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="Navbar">
        <div className="tuv">
          <div className="zuun">
            <div className="Logo">
              <img src={Logo} />
            </div>
            <div className="Menu">Services</div>
            <div className="Menu">Promotion</div>
            <div className="Menu">News</div>
            <div className="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 96c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm200-24c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24z" />
              </svg>
              Online Shop
            </div>
            <div className="Menu">Find a store</div>
          </div>
          <div className="baruun"></div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
