import Phaser from 'phaser';
import Entity from './Entity';

class EnemyLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemyLaser');
    this.body.velocity.y = 200;
    this.setScale(2);
  }
}

export default class Enemy extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemyJet', 'enemyJet');
    this.play('enemyJet');
    this.setScale(2.5);

    this.body.velocity.y = Phaser.Math.Between(20, 100);
  }
}