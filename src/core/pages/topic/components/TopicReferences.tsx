import styles from './TopicReferences.module.css'


function TopicReferences({references}:{references:string[]}) {
    return (
      <div className={styles.topicReferencesContainer}>
        <h1>Sources and handy links</h1>
        <ul>
          {references.map((reference, index) => (
            <li key={index}>
              <a href={reference}>{reference}</a>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default TopicReferences;