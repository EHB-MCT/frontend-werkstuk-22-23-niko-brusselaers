import { useEffect, useState } from 'react';
import styles from './HomePage.module.css'
import ITopicDetails from '../../shared/types/ITopicDetails';
import Navigation from './components/TopicItem/navigation/Navigation';
import TopicItem from './components/TopicItem/TopicItem';
import Footer from './components/TopicItem/footer/Footer';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

interface Topic {
  topicItemDetails: ITopicDetails
  topicGridSize: string;
}

function HomePage() {
  const [topicItemList, setTopicItemList] = useState<Topic[] | undefined>(undefined);
  const [isCollapsed,setIsCollapsed] = useState<boolean>(false)
  const scrollYProgress = useScroll().scrollY;

    //if we scroll far enough down the page, change isCollapsed value and z-index of topicListContainer get changed
   useMotionValueEvent(scrollYProgress, "change", () => {
       if (scrollYProgress.get() > 300) {
         setIsCollapsed(true);
       } else {
         setIsCollapsed(false);
       }
   });

   // create filler data to display on homepage
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
      <>
        <Navigation/>
        <div className={styles.homePageContainer}>
          <div></div>
          <motion.div 
          style={isCollapsed ?{ zIndex: 0} : {zIndex:1}}
          className={styles.topicItemsContainer}>
            {(topicItemList?.map((element:Topic) => <TopicItem topicItemDetails={element.topicItemDetails}  topicGridSize={element.topicGridSize}/>))}
        </motion.div>
          <div></div>
        </div>
        <Footer/>
      </>
    );
}

export default HomePage;