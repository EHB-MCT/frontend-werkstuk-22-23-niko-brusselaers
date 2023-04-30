import './TopicItem.css'

function TopicItem({ topicGridSize, categoryType= "sport" }: { topicGridSize: string, categoryType: string }) {
  return (
    <div className={`topicItemContainer ${topicGridSize}`}>
      <div className="imageContainer">
        <img
          src="https://pixabay.com/get/g3d47dca952353bca43d012c1f2335d31b9893737ab00df9d2edade2db9581a6e1d97b083e14651de738f841cc7aa2fb3_1280.jpg"
          alt=""
        />
      </div>
      <div className='titleContainer'>
        <p>lorem ipsum</p>
      </div>
      <div className="categoryContainer">
        <span></span> <p>{categoryType}</p>
      </div>
    </div>
  );
}

export default TopicItem;