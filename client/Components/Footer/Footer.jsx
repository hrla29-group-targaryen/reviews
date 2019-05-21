import React from 'react';
import './footer.css';

const Footer = (props) => {
  return (
    <div className="footer-body">
      <div className="footer-collapsibleSection">
        <span className="footer-collapsibletitleText">Get to know us</span>
        <div className="footer-collapsibleContent">
          <ul>
            <li><a href="">About Grubhub</a></li>
            <li><a href="">Our apps</a></li>
            <li><a href="">Our blog</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Investor relations</a></li>
            <li><a href="">News</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-collapsibleSection">
        <span className="footer-collapsibletitleText">Useful links</span>
        <div className="footer-collapsibleContent">
          <ul>
            <li><a href="">Gift cards</a></li>
            <li><a href="">Coupons</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Help</a></li>
            <li><a href="">Grubhub for Alexa</a></li>
            <li><a href="">Student discounts</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-collapsibleSection">
        <span className="footer-collapsibletitleText">Connect with us</span>
        <div className="footer-collapsibleContent">
          <ul>
            <li><a href="">Facebook</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">Instagram</a></li>
            <li><a href="">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-collapsibleSection">
        <span className="footer-collapsibletitleText">Partner with us</span>
        <div className="footer-collapsibleContent">
          <ul>
            <li><a href="">For restaurants</a></li>
            <li><a href="">For drivers</a></li>
            <li><a href="">For corporate accounts</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-divider">
      </div>
      <div>
        <p>© 2019 Grubhub All rights reserved.</p>
      </div>
      <div>
        <a href="">Terms of Use</a><br/>
        <a href="">Privacy Policy</a>
      </div>

    </div>
  )
}

export default Footer;