import Phaser from 'phaser';
import Entity from './Entity';
import EnemyLaser from './EnemyLaser';

export default class Enemy extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemyJet', 'enemyJet');
    this.play('enemyJet');
    this.setScale(2.5);
    this.body.velocity.y = Phaser.Math.Between(20, 100);
    this.shootTimer = this.scene.time.addEvent({
      delay: 3500,
      callback() {
        const laser = new EnemyLaser(
          this.scene,
          this.x,
          this.y,
        );
        laser.setScale(this.scaleX);
        this.scene.enemyLasers.add(laser);
      },
      callbackScope: this,
      loop: true,
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