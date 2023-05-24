import styles from "./modal.module.css";
import {ITopicDetails} from '../../../shared/types/ITopicDetails';
import { useEffect, useState } from "react";


function Modal({ topicItemDetails, handleClick }: {  topicItemDetails: ITopicDetails| undefined, handleClick:Function}) {

  const handleCloseClick = () => {
    handleClick(undefined);
  };

  return (
    (topicItemDetails ? 
    <div className={styles.modalOverlayShown}>
        <button className={styles.overlayButton} onClick={handleCloseClick}></button>
      <div className={styles.modalContainer }>
          <div className={styles.contentContainer}>
            <img src={topicItemDetails.image} alt="" />
            <div>
              <h1>Title: {topicItemDetails.title}</h1>
              <p>Author: {topicItemDetails.author}</p>
            </div>
          </div>
        <div className={styles.buttonContainer}>
          <button onClick={handleCloseClick}>Close modal</button>
          <a href={topicItemDetails.url} target="_blank" rel="noopener noreferrer">visit page</a>
        </div>
      </div>
    </div>
    : <></>
    )
    
  );
}

export default Modal;
