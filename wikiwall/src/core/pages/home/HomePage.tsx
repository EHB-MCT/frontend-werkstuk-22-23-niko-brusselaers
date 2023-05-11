import { useEffect, useState } from 'react';
import styles from './HomePage.module.css'
import TopicItem from './folder/TopicItem';
import ITopicDetails from '../../shared/types/ITopicDetails';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';

interface Topic {
  topicItemDetails: ITopicDetails
  topicGridSize: string;
}

function HomePage() {
  const [topicItemList, setTopicItemList] = useState<Topic[] | undefined>(undefined);

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
          <div className={styles.topicItemsContainer}>
            {topicItemList?.map((element: Topic) => (
              <TopicItem
                topicItemDetails={element.topicItemDetails}
                topicGridSize={element.topicGridSize}
              />
            ))}
          </div>
          <div></div>
        </div>
        <Footer/>
      </>
    );
}

export default HomePage;