import styles from './css/references.module.css'

interface reference{
    name:string,
    url:string
}

function References() {

    const references:reference[] = [
  {
    "name": "jardinemotors.co.uk",
    "url": "https://news.jardinemotors.co.uk/lifestyle/the-history-of-car-technology"
  },
  {
    "name": "wikipedia",
    "url": "https://en.wikipedia.org/wiki/Car"
  },
  {
    "name": "belairdirect.com",
    "url": "https://www.belairdirect.com/blog/history-automobile"
  },
  {
    "name": "medium.com",
    "url": "https://medium.com/@caknowapp/the-evolution-of-cars-4b6eeebe84f"
  },
  {
    "name": "worldometers",
    "url": "https://www.worldometers.info/cars/"
  },
  {
    "name": "toento.com",
    "url": "https://toento.com/auto/history-of-cars"
  },
  {
    "name": "history.com",
    "url": "https://www.history.com/news/car-history-timeline"
  },
  {
    "name": "cbac.com",
    "url": "https://www.cbac.com/media-center/blog/2021/december/from-flintstones-to-tesla-a-brief-lesson-on-the-/"
  }
]

    return (
      <div className={styles.topicReferencesContainer}>
          {references.map((reference, index) => (
              <a href={reference.url}>{reference.name}</a>
          ))}
      </div>
    );
}

export default References;