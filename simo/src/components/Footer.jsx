/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Simran.</span>
        <div className="links">
          <a href="https://instagram.com/fieryone123?igshid=OGQ5ZDc2ODk2ZA==">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/simran-bai-066b3723b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/SimranBai">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Simran
        </p>
      </div>
    </footer>
  );
}

export default Footer;
