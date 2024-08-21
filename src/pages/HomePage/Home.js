import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Card from "../../components/Card/Card";
import energyImage from "../../assets/energy.jpg";
import Button from "../../components/Button/Button";
import LinkButton from "../../components/Link/LinkButton";
import { getPosts } from "../../api/index";

const HomePage = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts();
      setCardsData(posts);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h4 className={styles.h4}>Some Quotes</h4>
      {cardsData.length > 0 && (
        <div className={styles.topCard}>
          <div className={styles.topText}>
            <div className={styles.heading}>
              <h3>{cardsData[0].title}</h3>
              <span className={styles.date}>22.01.2022</span>
            </div>
            <div className={styles.textSection}>
              <p className={styles.p}>{cardsData[0]?.body}</p>
              <div className={styles.linkButtonContainer}>
                <LinkButton href="/report">Show Quote</LinkButton>
              </div>
            </div>
          </div>
          <div className={styles.imageSection}>
            <img src={energyImage} alt="energy" />
          </div>
        </div>
      )}

      <div className={styles.cardsContainer}>
        {cardsData.slice(1).map((card) => (
          <Card
            key={card.id}
            data={{ title: card.title, text: card.body, date: "22.01.2022" }}
          />
        ))}
      </div>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Button disabled={true}>Show More</Button>
      </div>
    </div>
  );
};

export default HomePage;
