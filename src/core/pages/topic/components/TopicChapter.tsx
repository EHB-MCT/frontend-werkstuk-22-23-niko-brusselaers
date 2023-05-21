import { useEffect, useRef, useState } from "react";
import styles from "./TopicChapter.module.css";
import { topicChapter } from "../../../types/topicChapter";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

function TopicChapter({
  fetchedChapterData,
  imageIsLeft,
}: {
  fetchedChapterData: topicChapter | undefined;
  imageIsLeft: boolean;
}) {
  const [chapterYear, setChapterYear] = useState<string>("");
  const [chapterTitle, setChapterTitle] = useState<string>("");
  const [chapterImage, setChapterImage] = useState<string>("");
  const [chapterDescription, setChapterDescription] = useState<string>("");
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [scrollYPosition, setScrollYPosition] = useState<number>(0);
  const { scrollY } = useScroll();
  const scrollPositions: number[] = [
    scrollYPosition,
    400 + scrollYPosition,
    800 + scrollYPosition,
    1000 + scrollYPosition,
    1400 + scrollYPosition,
    1800 + scrollYPosition,
  ];


  

  useEffect(() => {
    if (isInView && scrollYPosition === 0) {
      setScrollYPosition(scrollY.get());
    }
  }, [isInView, scrollYPosition,scrollY]);


  const horizontalMove = useTransform(
    scrollY,
    scrollPositions,
    imageIsLeft ? [-600,-300, 0, 0, 300, 600] : [ 600,300, 0, 0, -300, -600],
  );

  const verticalMove = useTransform(
    scrollY,
    scrollPositions,
    [150, 50, 0, 0, -50, -150],
  );

  useEffect(() => {
    if (fetchedChapterData) {
      let [year, title] = fetchedChapterData.title.split(" - ");
      setChapterYear(year);
      setChapterTitle(title);
      setChapterImage(fetchedChapterData.image);
      setChapterDescription(fetchedChapterData.description);
    }
  }, [fetchedChapterData]);

  return (
      <motion.div
        ref={ref}
        style={{
          x: horizontalMove,
        }}
        className={
          imageIsLeft
            ? styles.chapterContainerLeft
            : styles.chapterContainerRight
        }
      >
        <img src={chapterImage} alt={chapterTitle} />
        <div>
          <motion.h1
            style={{
              y: verticalMove,
            }}
          >
            {chapterYear}
            <br />
            {chapterTitle}
          </motion.h1>
          <motion.p
            style={{
              y: verticalMove,
            }}
          >
            {chapterDescription}
          </motion.p>
        </div>
      </motion.div>
  );
}

export default TopicChapter;
