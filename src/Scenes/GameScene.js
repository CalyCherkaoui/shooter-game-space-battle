import 'phaser';

import phaserLogo from '../assets/logo.png';
import skyBg from '../assets/sprites/space3.png';
import coingImg from '../assets/sprites/coin.png';
import bombImg from '../assets/sprites/bomb.png';
import ammoImg from '../assets/sprites/ammo.png';
import explosionImg from '../assets/sprites/explosion.png';
import spaceShip from '../assets/sprites/jet.png';
import laserWepon from '../assets/sprites/laserBlue02.png';
import smokeJet from '../assets/sprites/whitePuff00.png';
import coinAudio from '../assets/sounds/coinhit.wav';
import gunAudio from '../assets/sounds/gunshot.wav';
import endAudio from '../assets/sounds/game-over.mp3';
import config from '../Config/config';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload() {
    // load images
    this.load.image('sky', skyBg);
    this.load.image('bomb', bombImg);
    this.load.image('ammo', ammoImg);
    this.load.image('coin', coingImg);
    this.load.spritesheet('explosion', explosionImg, {
        frameWidth: 16,
        frameHeight: 16
    })
    this.load.audio('coinhit', coinAudio);
    this.load.audio('gun-shot', gunAudio);
    this.load.audio('end', endAudio);
    this.load.image('laser', laserWepon);
    this.load.image('jet', spaceShip);
    this.load.image('smoke', smokeJet);
  }

  init () {
    this.score = 0;
    this.gameOver = false;
    this.jet;
    // this.score;
    this.coinHit;
    // this.gameOver;
    this.scoreText;
    this.cursors;
    this.sky;
    this.ammo;
    this.bomb;
    this.explosion;
    this.gunShot;
    this.coins;
    this.endGameMusic;
  }

  create() {
    // this.cameras.main.setBackgroundColor('blue');
    this.sky = this.add.tileSprite(400, 300, config.width, config.height, 'sky');
    this.scoreText = this.add.text(20, 20, 'Score: 0', {fontSize: '20px', fill: '#000', fontFamily: 'monospace'});
    // const particles = this.add.particles('smoke');
    this.jet = this.physics.add.image(400, 500, 'jet').setScale(0.15).setOrigin(0.5, 0);
    this.jet.setCollideWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.input.on('pointerdown', shoot, this);

    // this.addShip();
    // this.addEvents();
    // particles.createEmitter({
    //   quantity: 10,
    //   speedY: {min: 20, max: 50},
    //   speedX: {min: -10, max: 10},
    //   accelerationX: 0,
    //   accelerationY: 1000,
    //   lifespan: {min: 100, max: 300},
    //   alpha: {start: 0.5, end: 0, ease: 'Sine.easeIn'},
    //   scale: { start: 0.065, end: 0.02},
    //   rotate: { min: -180, max: 180},
    //   angle: {min: 30, max: 110},
    //   blendMode: 'ADD',
    //   frequency: 15,
    //   follow: this.jet,
    //   followOffset: { y: this.jet.height * 0.5 },
    //   tint: 0x8db8fc,
    // });


  }




  update() {
    // const speed = 6;
    // if(this.cursors.left.isDown) {
    //   this.jet.x -= speed;
    // }
    // else if (this.cursors.right.isDown) {
    //   this.jet.x += speed;
    // }

    // if(this.cursors.up.isDown) {
    //   this.jet.y -= speed;
    // }
    // else if(this.cursors.down.isDown) {
    //   this.jet.y += speed;
    // }
    // if (this.gameOver) {
    //     return;
    // }

    // this.sky.tilePositionY -= 0.5;

    if (this.cursors.left.isDown) {
        this.jet.setVelocityX(-150);
    } else if (this.cursors.right.isDown) {
        this.jet.setVelocityX(150);
    } else {
        this.jet.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
        this.jet.setVelocityY(-150);
    } else if (this.cursors.down.isDown) {
        this.jet.setVelocityY(150);
    } else {
        this.jet.setVelocityY(0);
    }

    // checkForRepos(this.bombs);
    // checkForRepos(this.coins);
  }


  // addShip() {
  //   const centerX = this.cameras.main.width / 2;
  //   const bottomY = this.cameras.main.height - 90;
  //   this.ship = this.add.image(centerX, bottomY, 'ship');
  // }
};