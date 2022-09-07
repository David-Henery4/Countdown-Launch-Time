import React from "react";
import { FaFacebookSquare, FaPinterest, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-socials">
        <li>
          <FaFacebookSquare className="footer-socials__icon" />
        </li>
        <li>
          <FaPinterest className="footer-socials__icon" />
        </li>
        <li>
          <FaInstagram className="footer-socials__icon" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
