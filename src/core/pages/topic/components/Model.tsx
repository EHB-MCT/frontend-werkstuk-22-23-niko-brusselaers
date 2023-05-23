import { useEffect, useState } from "react";
import { IModel } from "../../../shared/types/IModel";
import getModels from "../../../services/modelService";
import RotatingModelViewer from "../../../shared/components/RotatingModelViewer/RotatingModelViewer";
import styles from "./css/model.module.css";


function Model() {
    const [models, setModels] = useState<IModel[]|undefined>();
    const [selectedModel, setSelectedModel] = useState<IModel|undefined>(undefined);
    
    //fetch modelData
    useEffect(() => {
        getModels().then((data) => {
            setModels(data);   
        })
    }, []);
    
    //if modelData is fetched, set selected model to first in array
    useEffect(() => {
    if (models) {
        setSelectedModel(models[0]);
    }
    }, [models]);

    return ( 
        <div className={styles.topicModel}>
            <div className={styles.modelContainer}>
                {(selectedModel ? <RotatingModelViewer model={selectedModel} /> : <></>)}
            </div>
            <div className={styles.modelOptions}>
                {(models ? models.map((model) => {
                    return (
                        <button key={model.name} onClick={() => setSelectedModel(model)}>
                            {model.name}
                        </button>
                    )
                }): <></>)}
            </div>
        </div>
     );
}

export default Model;