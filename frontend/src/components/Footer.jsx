import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        Made with <span className={styles.highlight}>♥</span> by{" "}
        <span className={styles.highlight}>Nguyen Duy Phuc Le</span> © {currentYear}
      </div>
    </footer>
  );
};

export default Footer;
