import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 bottom-0">
      <div className="footer-content">
        <p>&copy; 2024 Your Website Name</p>
        <ul className="footer-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
