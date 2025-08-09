import React, { useRef } from "react";
import styles from '../styles/Contact.module.css';
import { FaEnvelope, FaUser, FaCommentDots } from 'react-icons/fa';
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactImage from '../assets/contact-image.png';
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2jui87n",
        "template_qlakyiw",
        form.current,
        "aqxZankqO0vHu-hy6"
      )
      .then(() => {
        toast.success("Message sent successfully 💌", {
          position: "top-right",
          autoClose: 2000,
        });
        form.current.reset();
      })
      .catch(() => {
        toast.error("Something went wrong 😞", {
          position: "top-right",
          autoClose: 2000,
        });
      });
  };

  return (
    <div className={styles.contactWrapper}>
      {/* Left: Animated Image Only */}
      <motion.div
        className={styles.imageSection}
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={contactImage}
          alt="Contact"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>

      {/* Right: Contact Form */}
      <motion.section
        className={styles.contact}
        id="contact"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className={styles.title}>Contact</h2>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <motion.div className={styles.field} whileHover={{ scale: 1.02 }}>
            <FaUser className={styles.icon} />
            <input type="text" name="user_name" placeholder="Your Name" required />
          </motion.div>

          <motion.div className={styles.field} whileHover={{ scale: 1.02 }}>
            <FaEnvelope className={styles.icon} />
            <input type="email" name="user_email" placeholder="Your Email" required />
          </motion.div>

          <motion.div className={styles.field} whileHover={{ scale: 1.02 }}>
            <FaCommentDots className={styles.icon} />
            <textarea name="message" placeholder="Your Message" rows="5" required />
          </motion.div>

          <motion.button
            type="submit"
            className={styles.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
        <ToastContainer />
      </motion.section>
    </div>
  );
};

export default Contact;
