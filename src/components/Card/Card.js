import React from "react";
import styles from "./Card.module.css";
import energyImage from "../../assets/energy.jpg";
//import Button from "../../components/Button/Button";
import LınkButton from "../Link/LinkButton";

const Card = ({ data }) => {
  return (
    <div className={styles.topCard}>
      <div className={styles.topText}>
        <div className={styles.heading}>
          <h3>{data.title}</h3>
          <span className={styles.date}>{data.date}</span>
        </div>
        <div className={styles.textSection}>
          <p className={styles.p}>{data.text}</p>
          <div className={styles.lınkButtonContainer}>
            <LınkButton href="/report">Raporu Göster</LınkButton>
          </div>
        </div>
      </div>
      <div className={styles.imageSection}>
        <img src={energyImage} alt="energy" />
      </div>
    </div>
  );
};

export default Card;
