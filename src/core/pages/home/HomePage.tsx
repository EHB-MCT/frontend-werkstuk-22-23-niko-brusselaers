import { useEffect, useState } from 'react';
import style from './HomePage.module.css'
import {ITopicDetails} from '../../shared/types/ITopicDetails';
import Navigation from './components/navigation/Navigation';
import TopicItem from './components/TopicItem/TopicItem';
import Footer from './components/footer/Footer';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Modal from './components/Modal';
import getTopicItems from '../../services/topicItemsService';

interface Topic {
  topicItemDetails: ITopicDetails
  topicGridSize: string;
}

interface filterOptions {
  
}

function HomePage() {
  const [topicItemList, setTopicItemList] = useState<Topic[] | undefined>(undefined);
  const [filteredTopicItemList, setFilteredTopicItemList] = useState<Topic[] | undefined>(undefined);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [selectedTopicItem, setSelectedTopicItem] = useState<ITopicDetails | undefined>(); 
  const scrollYProgress = useScroll().scrollY;

    //if we scroll far enough down the page, change isCollapsed value and z-index of topicListContainer get changed
   useMotionValueEvent(scrollYProgress, "change", () => {
       if (scrollYProgress.get() > 300) {
         setIsCollapsed(true);
       } else {
         setIsCollapsed(false);
       }
   });

   //get topics from service and set topicItemList
   useEffect(() => {
      getTopicItems().then((data) => {
        let list:Topic[] = []
        data.forEach((topic:ITopicDetails) => {

          if (topic.isFeatured) {
              list.push({
              topicItemDetails: topic,
              topicGridSize: "threeColumn twoRow"
              })            
          } else{
              list.push({
              topicItemDetails: topic,
              topicGridSize: "gridDefault"
              })
          }
        });
        setTopicItemList(list)
        setFilteredTopicItemList(list)
      });
    }, []);

    //update selectedTopicItem
    function handleTopicItemClick (topicItem: ITopicDetails){
    setSelectedTopicItem(topicItem);
    };

    return (
      <>
        <Navigation/>
        <Modal topicItemDetails={selectedTopicItem} handleClick={handleTopicItemClick} />
        <div className={style.homePageContainer}>
          <div className={style.sideContainer}></div>
          <motion.div 
          style={isCollapsed ?{ zIndex: 0} : {zIndex:1}}
          className={style.topicItemsContainer}>
            {(filteredTopicItemList?.map((element:Topic, index) => 
            <TopicItem topicItemDetails={element.topicItemDetails} 
            topicGridSize={element.topicGridSize} 
            key={index} 
            handleClick={handleTopicItemClick}/>  
            ))
              }
        </motion.div>
          <div className={style.sideContainer}></div>
        </div>
        <Footer/>
      </>
    );
}

export default HomePage;