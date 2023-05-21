import { useEffect,useState } from "react";
import styles from "./TopicChapter.module.css";
import { topicChapter } from "../../../types/topicChapter";

function TopicChapter({ fetchedChapterData, imageIsLeft, scrollYPosition }: { fetchedChapterData: topicChapter | undefined, imageIsLeft: boolean , scrollYPosition:number}) {
  const [chapterData, setChapterData] = useState<topicChapter | undefined>(fetchedChapterData);

  return imageIsLeft ? (
    <div className={styles.chapterContainerLeft}>
      <img src={chapterData?.image} alt={chapterData?.title} />
      <div>
        <h1>{chapterData?.title}</h1>
        <p>{chapterData?.description}</p>
      </div>
    </div>
  ) : (
    <div className={styles.chapterContainerRight}>
      <img src={chapterData?.image} alt={chapterData?.title} />
      <div>
        <h1>{chapterData?.title}</h1>
        <p>{chapterData?.description}</p>
      </div>
    </div>
  );
}

export default TopicChapter;
