import "./css/Awards.css";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import React, { useState } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function Awards() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const cards = [
    { title: "Sony", image: "./assets/mail-1.png", description: "Recognized for reporting critical security vulnerabilities.", category: "Team Awards", heading:"Acknowledgement for Excellence" },
    { title: "Microsoft", image: "https://via.placeholder.com/150", description: "Acknowledged for identifying and reporting security flaws.", category: "Innovation Awards", heading:"Security Recognition Award" },
    { title: "FastMail", image: "https://via.placeholder.com/150", description: "Honored for contributions to enhancing security measures.", category: "Team Awards", heading:"Security Contribution Award" },
    { title: "SAP", image: "https://via.placeholder.com/150", description: "Recognized for proactive security vulnerability reporting.", category: "Individual Achievements", heading:"Security Excellence Award" },
    { title: "Chalk", image: "https://via.placeholder.com/150", description: "Acknowledged for significant security issue reporting.", category: "Individual Achievements", heading:"Security Recognition" },
    { title: "BlackBerry", image: "https://via.placeholder.com/150", description: "Honored for outstanding security vulnerability reporting.", category: "Team Awards", heading:"Security Appreciation" },
    { title: "Apple", image: "https://via.placeholder.com/150", description: "Recognized for exceptional security issue identification.", category: "Innovation Awards", heading:"Security Excellence Recognition" },
    { title: "M-Files", image: "https://via.placeholder.com/150", description: "Acknowledged for significant contributions to security.", category: "Innovation Awards", heading:"Security Contribution Recognition" },
    { title: "issuu", image: "https://via.placeholder.com/150", description: "Recognized for outstanding security vulnerability reporting.", category: "Individual Achievements", heading:"Security Excellence Award" }
  ];

  const categories = ["All", "Individual Achievements", "Team Awards", "Innovation Awards"];

  const filteredCards = selectedCategory === "All" ? cards : cards.filter((card) => card.category === selectedCategory);

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <>
      <Helmet>
        <title>Awards & Recognition | Celebrating Infoziant's Achievements</title>
        <meta
          name="description"
          content="Discover Infoziant's accolades in cybersecurity, including awards from Sony, Microsoft, and Apple Celebrating excellence in security and innovation"
        />
      </Helmet>

      <motion.div
        className="service-banner"
        style={{
          backgroundImage: "url(./assets/cloud-sb.png)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />

        <motion.div className="sb-intro" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1>Awards & Appreciation</h1>
          <br />
          <p>Celebrating our achievements and milestones</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="category-container-award"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-award ${selectedCategory === category ? "active-award" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="card-grid-award"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delayChildren: 0.3 }}
      >
        {filteredCards.map((card, index) => (
          <motion.div
            key={index}
            className="card-award"
            onClick={() => openModal(card.image)}
            style={{
              backgroundImage: "url(./assets/awards-bg.jfif)",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="card-title-award">{card.title}</h3>
            <img className="card-image-award" src={card.image} alt={card.title} />
            <h4 className="highlight" style={{ fontWeight: '700' }}>{card.heading}</h4>
            <p className="card-description-award">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for Image Popup */}
      {isModalOpen && (
        <motion.div
          className="modal-award"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="modal-content-award"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="close-award" onClick={closeModal}>&times;</span>
            <img src={modalImage} alt="Popup" className="modal-image-award" />
          </motion.div>
        </motion.div>
      )}
      <Footer />
    </>
  );
}
