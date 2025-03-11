import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  // Get today's date dynamically
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Movie-Scout. All Rights Reserved.</p>
      {/* <p>Date: {today}</p> */}
      <p>Powered by OMDb API</p>
      <div className="social-icons">
        <a href="https://github.com/yourprofile" target="_blank">
          <FaGithub />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
