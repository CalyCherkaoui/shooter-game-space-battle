import 'phaser';
import logoimg from '../assets/logo.png';
 
export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }
 
  preload () {
    this.load.image('logo', logoimg);
  }
 
  create () {
    this.scene.start('Preloader');
  }
};