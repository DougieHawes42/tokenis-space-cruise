import { useState, useEffect, useRef } from "react";
import p5 from "p5";

import "./style.scss";

import { drawScene } from "./drawScene";

const Game = ({ onClick }) => {
  const [gamePlaying, setGamePlaying] = useState(true);
  const [playerScore, setPlayerScore] = useState(0);
  const [playerLives, setPlayerLives] = useState(5);

  const containerRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      const canvasWidth = 300;
      const canvasHeight = 600;
      const horizonY = 100;

      // Road setup
      const numDots = 10;
      const dotSpacing = 50;
      const dotRadius = 8;

      const roadLeftX = -20;
      const horizonLeft = canvasWidth * 0.4;
      const roadRightX = canvasWidth + 20;
      const horizonRight = canvasWidth * 0.6;

      let leftDots = [];
      let rightDots = [];
      for (let i = 0; i < numDots; i++) {
        leftDots.push(horizonY + i * dotSpacing);
        rightDots.push(horizonY + i * dotSpacing);
      }

      p.setup = () => {
        p.createCanvas(canvasWidth, canvasHeight);
      };

      p.draw = () => {
        p.background(25, 0, 50); // dark purple

        // Call your drawScene function
        drawScene(
          p,
          canvasWidth,
          horizonY,
          leftDots,
          rightDots,
          roadLeftX,
          horizonLeft,
          roadRightX,
          horizonRight,
          dotRadius,
        );
      };
    };

    const p5Instance = new p5(sketch, containerRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return (
    <div className="game">
      {gamePlaying ? (
        <div ref={containerRef}></div>
      ) : (
        <div className="button" onClick={onClick}>
          TO MENU
        </div>
      )}
    </div>
  );
};

export default Game;
