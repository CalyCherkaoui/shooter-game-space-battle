import 'phaser';
import config from '../Config/config';
import Player from '../Objects/Player';
import Enemy from '../Objects/Enemy';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  init () {
    this.gameOver = false;
  }

  create() {
    this.add.image(this.game.config.width/2, this.game.config.height/2, 'sky');
    // const particles = this.add.particles('smoke');
    // // this.physics.add.image(400, 500, spaceJet).setScale(0.15).setOrigin(0.5, 0);
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
    //   follow: this.player,
    //   followOffset: { y: this.player.height * 0.5 },
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

    // this.backgrounds = [];
    // for (let i = 0; i < 5; i++) {
    //   let bg = new ScrollingBackground(this, "sky", i * 10);
    //   this.backgrounds.push(bg);
    // }

    this.cursors = this.input.keyboard.createCursorKeys();
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.createPlayerJet();

  }

  
  update() {
    this.player.update();
    this.controlePlayerJetMoves();
  }


  createPlayerJet() {
    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height - 60,
      "spaceJet"
    );
    console.log(this.player);
    // this.player.setScale(3);
  }

  addEnemies() {
    this.time.addEvent({
      delay: 100,
      callback: function() {
        let enemy = null;
        if (Phaser.Math.Between(0, 10) <= 3) {
          enemy = new Enemy(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0,
          );
        }
        if (enemy !== null) {
          this.enemies.add(enemy);
        }
      },
      callbackScope: this,
      loop: true,
    });
  }

  controlePlayerJetMoves() {
    if (this.cursors.left.isDown) {
      this.player.moveLeft();
    } else if (this.cursors.right.isDown) {
      this.player.moveRight();
    }
    if (this.cursors.up.isDown) {
      this.player.moveUp();
    } else if (this.cursors.down.isDown) {
      this.player.moveDown();
    }
    if (this.keySpace.isDown) {
      this.player.setData('isShooting', true);
    } else {
      this.player.setData('timerShootTick', this.player.getData('timerShootDelay') - 1);
      this.player.setData('isShooting', false);
    }
  }

  collisonPlayerEnemy() {
    
  }

  shootEnemy() {

  }


};