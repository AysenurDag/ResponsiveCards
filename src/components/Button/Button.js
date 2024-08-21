import React from "react";
import styles from "../../components/Button/Button.module.css";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
