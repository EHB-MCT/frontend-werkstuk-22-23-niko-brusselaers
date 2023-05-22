import { useEffect, useRef, useState } from "react";
import styles from "./TopicChapter.module.css";
import { ITopicChapter } from "../../../types/ITopicChapter";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import RotatingModelViewer from "./RotatingModelViewer";
import { IModel } from "../../../types/IModel";

function TopicChapter({
  fetchedChapterData,
  imageIsLeft,
}: {
  fetchedChapterData: ITopicChapter | undefined;
  imageIsLeft: boolean;
}) {
  const [chapterYear, setChapterYear] = useState<string>("");
  const [chapterTitle, setChapterTitle] = useState<string>("");
  const [chapterImage, setChapterImage] = useState<string>("");
  const [chapterDescription, setChapterDescription] = useState<string>("");
  const [chapterModel, setChapterModel] = useState<IModel| undefined>();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [scrollYPosition, setScrollYPosition] = useState<number>(0);
  const { scrollY } = useScroll();
  const scrollPositionsHorizontalMove: number[] = [
    scrollYPosition,
    400 + scrollYPosition,
    800 + scrollYPosition,
    1000 + scrollYPosition,
    1400 + scrollYPosition,
    1800 + scrollYPosition,
  ];

  const scrollPositionsverticalMove: number[] = [
    1000 + scrollYPosition,
    1400 + scrollYPosition,
    1800 + scrollYPosition,
  ]

    useEffect(() => {
    if (fetchedChapterData) {
      let [year, title] = fetchedChapterData.title.split(" - ");
      setChapterYear(year);
      setChapterTitle(title);
      setChapterImage(fetchedChapterData.image);
      setChapterDescription(fetchedChapterData.description);
      setChapterModel(fetchedChapterData.model);
    }
    }, [fetchedChapterData]);
  

  useEffect(() => {
    if (isInView && scrollYPosition === 0) {
      setScrollYPosition(scrollY.get());
    }
    }, [isInView, scrollYPosition,scrollY]);


  const horizontalMove = useTransform(
    scrollY,
    scrollPositionsHorizontalMove,
    imageIsLeft ? [-600,-300, 0, 0, 0, 0] : [ 600,300, 0, 0, 0, 0]
  );

  const verticalMove1 = useTransform(
    scrollY,
    scrollPositionsverticalMove,
    [0, 100, 200],
  );

   const verticalMove2 = useTransform(
    scrollY,
    scrollPositionsverticalMove,
    [-100, 100, 300],
  );



  return (
    <motion.div
      style={{x: horizontalMove}}
      ref={ref}
      className={imageIsLeft ? styles.chapterContainerLeft : styles.chapterContainerRight}>
      {(chapterModel ? 
      <motion.div
      style={{y: verticalMove2}}
      className={styles.modelContainer}>
        <RotatingModelViewer chapterModel={chapterModel} />
      </motion.div>
      :
      <></> 
      )}
      

      <motion.img 
      style={{y: verticalMove1}}
      src={chapterImage} alt={chapterTitle} />
      <motion.div
      style={{y: verticalMove1}}
      className={styles.textContainer}>
        <h1>
          {chapterYear}
          <br />
          {chapterTitle}
        </h1>
        <p>{chapterDescription}</p>
      </motion.div>
    </motion.div>
  );
}

export default TopicChapter;
