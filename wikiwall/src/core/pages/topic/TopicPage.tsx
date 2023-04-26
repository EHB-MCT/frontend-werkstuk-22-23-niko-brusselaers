import { useEffect, useState } from "react";
import styles from "./TopicPage.module.css";
import getCarData from "../../services/dataService";

function TopicPage() {
  const [carData, setCarData] = useState(getCarData());

  useEffect(() => {
    getCarData().then((data) => {
      setCarData(data);
    });
  }, []);

  return (
    <div className={styles.topicPage}>
      <div className={styles.introductionContainer}>
        <h1>CAR</h1>
        <img src="./assets/images/carsPage/cars_1.png" alt="" />
        <p>
          
        </p>
      </div>
    </div>
  );
}

export default TopicPage;
