import "./css/Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const getDate = new Date();
  const year = getDate.getFullYear();
  return (
    <footer className="footer">
      <div>
        <img className="infz-logo" src="./infoziant-logo.png" alt="logo" />

        <ul className="footr-social-ul">
          <li>
            <FaLinkedin size={25} color="white" />
          </li>
          <li>
            <FaFacebookSquare size={25} color="white" />
          </li>
          <li>
            <FaTwitter size={25} color="white" />
          </li>
          <li>
            <FaYoutube size={25} color="white" />
          </li>
        </ul>
      </div>

      <div className="footr-options">
        <div>
          <Link to='/' className="footer-links">
            <p>Home</p>
          </Link>
          <Link to='/about' className="footer-links">
            <p>About</p>
          </Link>
          <Link to='/awards' className="footer-links">
            <p>Awards</p>
          </Link>
          <Link to='/product' className="footer-links">
            <p>Product</p>
          </Link>
          <Link to='/vapt' className="footer-links">
            <p>Services</p>
          </Link>
          <Link to='/contact' className="footer-links">
            <p>Contact</p>
          </Link>
        </div>

        <div>
          <Link to='/network-infrastructure' className="footer-links">
            <p>Network Infrastructure</p>
          </Link>
          <Link to="/web-and-mobile-app" className="footer-links">
            <p>Web and Mobile App</p>
          </Link>
          <Link to="/cloud-infrastructure" className="footer-links">
            <p>Cloud Infrastructure</p>
          </Link>
          <Link to="/api-vapt" className="footer-links">
            <p>API VAPT</p>
          </Link>
          <Link to="/siem" className="footer-links">
            <p>SIEM</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
