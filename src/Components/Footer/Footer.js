import React, { useRef } from "react";
import "./Footer.scss";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <article className="column  col-lg-3">
            <img className="logo" src="images/logo.svg" />
            <div className="social-icons">
              <ul className="platforms">
                <li className="platform">
                  <a href="#">
                    <img src="images/icon-facebook.svg" />
                  </a>
                </li>
                <li className="platform">
                  <a href="#">
                    <img src="images/icon-instagram.svg" />
                  </a>
                </li>
                <li className="platform">
                  <a href="#">
                    <img src="images/icon-pinterest.svg" />
                  </a>
                </li>
                <li className="platform">
                  <a href="#">
                    <img src="images/icon-twitter.svg" />
                  </a>
                </li>
                <li className="platform">
                  <a href="#">
                    <img src="images/icon-youtube.svg" />
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <article className="column  col-lg-5">
            <ul className="links">
              <li className="link-item">
                <a href="#">Home</a>
              </li>
              <li className="link-item">
                <a href="#">Pricing</a>
              </li>
              <li className="link-item">
                <a href="#">Products</a>
              </li>
              <li className="link-item">
                <a href="#">About Us</a>
              </li>
            </ul>
            <ul className="links">
              <li className="link-item">
                <a href="#">Careers</a>
              </li>
              <li className="link-item">
                <a href="#">Community</a>
              </li>
              <li className="link-item">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </article>
          <article className="column  col-lg-4">
            <form>
              <input
                className="update"
                type="text"
                placeholder="Updates in your inbox..."
              />
              <button type="submit" className="main">
                Go
              </button>
            </form>
          </article>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
