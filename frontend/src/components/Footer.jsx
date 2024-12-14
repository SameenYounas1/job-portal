import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaLinkedin } from "react-icons/fa6"; // Only importing used icon
import logo from "./logo.png"; // Importing logo for proper resolution

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <footer>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>54000 Lahore, Pakistan</li>
            <li>
              <a href="mailto:sameenyounas1@gmail.com">sameenyounas1@gmail.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link to="/">
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; {new Date().getFullYear()} All Rights Reserved By Sameen Younas
      </div>
    </>
  );
};

export default Footer;
