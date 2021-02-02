import 'phaser';
import phaserLogo from '../assets/logo.png';
import spaceShip from '../assets/sprites/playerShip1_red.png';
import laserWepon from '../assets/sprites/laserBlue02.png';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');

    this.ship;
  }

  preload() {
    // load images
    this.load.image('laser', laserWepon);
    this.load.image('ship', spaceShip);
  }

  init () {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    this.cameras.main.setBackgroundColor('blue');
    this.addShip();
    this.addEvents();

  }

  update() {
    const speed = 8;
    if(this.cursors.left.isDown) {
      this.ship.x -= speed;
    }
    else if (this.cursors.right.isDown) {
      this.ship.x += speed;
    }

    if(this.cursors.up.isDown) {
      this.ship.y -= speed;
    }
    else if(this.cursors.down.isDown) {
      this.ship.y += speed;
    }
  }

  addEvents() {
    
  }

  addShip() {
    const centerX = this.cameras.main.width / 2;
    const bottomY = this.cameras.main.height - 90;
    this.ship = this.add.image(centerX, bottomY, 'ship');
  }
};