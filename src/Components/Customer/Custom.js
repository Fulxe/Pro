import React from "react";
import { Outlet } from "react-router-dom";
import "./Custom.css";

function Custom() {
  return (
    <div >
      <div className="Custom">
        <div className="Center">
          <div className="left">
            <div>Customer</div>
            <div>Corporate</div>
            <div>Monpay</div>
            <div>VOO</div>
            <div>Support</div>
          </div>
          <div className="right">
            <div>ENG</div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
export default Custom;
