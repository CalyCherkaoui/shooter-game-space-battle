import Phaser from 'phaser';

export default {
  type: Phaser.WEBGL,
  width: 800,
  height: 750,
  backgroundColor: "black",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  pixelArt: true,
  roundPixels: true,
};
