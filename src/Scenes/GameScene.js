import 'phaser';
import config from '../Config/config';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  init () {
    this.score = 0;
    this.gameOver = false;
  }

  create() {
    // this.cameras.main.setBackgroundColor('blue');
    this.add.tileSprite(400, 300, config.width, config.height, sky);
    this.scoreText = this.add.text(20, 20, 'Score: 0', {fontSize: '20px', fill: '#000', fontFamily: 'monospace'});
    // const particles = this.add.particles('smoke');
    // this.physics.add.image(400, 500, spaceJet).setScale(0.15).setOrigin(0.5, 0);

    // this.cursors = this.input.keyboard.createCursorKeys();
    // this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    // this.input.on('pointerdown', shoot, this);

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

    this.anims.create({
      key: "enemyJet",
      frames: this.anims.generateFrameNumbers("enemyJet"),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "bomb",
      frames: this.anims.generateFrameNumbers("bomb"),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "explosion",
      frames: this.anims.generateFrameNumbers("explosion"),
      frameRate: 20,
      repeat: 0
    });
    this.anims.create({
      key: "spaceJet",
      frames: this.anims.generateFrameNumbers("spaceJet"),
      frameRate: 20,
      repeat: -1
    });

    this.sfx = {
      explosions: [
        this.sound.add("explosionAudio"),
        this.sound.add("endAudio")
      ],
      laser: this.sound.add("gun-shotAudio"),
      coinhit: this.sound.add("coinhitAudio")
    };

    this.backgrounds = [];
    for (let i = 0; i < 5; i++) {
      let bg = new ScrollingBackground(this, "sky", i * 10);
      this.backgrounds.push(bg);
    }

    
    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "spaceJet"
    );
    console.log(this.player);

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