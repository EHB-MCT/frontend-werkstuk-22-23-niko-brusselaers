import { useEffect, useState } from "react";
import styles from "./TopicPage.module.css";
import getCarData from "../../services/dataService";
import { ICarData } from "../../shared/types/ICarData";
import Chapter from "./components/Chapter";
import References from "./components/References";
import Intro from "./components/Intro";
import ChapterTitle from "./components/ChapterTitle";
import CanvasInfographic from "./components/CanvasInfographic";
import Model from "./components/Model";

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
        <Intro introChapter={carData?.introduction} />
        <div className={styles.topicChapterContainer}>
          <ChapterTitle title={"innovation and evolution of cars"} isLeft={false} />
          {carData?.chapters.map((chapterData, index) => {
            if (index % 2 === 0) {
              return (
                <Chapter
                  fetchedChapterData={chapterData}
                  key={index}
                  imageIsLeft={true}
                />
              );
            } else {
              return (
                <Chapter
                  fetchedChapterData={chapterData}
                  key={index}
                  imageIsLeft={false}
                />
              );
            }
          })}
        </div>
        <ChapterTitle title={"Cars Troughout History "} isLeft={true} />
        <Model />
        <ChapterTitle title={"Cars around the world"} isLeft={false}/>
        <CanvasInfographic />
        <ChapterTitle title={"Sources and Handy links"} isLeft={true} />
        <References/>
      </div>
      <div className={styles.bannerBottom} />
    </div>
  );
}

export default TopicPage;
