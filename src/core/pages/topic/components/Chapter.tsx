import { useEffect, useRef, useState } from "react";
import styles from "./css/chapter.module.css";
import { ITopicChapter } from "../../../shared/types/ITopicChapter";
import { motion,useInView,useAnimation} from "framer-motion";


function Chapter({fetchedChapterData,imageIsLeft}: {fetchedChapterData: ITopicChapter, imageIsLeft: boolean}) {
  const [chapterYear, setChapterYear] = useState<string>("");
  const [chapterTitle, setChapterTitle] = useState<string>("");
  const [chapterImage, setChapterImage] = useState<string>("");
  const [chapterDescription, setChapterDescription] = useState<string>("");


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })
  const horizontalAnimation = useAnimation()


    useEffect(() => {
    if (fetchedChapterData) {
      let [year, title] = fetchedChapterData.title.split(" - ");
      setChapterYear(year);
      setChapterTitle(title);
      setChapterImage(fetchedChapterData.image);
      setChapterDescription(fetchedChapterData.description);
    }
    }, [fetchedChapterData]);
  

  useEffect(() => {
    if (isInView) {
      horizontalAnimation.start({
        x: 0
      });
    } else{
      horizontalAnimation.start({
        x: imageIsLeft ? -600 : 600
      })
    }
    }, [horizontalAnimation, imageIsLeft, isInView]);



  return (
    <motion.div
      initial={{ x: imageIsLeft ? -600 : 600 }}
      animate={horizontalAnimation}
      transition={{duration: 1, type: "spring"}}
      ref={ref}
      className={imageIsLeft ? styles.chapterContainerLeft : styles.chapterContainerRight}>
      <motion.img 
      src={chapterImage} alt={chapterTitle} />
      <motion.div
      className={styles.textContainer}>
        <h1>{chapterYear}<br />{chapterTitle}
        </h1>
        <p>{chapterDescription}</p>
      </motion.div>
    </motion.div>
  );
}

export default Chapter;
