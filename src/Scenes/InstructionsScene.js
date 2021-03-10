import Phaser from 'phaser';
import Button from '../Objects/Button';
import config from '../Config/config';

export default class InstructionsScene extends Phaser.Scene {
  constructor() {
    super('Instructions');
  }

  create() {
    const form = document.querySelector('#form');
    if (form !== null) {
      form.style.display = 'none';
    }

    this.InstructionTitleText = this.add.text(100, 100, 'Game Instructions:', { fontSize: 35 });
    this.Instruction1Text = this.add.text(100, 190, 'Use the arrow keys to Move your Spaceship.', { fontSize: 24 });
    this.Instruction2Text = this.add.text(100, 250, 'Use the space key to shoot your Enemies.', { fontSize: 24 });
    this.menuButton = new Button(this, config.width / 2 - 100, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    this.menuButton = new Button(this, config.width / 2 + 100, 500, 'blueButton1', 'blueButton2', 'Play', 'Game');
  }
}