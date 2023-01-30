import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img
        className="footer__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="footer__logo"
      />
      <div className="footer__content">
        <ul>
          <h4 className="footer__header">Get to Know Us</h4>
          <li>Careers</li>
          <li>Blog</li>
          <li>About Amazon</li>
        </ul>
        <ul>
          <h4 className="footer__header">Make Money</h4>
          <li>Sell products on Amazon</li>
          <li>Sell on Amazon Business</li>
          <li>Become an Affiliate</li>
        </ul>
        <ul>
          <h4 className="footer__header">Become an Affiliate</h4>
          <li>Careers</li>
          <li>Blog</li>
          <li>About Amazon</li>
        </ul>
        <ul>
          <h4 className="footer__header">Get to Know Us</h4>
          <li>Careers</li>
          <li>Blog</li>
          <li>About Amazon</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
