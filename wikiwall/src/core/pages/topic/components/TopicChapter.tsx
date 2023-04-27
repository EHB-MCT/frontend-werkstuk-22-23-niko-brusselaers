import { useEffect, useState } from "react";
import styles from "./TopicChapter.module.css";
import { topicChapter } from "../../../types/topicChapter";

function TopicChapter({
  fetchedChapterData,
}: {
  fetchedChapterData: topicChapter | undefined;
}) {
  const [chapterData, setChapterData] = useState<topicChapter | undefined>(
    undefined
  );

  useEffect(() => {
    if (fetchedChapterData) {
      setChapterData(fetchedChapterData);
    }
  }, [fetchedChapterData]);

  return (
    <div className={styles.chapterContainerLeft}>
      <img src={`./assets/images/carsPage/${chapterData?.image}`} alt="" />
      <h1>{chapterData?.title}</h1>
      <p>{chapterData?.description}</p>
    </div>
  );
}

export default TopicChapter;
