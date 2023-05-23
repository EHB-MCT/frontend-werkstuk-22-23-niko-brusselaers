import { useEffect, useState } from "react";
import getModels from "../../../services/modelService";
import { IModel } from "../../../types/IModel";
import RotatingModelViewer from "./RotatingModelViewer";
import styles from "./TopicModel.module.css";

const modelList:IModel[] = [
        {
        "name":"Ford Model T" ,
        "path":"./assets/models/ford_model_t.glb",
        "scale": 0.03 ,
        "pedistalPositionY": -0.725
      },{
        "name":"Volkswagen Beetle" , 
        "path":"./assets/models/volkswagen_beetle.glb",
        "scale": 1.5 ,
        "pedistalPositionY":-0.25
      },{
        "name":"Mercedes" ,
        "path":"./assets/models/modern_car.glb",
        "scale": 1.3 ,
        "pedistalPositionY":-0.25
      }]

function TopicModel() {
    const [models, setModels] = useState<IModel[]|undefined>();
    const [selectedModel, setSelectedModel] = useState<IModel|undefined>(undefined);
    

    useEffect(() => {
        setModels(modelList);   
    }, []);
    
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

export default TopicModel;