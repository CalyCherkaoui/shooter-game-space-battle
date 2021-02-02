import Phaser from 'phaser';

export default {
  type: Phaser.WEBGL,
  width: 800,
  height: 700,
  backgroundColor: "black",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  // scene: [SceneMainMenu, SceneMain, SceneGameOver],
  pixelArt: true,
  roundPixels: true,
};
