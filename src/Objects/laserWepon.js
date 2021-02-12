import Entity from './Entity';

export default class laserWepon extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'laserWepon');
    this.body.velocity.y = -200;
  }
}