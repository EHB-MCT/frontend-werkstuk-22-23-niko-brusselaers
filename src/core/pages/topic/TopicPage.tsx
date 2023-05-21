import { useEffect, useState } from "react";
import styles from "./TopicPage.module.css";
import getCarData from "../../services/dataService";
import { carData } from "../../types/carData";
import TopicChapter from "./components/TopicChapter";
import TopicReferences from "./components/TopicReferences";
import TopicIntro from "./components/TopicIntro";

function TopicPage() {
  const [carData, setCarData] = useState<carData | undefined>(undefined);

  //method to retrieve data about Topic
  useEffect(() => {
    getCarData().then((data) => {
      setCarData(data);
    });
  }, []);

  return (
    <div className={styles.topicPage}>
      <div className={styles.bannerTop} />
      <div className={styles.TopicContainer}>
        <TopicIntro introChapter={carData?.introduction} />
        <div className={styles.topicChapterContainer}>
          {carData?.chapters.map((chapterData, index) => {
            if (index % 2 === 0) {
              return (
                <TopicChapter
                  fetchedChapterData={chapterData}
                  key={index}
                  imageIsLeft={true}
                  scrollYPosition={index * 1000}
                />
              );
            } else {
              return (
                <TopicChapter
                  fetchedChapterData={chapterData}
                  key={index}
                  imageIsLeft={false}
                  scrollYPosition={index * 1000}
                />
              );
            }
          })}
          <TopicReferences references={["test1", "test2", "test3"]} />
        </div>
      </div>
      <div className={styles.bannerBottom} />
    </div>
  );
}

export default TopicPage;
