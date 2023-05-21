import { useEffect, useRef } from 'react';
import styles from './CanvasInfographic.module.css'; 

function CanvasInfographic() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return; // Check if canvas is null before proceeding

      const ctx = canvas.getContext("2d");
      if (!ctx) return; // Check if canvas is null before proceeding
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const drawRandomDots = () => {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Clear canvas before drawing new dots

         for (let i = 0; i < 1000; i++) {
           const x = Math.random() * canvasWidth;
           const y = Math.random() * canvasHeight;
           const radius = 1;
           const color = "#000090";

           ctx.beginPath();
           ctx.arc(x, y, radius, 0, 2 * Math.PI);
           ctx.fillStyle = color;
           ctx.fill();
           ctx.closePath();
         }

      };

      drawRandomDots();
    }, []);


    return (
      <div className={styles.canvasInfographicContainter}>
        <img src="./assets/images/world_map.png" alt="" />
        <canvas ref={canvasRef}></canvas>
      </div>
    );
}

export default CanvasInfographic;