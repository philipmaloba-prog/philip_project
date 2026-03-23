import React from 'react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <div className="logo">
            <h3></h3>
          </div>
          <p>Professional e-commerce with M-Pesa integration</p>
        </div>

        <div className="footer-section links-section">
          <h4>Platform</h4>
          <ul>
            <li><a href="#" aria-label="Home page">Home</a></li>
            <li><a href="#" aria-label="View products">Products</a></li>
            <li><a href="#" aria-label="Add new product">Add Product</a></li>
          </ul>
        </div>

        <div className="footer-section services-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#" aria-label="Payment page">M-Pesa Payment</a></li>
            <li><a href="#" aria-label="Sign up page">Sign Up</a></li>
            <li><a href="#" aria-label="Login page">Sign In</a></li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h4>Contact</h4>
          <ul>
            <li>support</li>
            <li>+254 798 738 126</li>
            <li>Mon-Sat 9AM-6PM</li>
          </ul>
          <div className="payments">
            <span>M-Pesa</span>
            <span>Card</span>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>
      
      <div className="footer-bottom">
        <p>© 2026 . All rights reserved. | Developed by Maloba</p>
      </div>
    </footer>
  );
};

export default Footer;
