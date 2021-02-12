import Phaser from 'phaser';

export default {
  type: Phaser.WEBGL,
  width: 800,
  height: 800,
  backgroundColor: "black",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  // scene: {
  //   preload: preload,
  //   create: create,
  //   update: update
  // },
  pixelArt: true,
  roundPixels: true,
};
