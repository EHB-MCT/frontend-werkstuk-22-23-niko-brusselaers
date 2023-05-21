import { motion, useInView, useScroll, useTransform } from "framer-motion";
import styles from "./ChapterTitle.module.css";
import { useEffect, useRef, useState } from "react";

function ChapterTitle({ title }: { title: string | undefined }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollY } = useScroll();
  const [scrollYPosition, setScrollYPosition] = useState<number>(0);
  const verticalMove = useTransform(
    scrollY,
    [0 + scrollYPosition, 500 + scrollYPosition],
    [50, -50]
  );

  useEffect(() => {
    if (isInView && scrollYPosition === 0) {
      console.log("in view");
      setScrollYPosition(scrollY.get());
    }
  }, [isInView, scrollYPosition, scrollY]);

  return (
    <div className={styles.chapterTitle} ref={ref}>
      <motion.h1 initial={{ y: -100 }} style={{ y: verticalMove }}>
        {title}
      </motion.h1>
      <div></div>
    </div>
  );
}

export default ChapterTitle;
