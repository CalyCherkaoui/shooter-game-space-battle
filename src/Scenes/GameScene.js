import 'phaser';
import phaserLogo from '../assets/logo.png';
import spaceShip from '../assets/sprites/playerShip1_red.png';
import laserWepon from '../assets/sprites/laserBlue02.png';
import smokeJet from '../assets/sprites/whitePuff00.png';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');

    this.ship;
  }

  preload() {
    // load images
    this.load.image('laser', laserWepon);
    this.load.image('ship', spaceShip);
    this.load.image('smoke', smokeJet);
  }

  init () {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    this.cameras.main.setBackgroundColor('blue');

    const particles = this.add.particles('smoke');
    this.addShip();
    this.addEvents();

    particles.createEmitter({
      quantity: 10,
      speedY: {min: 20, max: 50},
      speedX: {min: -10, max: 10},
      accelerationX: 0,
      accelerationY: 1000,
      lifespan: {min: 100, max: 300},
      alpha: {start: 0.5, end: 0, ease: 'Sine.easeIn'},
      scale: { start: 0.065, end: 0.02},
      rotate: { min: -180, max: 180},
      angle: {min: 30, max: 110},
      blendMode: 'ADD',
      frequency: 15,
      follow: this.ship,
      followOffset: { y: this.ship.height * 0.5 },
      tint: 0x8db8fc,
    });

  }

  update() {
    const speed = 6;
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