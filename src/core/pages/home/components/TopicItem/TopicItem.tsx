import {motion } from 'framer-motion';
import './TopicItem.css'
import {ITopicDetails} from '../../../../shared/types/ITopicDetails';

function TopicItem({topicGridSize, topicItemDetails }: { topicGridSize: string, topicItemDetails: ITopicDetails }) {
  return (
    <motion.div
      className={`topicItemContainer ${topicGridSize}`}
      animate={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ ease: "easeOut", duration: ".75", delay: 0.5 }}
    >
      <a href={topicItemDetails.url}>
        <div className="imageContainer">
          <img src={topicItemDetails.image} alt="" />
        </div>
        <div className="titleContainer">
          <p style={{textDecoration: "none"}}>{topicItemDetails.title}</p>
        </div>
        <div className="categoryContainer">
          <span></span> <p>{topicItemDetails.category}</p>
        </div>
      </a>
    </motion.div>
  );
}

export default TopicItem;