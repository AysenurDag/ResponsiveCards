import React from "react";
import styles from "../../components/Link/LinkButton.module.css";

const LinkButton = ({ children, href }) => {
  return (
    <a href={href} className={styles.linkButton}>
      {children} <span className={styles.arrow}>&gt;</span>
    </a>
  );
};

export default LinkButton;
