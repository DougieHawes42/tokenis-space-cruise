// drawScene.js
export const drawScene = (
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
) => {
  const pink = [255, 20, 150]; // neon pink

  // Draw road lines
  p.stroke(pink[0], pink[1], pink[2]);
  p.strokeWeight(3);
  p.line(0, horizonY, canvasWidth, horizonY);
  p.line(roadLeftX, p.height, horizonLeft, horizonY);
  p.line(roadRightX, p.height, horizonRight, horizonY);

  // Draw left dots
  for (let i = 0; i < leftDots.length; i++) {
    const tLeft = (p.height - leftDots[i]) / (p.height - horizonY);
    const dotXLeft = p.lerp(roadLeftX, horizonLeft, tLeft);

    p.noStroke();
    p.fill(pink[0], pink[1], pink[2]);
    p.circle(dotXLeft, leftDots[i], dotRadius);
    p.fill(pink[0], pink[1], pink[2], 100);
    p.circle(dotXLeft, leftDots[i], dotRadius * 1.5);

    // Move dot
    leftDots[i] += 4;
    if (leftDots[i] > p.height) leftDots[i] = horizonY;
  }

  // Draw right dots
  for (let i = 0; i < rightDots.length; i++) {
    const tRight = (p.height - rightDots[i]) / (p.height - horizonY);
    const dotXRight = p.lerp(roadRightX, horizonRight, tRight);

    p.noStroke();
    p.fill(pink[0], pink[1], pink[2]);
    p.circle(dotXRight, rightDots[i], dotRadius);
    p.fill(pink[0], pink[1], pink[2], 100);
    p.circle(dotXRight, rightDots[i], dotRadius * 1.5);

    // Move dot
    rightDots[i] += 4;
    if (rightDots[i] > p.height) rightDots[i] = horizonY;
  }
};
