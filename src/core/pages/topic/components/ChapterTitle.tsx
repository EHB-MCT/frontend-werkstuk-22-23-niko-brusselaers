import { motion, useInView, useScroll, useTransform } from "framer-motion";
import styles from "./css/chapterTitle.module.css";
import { useEffect, useRef, useState } from "react";

function ChapterTitle({ title, isLeft }: { title: string | undefined, isLeft: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollY } = useScroll();
  const [scrollYPosition, setScrollYPosition] = useState<number>(0);
  
  const verticalMove = useTransform(
    scrollY,
    [0 + scrollYPosition, 600 + scrollYPosition],
    [50, -50]
  );

  //if component is in view, get current scrollposition and store in variable
  useEffect(() => {
    if (isInView && scrollYPosition === 0) {
      setScrollYPosition(scrollY.get());
    }
  }, [isInView, scrollYPosition, scrollY]);

  return (
    <div className={isLeft ? styles.chapterTitleLeft : styles.chapterTitleRight } ref={ref}>
      <motion.h1 initial={{ y: -100}} style={{ y: verticalMove }}>
        {title}
      </motion.h1>
      <div></div>
    </div>
  );
}

export default ChapterTitle;
