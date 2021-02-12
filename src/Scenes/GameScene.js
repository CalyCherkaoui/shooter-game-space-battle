import Phaser from 'phaser';
import Player from '../Objects/Player';
import Enemy from '../Objects/Enemy';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    this.gameOver = false;
  }

  create() {
    this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'sky');

    this.anims.create({
      key: 'enemyJet',
      frames: this.anims.generateFrameNumbers('enemyJet'),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'bomb',
      frames: this.anims.generateFrameNumbers('bomb'),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'explosion',
      frames: this.anims.generateFrameNumbers('explosion'),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'spaceJet',
      frames: this.anims.generateFrameNumbers('spaceJet'),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'laserWepon',
      frames: this.anims.generateFrameNumbers('laserWepon'),
      frameRate: 20,
      repeat: -1,
    });

    this.sfx = {
      explosions: [
        this.sound.add('explosionAudio'),
        this.sound.add('endAudio'),
      ],
      laser: this.sound.add('gun-shotAudio'),
      coinhit: this.sound.add('coinhitAudio'),
    };

    this.createPlayerJet();
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.enemies = this.add.group();
    this.addEnemies();

    this.LaserWepons = this.add.group();
    this.shootEnemy();

    this.shootEnemy();
    this.collisonPlayerEnemy();
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
      'spaceJet',
    );
  }

  addEnemies() {
    this.time.addEvent({
      delay: 100,
      callback() {
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
    this.physics.add.overlap(this.player, this.enemies, (player, enemy) => {
      if (!player.getData('isDead')
        && !enemy.getData('isDead')) {
        player.explode(false);
        player.onDestroy();
        enemy.explode(true);
      }
    });
  }

  shootEnemy() {
    this.physics.add.overlap(this.LaserWepons, this.enemies, (LaserWepon, enemy) => {
      if (enemy) {
        enemy.explode(true);
        LaserWepon.destroy();
      }
    });
  }
}