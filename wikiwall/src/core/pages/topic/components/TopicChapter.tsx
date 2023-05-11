import { useEffect,useState } from "react";
import styles from "./TopicChapter.module.css";
import { topicChapter } from "../../../types/topicChapter";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

function TopicChapter({ fetchedChapterData, imageIsLeft, scrollYPosition }: { fetchedChapterData: topicChapter | undefined, imageIsLeft: boolean , scrollYPosition:number}) {
  const [chapterData, setChapterData] = useState<topicChapter | undefined>(
    undefined
  );
  const { scrollY } = useScroll();
  const scrollPositions:number[] = [
      200 + scrollYPosition,
      400 + scrollYPosition,
      600 + scrollYPosition,
      800 + scrollYPosition,
      1000 + scrollYPosition,
      1200 + scrollYPosition,
      1400 + scrollYPosition,
      1600 + scrollYPosition,
    ] 

  const imageMove = useTransform(
    scrollY,
    scrollPositions,
    [300,200, 100, 0, 0, -100,-200,-300]
  );

  const imageOpacity = useTransform(
    scrollY,
    scrollPositions,
    [0, 0.3, 0.6, 1, 1, 0.8, 0.6, 0.3]
  );

  const textMove = useTransform(
    scrollY,
    scrollPositions,
    [0, 100, 50, 0, 0, -50, -100, -150]
  );


  useMotionValueEvent(scrollY,'change',function(){
    console.log(scrollY);
    
  })


  useEffect(() => {
    if (fetchedChapterData) {
      setChapterData(fetchedChapterData);
    }
  }, [fetchedChapterData]);

  return imageIsLeft ? (
    <div className={styles.chapterContainerLeft}>
      <motion.img
        style={{
          y: imageMove,
          opacity: imageOpacity,
        }}
        src={chapterData?.image}
        alt=""
      />
      <motion.div
        style={{
          y: textMove,
        }}
      >
        <h1>{chapterData?.title}</h1>
        <p>{chapterData?.description}</p>
      </motion.div>
    </div>
  ) : (
    <div className={styles.chapterContainerRight}>
      <motion.img
        style={{
          y: imageMove,
          opacity: imageOpacity,
        }}
        src={chapterData?.image}
        alt=""
      />
      <motion.div
        style={{
          y: textMove,
        }}
      >
        <h1>{chapterData?.title}</h1>
        <p>{chapterData?.description}</p>
      </motion.div>
    </div>
  );
}

export default TopicChapter;
