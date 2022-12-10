import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-up">
        <div className="footer-left">
          <h2>About us</h2>
          <p>Mission, Vision, Values</p>
          <p>Introduction</p>
          <p>Executive team</p>
          <p>Social responsibility</p>
          <p>Co-operation</p>
          <p>Career</p>
        </div>
        <div className="footer-center">
          <h2>Support</h2>
          <p>Network coverage</p>
          <p>VAT info</p>
          <p>Support</p>
        </div>
        <div className="footer-right">
          <h2>Contact Us</h2>
          <p>Call center:</p>
          <p className="number">2222</p>
          <p>Different operator:</p>
          <p className="number">1800-2222, 1900-2222</p>
        </div>
      </div>
      <hr className="line"></hr>
      <div className="footer-down">
        <div className="down-left">
          <h2>© 1996 - 2022 MOBICOM CORPORATION</h2>
        </div>
        <div className="down-right">
          <img src="https://www.mobicom.mn/build/assets/3939ee67f7eff0cd1080d19142f4d003.svg" />
          <img src="https://www.mobicom.mn/build/assets/50e0da8163e5bd69710f4fd3be750d9a.svg" />
          <img src="https://www.mobicom.mn/build/assets/20e4a96151bd869d283431625e069ccc.svg" />
          <img src="https://www.mobicom.mn/build/assets/478b0aeeee24facd78ac542bf4e08909.svg" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
