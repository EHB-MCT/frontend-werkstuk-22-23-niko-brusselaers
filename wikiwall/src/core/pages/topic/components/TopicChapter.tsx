import { useEffect, useState } from "react";
import styles from "./TopicChapter.module.css";
import { topicChapter } from "../../../types/topicChapter";

function TopicChapter({ fetchedChapterData, imageIsLeft }: { fetchedChapterData: topicChapter | undefined, imageIsLeft: boolean }) {
  const [chapterData, setChapterData] = useState<topicChapter | undefined>(
    undefined
  );

  useEffect(() => {
    if (fetchedChapterData) {
      setChapterData(fetchedChapterData);
    }
  }, [fetchedChapterData]);

  return imageIsLeft ? (
    <div className={styles.chapterContainerLeft}>
      <img src={chapterData?.image} alt="" />
      <div>
        <h1>{chapterData?.title}</h1>
        <p>{chapterData?.description}</p>
      </div>
    </div>
  ) : (
    <div className={styles.chapterContainerRight}>
      <img src={chapterData?.image} alt="" />
      <div>
        <h1>{chapterData?.title}</h1>
        <p>{chapterData?.description}</p>
      </div>
    </div>
  );
}

export default TopicChapter;
