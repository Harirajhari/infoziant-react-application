import React, { useState } from "react";
import { motion } from "framer-motion";
import './css/Navbar.css';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get the current URL path

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Define route groups for "Services" and "Blogs"
  const servicesRoutes = [
    '/vapt', '/network-infrastructure', '/web-and-mobile-app',
    '/cloud-infrastructure', '/api-vapt', '/siem'
  ];

  const blogsRoutes = [
    '/blogs', '/fortifying-mobile-app-security', '/why-strong-passwords-matter-and-how-to-create',
    '/phishing-beware-of-fake-emails-and-messages', '/strengthening-your-digital-fortress',
    '/elevating-security-with-firewalls', '/top-5-effective-website-security-tips-for-2024'
  ];

  // Function to check if the current path matches any of the routes in a group
  const isActive = (path) => {
    if (path === '/services') {
      return servicesRoutes.includes(location.pathname) ? 'active' : '';
    }
    if (path === '/blogs') {
      return blogsRoutes.includes(location.pathname) ? 'active' : '';
    }
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div><img className="infz-logo" src="./infoziant-logo.png" alt="Logo" /></div>

      {/* Toggle button for mobile */}
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <div className="mobile-bar"></div>
        <div className="mobile-bar"></div>
        <div className="mobile-bar"></div>
      </div>

      {/* Mobile menu with faster and smoother animation */}
      <motion.div
        className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}
        initial={{ x: '100%' }} // Start from off-screen
        animate={{ x: isMobileMenuOpen ? '0%' : '100%' }} // Slide in/out based on state
        transition={{
          duration: 0.15, // Much faster transition
          ease: "easeInOut", // Simple, smooth easing function
        }}
      >
        <span className="mobile-close-menu" onClick={closeMobileMenu}>&times;</span><br />
        <Link to="/" onClick={closeMobileMenu} className={isActive('/')}>Home</Link>
        <Link to="/about" onClick={closeMobileMenu} className={isActive('/about')}>About</Link>
        <Link to="/vapt" onClick={closeMobileMenu} className={isActive('/services')}>Services</Link>
        <Link to="/product" onClick={closeMobileMenu} className={isActive('/product')}>Product</Link>
        <Link to="/awards" onClick={closeMobileMenu} className={isActive('/awards')}>Awards</Link>
        <Link to="/blogs" onClick={closeMobileMenu} className={isActive('/blogs')}>Blog</Link>
        <Link to="/contact" onClick={closeMobileMenu} className={isActive('/contact')}>Contact</Link>
      </motion.div>

      {/* Nav links for larger screens */}
      <motion.div
        className="nav-links"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className={isActive('/')}>Home</Link>
        <Link to="/about" className={isActive('/about')}>About</Link>
        <Link to="/vapt" className={isActive('/services')}>Services</Link>
        <Link to="/product" className={isActive('/product')}>Product</Link>
        <Link to="/awards" className={isActive('/awards')}>Awards</Link>
        <Link to="/blogs" className={isActive('/blogs')}>Blog</Link>
        <Link to="/contact" className={isActive('/contact')}>Contact</Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
