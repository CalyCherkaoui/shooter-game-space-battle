import Phaser from 'phaser';
import Entity from './Entity';
// import EnemyBomb from './Items';

class EnemyLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemyLaser');
    this.body.velocity.y = 200;
    this.setScale(2);
  }
}

export default class Enemy extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "enemyJet", "enemyJet");
    this.play("enemyJet");
    this.setScale(2);

    this.body.velocity.y = Phaser.Math.Between(50, 100);

    this.shootTimer = this.scene.time.addEvent({
      delay: 1000,
      callback: function() {
        var enemyLaser = new EnemyLaser(
          this.scene,
          this.x,
          this.y
        );
        enemyLaser.setScale(this.scaleX);
        this.scene.EnemyLasers.add(enemyLaser);
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