import React, { useState } from "react";
import "./Header.scss";
function Header() {
  const [navToggler, setnavToggler] = useState(false);

  const navTogglerFun = () => {
    setnavToggler(!navToggler);
  };
  return (
    <header className="row">
      <div className="logo col-6 col-lg-2">
        <img src="images/logo.svg" />
      </div>
      <ul className={`col-lg-8 links ${navToggler && "active"}`} id="nav">
        <li className="link-item">
          <a href="#" className="active">
            Pricing
          </a>
        </li>
        <li className="link-item">
          <a href="#">Product</a>
        </li>
        <li className="link-item">
          <a href="#">About Us</a>
        </li>
        <li className="link-item">
          <a href="#">Careers</a>
        </li>
        <li className="link-item">
          <a href="#">Community</a>
        </li>
      </ul>
      <i onClick={navTogglerFun} class="fa-solid fa-bars bars col-6"></i>
      <button className="main col-lg-2">Get Started</button>
    </header>
  );
}

export default Header;
