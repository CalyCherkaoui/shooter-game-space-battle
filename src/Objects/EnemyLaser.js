import Entity from './Entity';

export default class EnemyLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemyLaser');
    this.body.velocity.y = 200;
    this.setScale(2);
  }
}