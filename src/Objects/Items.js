import Phaser from 'phaser';
import Entity from './Entity';

class laserWepon extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'laserWepon');
    this.body.velocity.y = -200;
  }
}

class EnemyBomb extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'bomb');
    this.body.velocity.y = 200;
  }
}




// class ChaserShip extends Entity {
//   constructor(scene, x, y) {
//     super(scene, x, y, "sprEnemy1", "ChaserShip");
//   }
// }

// class GunShip extends Entity {
//   constructor(scene, x, y) {
//     super(scene, x, y, "sprEnemy0", "GunShip");
//     this.play("sprEnemy0");
//   }
// }

// class CarrierShip extends Entity {
//   constructor(scene, x, y) {
//     super(scene, x, y, "sprEnemy2", "CarrierShip");
//     this.play("sprEnemy2");
//   }
// }

export {laserWepon, EnemyBomb};

