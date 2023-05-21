import styles from './TopicIntro.module.css'
import { topicChapter } from "../../../types/topicChapter";


function TopicIntro({ introChapter }: { introChapter: topicChapter | undefined }) {
  return (
    <div className={styles.introductionContainer}>
      <h1>{introChapter?.title}</h1>
      <p>{introChapter?.description}</p>
      <div className={styles.imageContainer}>
        <img src={introChapter?.image} alt="" />
      </div>
    </div>
  );
}

export default TopicIntro;