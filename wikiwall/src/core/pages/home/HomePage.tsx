import styles from './HomePage.module.css'
import TopicItem from './folder/TopicItem';


function HomePage() {
    return (
      <div className={styles.homePageContainer}>
        <div></div>
        <div className={styles.topicItemsContainer}>
          <TopicItem topicGridSize="gridDefault" categoryType="sport" />
          <TopicItem topicGridSize="threeColumn twoRow" categoryType="sport" />
          <TopicItem topicGridSize="twoColumn" categoryType="sport" />
          <TopicItem topicGridSize="gridDefault" categoryType="sport" />
          <TopicItem topicGridSize="gridDefault" categoryType="sport" />
          <TopicItem topicGridSize="gridDefault" categoryType="sport" />
          <TopicItem topicGridSize="gridDefault" categoryType="sport" />
          <TopicItem topicGridSize="gridDefault" categoryType="sport" />
          <TopicItem topicGridSize="twoColumn twoRow" categoryType="sport" />
          <TopicItem topicGridSize="gridDefault" categoryType="sport" />
          <TopicItem topicGridSize="gridDefault" categoryType="sport" />
          <TopicItem topicGridSize="gridDefault" categoryType="sport" />
          <TopicItem topicGridSize="gridDefault" categoryType="sport" />
          <TopicItem topicGridSize="gridDefault" categoryType="sport" />
          <TopicItem topicGridSize="gridDefault" categoryType="sport" />
          <TopicItem topicGridSize="gridDefault" categoryType="sport" />
          <TopicItem topicGridSize="gridDefault" categoryType="sport" />
          <TopicItem topicGridSize="gridDefault" categoryType="sport" />
        </div>
        <div></div>
      </div>
    );
}

export default HomePage;