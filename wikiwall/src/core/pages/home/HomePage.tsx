import { useEffect, useState } from 'react';
import styles from './HomePage.module.css'
import TopicItem from './folder/TopicItem';
import ITopicDetails from '../../shared/types/ITopicDetails';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

interface Topic {
  topicItemDetails: ITopicDetails
  topicGridSize: string;
}

function HomePage() {
  const [topicItemList, setTopicItemList] = useState<Topic[] | undefined>(undefined);
  const [isCollapsed,setIsCollapsed] = useState<boolean>(false)
  const scrollYProgress = useScroll().scrollY;


   useMotionValueEvent(scrollYProgress, "change", () => {
       if (scrollYProgress.get() > 300) {
         setIsCollapsed(true);
       } else {
         setIsCollapsed(false);
       }
   });

    useEffect(() => {
      let list:Topic[] = []
      const gridOptions = ["gridDefault","twoColumn", "threeColumn twoRow"];
      for (let index = 0; index < 20; index++) {
        list.push({
          topicItemDetails: {
            image: "https://picsum.photos/200",
            title: "title",
            author: "some person",
            url: "/",
            category:'category'
          },
          topicGridSize: gridOptions[Math.round(Math.random() * 2)]
        });
        
      }
      setTopicItemList(list)
    }, []);

    return (
      <div className={styles.homePageContainer}>
        <div></div>
        <motion.div 
        style={isCollapsed ?{ zIndex: 0} : {zIndex:1}}
        className={styles.topicItemsContainer}>
            {(topicItemList?.map((element:Topic) => <TopicItem topicItemDetails={element.topicItemDetails}  topicGridSize={element.topicGridSize}/>))}
        </motion.div>
        <div></div>
      </div>
    );
}

export default HomePage;