import styles from './css/references.module.css'


function References({references}:{references:string[]}) {
    return (
      <div className={styles.topicReferencesContainer}>
          {references.map((reference, index) => (
              <a href={reference}>{reference}</a>
          ))}
      </div>
    );
}

export default References;