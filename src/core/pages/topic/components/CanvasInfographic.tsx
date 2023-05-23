import { useEffect, useRef, useState } from 'react';
import { IApiData } from "../../../shared/types/IApiData";
import styles from './css/canvasInfographic.module.css'; 
import getApiData from '../../../services/ApiDataService';
import AnimatedNumbers from "react-animated-numbers";


function CanvasInfographic() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [canvasWidth,setCanvasWidth] = useState<number>(0);
    const [canvasHeight,setCanvasHeight] = useState<number>(0);
    const [ctx,setCtx] = useState<CanvasRenderingContext2D | null>(null);
    const [apiData, setApiData] = useState<IApiData[] | null>(null);
    const [currentData, setCurrentData] = useState<IApiData | null>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      setCtx(canvas?.getContext("2d") ?? null);
      setCanvasWidth(canvas.width)
      setCanvasHeight(canvas.height)
    }, []);

    useEffect(() => {
      getApiData().then((data) => {
        setApiData(data);
        updateData(data[0])
        
      })
    }, []);

    const updateData = (data: IApiData) => {
      drawRandomDots(data.cars);
      setCurrentData(data);      
    };

    const drawRandomDots = (cars: number) => {
        const color = "#000090";
        let size = 3;
        let multiplier = 1;

        if (cars > 1000000) {
          multiplier = 0.001;
          size = 4;
        }

        if (cars > 100000000) {
          multiplier = 0.0005;
          size = 5;
        }
        
        if (cars > 300000000) {
          multiplier = 0.00009;
          size = 7;
        }

        if (cars > 1000000000) {
          multiplier = 0.00005;
          size = 9;
        }

        if (!ctx) return;
        ctx.fillStyle = color;
        ctx.clearRect(0, 0, 3840, 2160);


         for (let i = 0; i < cars * multiplier; i++) {
           const x = Math.random() * canvasWidth;
           const y = Math.random() * canvasHeight;

           ctx.fillRect(x, y, size, size);
         }

      };



    return (
      <div className={styles.infographicContainer}>
        <div className={styles.canvasContainter}>
          <img src="./assets/images/world_map.png" alt="" />
          <canvas width={3840} height={2160} ref={canvasRef}></canvas>
          <div className={styles.titleContainer}>
            <h1>
              <AnimatedNumbers
              includeComma 
              animateToNumber={currentData ? currentData.cars : 0}/>
              cars in the world
              <AnimatedNumbers 
              animateToNumber={currentData ? currentData.year : 0}/>   
            </h1>         
          </div>
        </div>
        <div className={styles.optionsContainer}>
            {(apiData ? apiData.map((data) => {
              return <button key={data.year} onClick={() => updateData(data)}>{data.year}</button>}) 
              : <></>)}
        </div>
      </div>
    );
}

export default CanvasInfographic;