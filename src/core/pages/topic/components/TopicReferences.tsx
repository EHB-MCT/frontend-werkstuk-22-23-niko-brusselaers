import styles from './TopicReferences.module.css'


function TopicReferences({references}:{references:string[]}) {
    return (
      <div className={styles.topicReferencesContainer}>
          {references.map((reference, index) => (
              <a href={reference}>{reference}</a>
          ))}
      </div>
    );
}

export default TopicReferences;