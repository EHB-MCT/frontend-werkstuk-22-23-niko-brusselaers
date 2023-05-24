import { useEffect, useState } from 'react';
import styles from './HomePage.module.css'
import {ITopicDetails} from '../../shared/types/ITopicDetails';
import Navigation from './components/TopicItem/navigation/Navigation';
import TopicItem from './components/TopicItem/TopicItem';
import Footer from './components/TopicItem/footer/Footer';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Modal from './components/Modal';
import getTopicItems from '../../services/topicItemsService';

interface Topic {
  topicItemDetails: ITopicDetails
  topicGridSize: string;
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

   useEffect(() => {
      getTopicItems().then((data) => {
        let list:Topic[] = []
        const gridOptions = ["twoColumn", "threeColumn twoRow"];
        data.forEach((topic:ITopicDetails) => {

          if (topic.isFeatured) {
              list.push({
              topicItemDetails: topic,
              topicGridSize: gridOptions[Math.round(Math.random() * gridOptions.length)]
              })            
          } else{
              list.push({
              topicItemDetails: topic,
              topicGridSize: "gridDefault"
              })
          }
        });
        setTopicItemList(list)
      });
    }, []);

  //  // create filler data to display on homepage
  //   useEffect(() => {
  //     let list:Topic[] = []
  //     const gridOptions = ["gridDefault","twoColumn", "threeColumn twoRow"];
  //     for (let index = 0; index < 20; index++) {
  //       list.push({
  //         topicItemDetails: {
  //           image: "https://picsum.photos/200",
  //           title: "title",
  //           author: "some person",
  //           url: "/",
  //           category:'category',
  //           isFeatured: false,
  //         },
  //         topicGridSize: gridOptions[Math.round(Math.random() * 2)]
  //       });
        
  //     }
  //     setTopicItemList(list)
  //   }, []);

    function handleTopicItemClick (topicItem: ITopicDetails){
    setSelectedTopicItem(topicItem);
  };

    return (
      <>
        <Navigation/>
        <Modal topicItemDetails={selectedTopicItem} handleClick={handleTopicItemClick} />

        <div className={styles.homePageContainer}>
          <div className={styles.sideContainer}></div>
          <motion.div 
          style={isCollapsed ?{ zIndex: 0} : {zIndex:1}}
          className={styles.topicItemsContainer}>
            {(topicItemList?.map((element:Topic, index) => 
            <TopicItem topicItemDetails={element.topicItemDetails} 
            topicGridSize={element.topicGridSize} 
            key={index} 
            handleClick={handleTopicItemClick}/>  
            ))
              }
        </motion.div>
          <div></div>
        </div>
        <Footer/>
      </>
    );
}

export default HomePage;