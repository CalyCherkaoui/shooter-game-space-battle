import Phaser from 'phaser';
import Entity from './Entity';


class laserWepon extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'laserWepon');
    this.body.velocity.y = -200;
  }
}

export default class Player extends Entity {

  constructor(scene, x, y, key) {
    super(scene, x, y, key, "Player");

    this.setData("speed", 200);

    this.setData("isShooting", false);
    this.setData("timerShootDelay", 10);
    this.setData("timerShootTick", this.getData("timerShootDelay") - 1);
    this.play("spaceJet"); // play the player sprite animation
    this.setScale(0.16);
  }

  moveUp() {
    this.body.velocity.y = -this.getData("speed");
  }
  
  moveDown() {
    this.body.velocity.y = this.getData("speed");
  }
  
  moveLeft() {
    this.body.velocity.x = -this.getData("speed");
  }
  
  moveRight() {
    this.body.velocity.x = this.getData("speed");
  }

  
  onDestroy() {
    this.scene.time.addEvent({ // go to game over scene
      delay: 1000,
      callback: function() {
        this.scene.scene.start("CreditsScene");
      },
      callbackScope: this,
      loop: false
    });
  }

  update () {
    this.body.setVelocity(0, 0);
    this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
    this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);

    if (this.getData("isShooting")) {
      if (this.getData("timerShootTick") < this.getData("timerShootDelay")) {
        this.setData("timerShootTick", this.getData("timerShootTick") + 1); // every game update, increase timerShootTick by one until we reach the value of timerShootDelay
      }
      else { // when the "manual timer" is triggered:
        var laser = new laserWepon(this.scene, this.x, this.y);
        // this.scene.laserWepons.add(laser);
        this.scene.sfx.laser.play(); // play the laser sound effect
        this.setData("timerShootTick", 0);
      }
    }
  }
}