import "./css/Partnership.css";
import { motion } from "framer-motion";

export default function Partnership() {
    const images = [
        './assets/partner-1.png',
        './assets/partner-2.svg',
        './assets/partner-3.png',
        './assets/partner-4.png',
        './assets/partner-5.svg',
        './assets/partner-6.png',
        './assets/partner-7.png',
        './assets/partner-8.png',
        './assets/partner-9.png',
        './assets/partner-10.png',
        './assets/partner-11.png',
        './assets/partner-12.png'
      ];
  return (
    <section className="partnership">
      {/* Animated Title */}
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Partnering with <span className="highlight">Excellence</span> for Your Success.
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="description"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      >
        Discover the potential of collaboration as we proudly introduce our
        esteemed partners. These valuable partnerships enable us to deliver
        outstanding solutions and services, supported by a network of expertise
        and innovation.
      </motion.p>

      {/* Grid of images with animation */}
      <div className="grid-container">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="grid-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
          >
            <img src={image} alt={`Image ${index + 1}`} className="grid-image" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
