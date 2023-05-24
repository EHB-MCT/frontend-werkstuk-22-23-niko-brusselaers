import styles from './css/intro.module.css'
import { ITopicChapter } from "../../../shared/types/ITopicChapter";
import { motion, useScroll, useTransform } from 'framer-motion';


function Intro({ introChapter }: { introChapter: ITopicChapter | undefined }) {
  const {scrollY} = useScroll();
  const verticalMove = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className={styles.introductionContainer}>
      <motion.h1
        style={{ y: verticalMove }}
        animate={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ ease: "easeOut", duration: ".75", delay: 1 }}
      >
        {introChapter?.title}
      </motion.h1>
      <motion.p
        style={{ y: verticalMove }}
        animate={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ ease: "easeOut", duration: "1", delay: 1.6 }}
      >
        {introChapter?.description}
      </motion.p>
      <div className={styles.imageContainer}>
        <motion.img
          animate={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: ".5", delay: 0.25 }}
          src={introChapter?.image}
          alt=""
        />
      </div>
    </div>
  );
}

export default Intro;