import React from "react";
import "./style.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="exclusiveBox">
          <h3>Exclusive</h3>
          <span>Subscribe</span>
          <p>Get 10% off your first order</p>
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div className="supportBox">
          <h3>Support</h3>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <span>exclusive@gmail.com</span>
          <span>+88015-88888-9999</span>
        </div>
        <div className="accountBox">
          <h3>Account</h3>
          <span>My Account</span>
          <span>Login / Register</span>
          <span>Cart</span>
          <span>Wishlist</span>
          <span>Shop</span>
        </div>
        <div className="linkBox">
          <h3>Quick Link</h3>
          <span>Privacy Policy</span>
          <span>Terms Of Use</span>
          <span>FAQ</span>
          <span>Contact</span>
        </div>
        <div className="downloadBox">
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="downloadImage">
            <img
              src="https://www.qrcode.org/storage/logos/logo-60e2b84a3261e.png"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGYTo0JQwu06yfcB9td5z237KY05ffioqPMtbDtuOwhMoFmxNWVfUGUtwmMy8a5zuOoQ&usqp=CAU"
              alt=""
            />
          </div>
          <div className="downloadIcons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
