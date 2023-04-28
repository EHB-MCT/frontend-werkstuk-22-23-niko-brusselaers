import { useEffect, useState } from "react";
import styles from "./TopicPage.module.css";
import getCarData from "../../services/dataService";
import { carData } from "../../types/carData";
import TopicChapter from "./components/TopicChapter";

function TopicPage() {
  const [carData, setCarData] = useState<carData | undefined>(undefined);

  useEffect(() => {
    getCarData().then((data) => {
      setCarData(data);
    });
  }, []);

  return (
    <div className={styles.topicPage}>
      <div className={styles.introductionContainer}>
        <h1>CAR</h1>
        <img
          src={carData?.introduction.image}
          alt=""
        />
        <p>{carData?.introduction.description}</p>
      </div>
      <div className={styles.topicChapterContainer}>
        {carData?.chapters.map((chapterData, index) => {
          if (index % 2 === 0) {
            return (
              <TopicChapter
                fetchedChapterData={chapterData}
                key={index}
                imageIsLeft={true}
              />
            );
          } else {
            return (
              <TopicChapter
                fetchedChapterData={chapterData}
                key={index}
                imageIsLeft={false}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default TopicPage;
