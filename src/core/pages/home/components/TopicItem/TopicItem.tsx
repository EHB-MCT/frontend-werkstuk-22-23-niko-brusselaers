import {motion } from 'framer-motion';
import {ITopicDetails} from '../../../../shared/types/ITopicDetails';
import './TopicItem.css'

function TopicItem({topicGridSize, topicItemDetails, handleClick }: { topicGridSize: string, topicItemDetails: ITopicDetails, handleClick:Function }) {


  const handleItemClick = () => {
    handleClick(topicItemDetails);
  };

  
  return (
    <motion.div
      className={`topicItemContainer ${topicGridSize}`}
      animate={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ ease: "easeOut", duration: ".75", delay: 0.5 }}
    >
      <button onClick={handleItemClick}>
        <div className="imageContainer">
          <img src={topicItemDetails.image} alt="" />
        </div>
        <div className="titleContainer">
          <p style={{textDecoration: "none"}}>{topicItemDetails.title}</p>
        </div>
        <div className={`categoryContainer ${topicItemDetails.isFeatured ? "isFeatured" : "default"}`} >
          <span></span> <p>{topicItemDetails.isFeatured ? "Featured" : topicItemDetails.category}</p>
        </div>
      </button>
    </motion.div>
  );
}

export default TopicItem;