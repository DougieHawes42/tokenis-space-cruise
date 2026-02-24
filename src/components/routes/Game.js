import { useState, useEffect, useRef } from "react";
import p5 from "p5";

import "./style.scss";

const Game = ({ onClick }) => {
  const [gamePlaying, setGamePlaying] = useState(true);
  const [playerScore, setPlayerScore] = useState(0);
  const [playerLives, setPlayerLives] = useState(5);

  const containerRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      // ─── PLAYER STATE ─────────────────────────────
      let playerX;
      let playerBaseY;
      let playerRadius = 20;
      let playerSpeed = 5;

      // Jump physics
      let jumpOffset = 0;
      let jumpVel = 0;
      let gravity = 0.2;
      let jumpStrength = -5;
      let isJumping = false;

      // Scene
      let horizonY;

      // ─── SETUP ────────────────────────────────────
      p.setup = () => {
        p.createCanvas(600, 400);

        horizonY = p.height * 0.4;

        playerX = p.width / 2;
        playerBaseY = p.height * 0.75;
      };

      // ─── DRAW LOOP ────────────────────────────────
      p.draw = () => {
        p.background(255, 0, 255); // sky

        drawScore();
        drawSun();
        drawHorizon();
        drawRoad();
        updatePlayer();
        updateJump();
        drawPlayer();
        drawLives();
      };

      // ─── LOGIC ────────────────────────────────────
      const updatePlayer = () => {
        if (p.keyIsDown(p.LEFT_ARROW) || p.keyIsDown(65)) {
          playerX -= playerSpeed;
        }
        if (p.keyIsDown(p.RIGHT_ARROW) || p.keyIsDown(68)) {
          playerX += playerSpeed;
        }

        // keep player one full width from edges
        playerX = p.constrain(
          playerX,
          playerRadius * 2,
          p.width - playerRadius * 2,
        );
      };

      const updateJump = () => {
        if ((p.keyIsDown(p.UP_ARROW) || p.keyIsDown(87)) && !isJumping) {
          jumpVel = jumpStrength;
          isJumping = true;
        }

        jumpVel += gravity;
        jumpOffset += jumpVel;

        if (jumpOffset > 0) {
          jumpOffset = 0;
          jumpVel = 0;
          isJumping = false;
        }
      };

      // ─── RENDERING ────────────────────────────────
      const drawScore = () => {
        p.fill(255); // white text
        p.textSize(24); // readable size
        p.textAlign(p.CENTER); // center horizontally
        p.text(playerScore, p.width / 2, 30); // y=30 from top
      };

      const drawLives = () => {
        const barHeight = 20;
        const totalLives = playerLives;

        if (totalLives <= 0) return;

        const barWidth = p.width / totalLives;

        for (let i = 0; i < totalLives; i++) {
          const x = i * barWidth;
          const y = p.height - barHeight;

          p.fill(255, 0, 0); // red fill
          p.stroke(0); // black outline
          p.strokeWeight(2);

          p.rect(x, y, barWidth, barHeight);
        }

        // Reset stroke so it doesn't affect other shapes
        p.noStroke();
      };

      const drawPlayer = () => {
        p.fill(255);
        p.noStroke();
        p.circle(playerX, playerBaseY + jumpOffset, playerRadius * 2);
      };

      const drawRoad = () => {
        const bottomWidth = p.width * 1.3;
        const topWidth = p.width * 0.21;

        p.fill(0, 255, 0);
        p.noStroke();

        p.beginShape();
        p.vertex(p.width / 2 - topWidth / 2, horizonY);
        p.vertex(p.width / 2 + topWidth / 2, horizonY);
        p.vertex(p.width / 2 + bottomWidth / 2, p.height);
        p.vertex(p.width / 2 - bottomWidth / 2, p.height);
        p.endShape(p.CLOSE);
      };

      const drawHorizon = () => {
        p.fill(0, 0, 255);
        p.rect(0, p.height * 0.4, p.width, p.height * 0.5);
      };

      const drawSun = () => {
        p.fill(255, 255, 0);
        p.circle(p.width / 2, p.height * 0.4, 200);
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
