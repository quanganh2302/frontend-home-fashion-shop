import React from "react";
import "./Footer.scss";
import Facebook from "../../assets/FacebookIcon";
import Instagram from "../../assets/InstagramIcon";
import Pinterest from "../../assets/Pinterest";
import Twitter from "../../assets/TwitterIcon";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { ReactComponent as MasterImg } from "../../assets/footer-visa.svg";
import { ReactComponent as ApplePay } from "../../assets/apple_pay.svg";
import { ReactComponent as Visa } from "../../assets/visa.svg";
import { ReactComponent as America } from "../../assets/american_express.svg";
import { ReactComponent as Paypal } from "../../assets/paypal.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sm-screen-device sm:block hidden ">
        <div className="footer-container container-custom">
          <div className="footer-top">
            <div className="footer-left">
              <div className="footer-left-input">
                <h4>Get on the list</h4>
                <p>
                  Subscribe for early access, exclusive discounts and
                  partnerships
                </p>
                <div className="input-area">
                  <input placeholder="Your email address" type="text" />
                  <button>
                    <BsArrowRight className="icon" />
                  </button>
                </div>
              </div>
              <div className="footer-left-social">
                <div className="social-item-1">
                  <Facebook className="facebook " />
                </div>
                <div className="social-item-2">
                  <Instagram className="instagram" />
                </div>
                <div className="social-item-3">
                  <Twitter className="twitter" />
                </div>
                <div className="social-item-4">
                  <Pinterest className="pinterest" />
                </div>
                <div className="social-item-5">
                  <AiFillGithub className="gitHub" />
                </div>
              </div>
            </div>
            <div className="footer-right ">
              <div className="footer-right-col">
                <p>ABOUT US</p>
                <ul>
                  <li>
                    <a href="">Our Story</a>
                  </li>
                  <li>
                    <a href="">Store Locations</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">Our Blog</a>
                  </li>
                  <li>
                    <a href="">Brands</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="footer-right-col">
                <p>SHOP CATEGORIES</p>
                <ul>
                  <li>
                    <a href="">Men</a>
                  </li>
                  <li>
                    <a href="">Women</a>
                  </li>
                  <li>
                    <a href="">Shoes</a>
                  </li>
                  <li>
                    <a href="">Watches</a>
                  </li>
                  <li>
                    <a href="">Jewelry</a>
                  </li>
                  <li>
                    <a href="">Bags</a>
                  </li>
                </ul>
              </div>
              <div className="footer-right-col">
                <p>CUSTOMER CARE</p>
                <ul>
                  <li>
                    <a href="">FAQs</a>
                  </li>
                  <li>
                    <a href="">Collections & Delivery</a>
                  </li>
                  <li>
                    <a href="">Returns & Refunds</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Delivery Return</a>
                  </li>
                  <li>
                    <a href="">Store Locations</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom ">
            <div className="footer-bottom-left">
              All Rights Reserved © 2023 <span className="store-name">Lux</span>{" "}
              store - Developed by{" "}
              <span className="signature">Lucas - Quang Anh</span>
            </div>
            <div className="footer-bottom-center">
              <p>Privacy Policy</p>
              <p>Returns & Exchanges</p>
              <p>Shipping & Delivery</p>
            </div>
            <div className="footer-bottom-right">
              <div className="item">
                <MasterImg />
              </div>
              <div className="item">
                <ApplePay />
              </div>
              <div className="item">
                <Visa />
              </div>
              <div className="item">
                <America />
              </div>
              <div className="item">
                <Paypal />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-smartPhone-screen-device text-white block sm:hidden">
        {" "}
        38fu djshfjksdhfjksdhfjksdhfjksdhfjksdhf0{" "}
      </div>
      <div className="h-[200px] "></div>
    </footer>
  );
};

export default Footer;
