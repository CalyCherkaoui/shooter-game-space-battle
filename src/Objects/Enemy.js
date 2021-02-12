import Phaser from 'phaser';
import Entity from './Entity';
// import EnemyBomb from './Items';

class EnemyBomb extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'bomb');
    this.body.velocity.y = 200;
  }
}

export default class Enemy extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "enemyJet", "enemyJet");
    this.play("enemyJet");

    this.body.velocity.y = Phaser.Math.Between(50, 100);

    this.shootTimer = this.scene.time.addEvent({
      delay: 1000,
      callback: function() {
        var bomb = new EnemyBomb(
          this.scene,
          this.x,
          this.y
        );
        bomb.setScale(this.scaleX);
        this.scene.enemyBombs.add(bomb);
      },
      callbackScope: this,
      loop: true
    });
  }

  onDestroy() {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }
}