// createPlayer.js
export const drawPlayer = (p, player) => {
  // Update horizontal movement
  if (player.moveLeft) player.x -= player.speed;
  if (player.moveRight) player.x += player.speed;

  // Constrain within canvas edges
  player.x = p.constrain(
    player.x,
    player.width / 2,
    p.width - player.width / 2,
  );

  // Jump logic
  if (player.jumpPressed && player.jump <= 0) {
    player.jump = player.jumpHeight;
  }

  if (player.jump > 0) {
    player.y = p.height - player.height - 10 - player.jump;
    player.jump -= player.jumpSpeed;
  } else {
    player.y = p.height - player.height - 10;
  }

  // Draw player as up-facing triangle
  p.fill(0, 255, 255); // neon cyan
  p.noStroke();
  p.triangle(
    player.x,
    player.y, // top
    player.x - player.width / 2,
    player.y + player.height, // bottom left
    player.x + player.width / 2,
    player.y + player.height, // bottom right
  );

  return player; // return updated state
};
