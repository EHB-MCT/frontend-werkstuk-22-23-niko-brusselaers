import { useEffect, useRef, useState } from 'react';
import { IApiData } from "../../../shared/types/IApiData";

import styles from './css/canvasInfographic.module.css'; 
import getApiData from '../../../services/ApiDataService';

function CanvasInfographic() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [canvasWidth,setCanvasWidth] = useState<number>(0);
    const [canvasHeight,setCanvasHeight] = useState<number>(0);
    const [ctx,setCtx] = useState<CanvasRenderingContext2D | null>(null);
    const [apiData, setApiData] = useState<IApiData[] | null>(null);

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
        updateAmountOfDots(data[0].cars)
        
      })
    }, []);

    const updateAmountOfDots = (amount: number) => {
      drawRandomDots(amount);      
    };

    const drawRandomDots = (amount:number) => {
        const color = "#000090";
        let size = 3;
        let multiplier = 1;

        if (amount > 1000000) {
          multiplier = 0.001;
          size = 4;
        }

        if (amount > 100000000) {
          multiplier = 0.0005;
          size = 5;
        }
        
        if (amount > 300000000) {
          multiplier = 0.00009;
          size = 7;
        }

        if (amount > 1000000000) {
          multiplier = 0.00005;
          size = 9;
        }

        if (!ctx) return;
        ctx.fillStyle = color;
        ctx.clearRect(0, 0, 3840, 2160);


         for (let i = 0; i < amount * multiplier; i++) {
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
        </div>
        <div className={styles.optionsContainer}>
            {(apiData ? apiData.map((data) => {
              return <button key={data.year} onClick={() => updateAmountOfDots(data.cars)}>{data.year}</button>}) 
              : <></>)}
        </div>
      </div>
    );
}

export default CanvasInfographic;