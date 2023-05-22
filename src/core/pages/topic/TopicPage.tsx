import { useEffect, useState } from "react";
import styles from "./TopicPage.module.css";
import getCarData from "../../services/dataService";
import { ICarData } from "../../types/ICarData";
import TopicChapter from "./components/TopicChapter";
import TopicReferences from "./components/TopicReferences";
import TopicIntro from "./components/TopicIntro";
import ChapterTitle from "./components/ChapterTitle";
import CanvasInfographic from "./components/CanvasInfographic";

function TopicPage() {
  const [carData, setCarData] = useState<ICarData | undefined>(undefined);

  //method to retrieve data about Topic
  useEffect(() => {
    getCarData().then((data) => {
      setCarData(data);
    });
  });

  return (
    <div className={styles.topicPage}>
      <div className={styles.bannerTop} />
      <div className={styles.TopicContainer}>
        <TopicIntro introChapter={carData?.introduction} />
        <div className={styles.topicChapterContainer}>
          <ChapterTitle title={"innovation and evolution of cars"} />
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
        <CanvasInfographic />
        <ChapterTitle title={"Sources and Handy links"} />
        <TopicReferences
          references={["ref1", "ref2", "ref3", "ref4", "ref5", "ref6"]}
        />
      </div>
      <div className={styles.bannerBottom} />
    </div>
  );
}

export default TopicPage;
