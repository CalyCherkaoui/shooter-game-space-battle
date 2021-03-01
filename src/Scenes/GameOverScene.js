import Phaser from 'phaser';
// import api from '../Objects/api';
import Button from '../Objects/Button';
import config from '../Config/config';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.headerText = this.add.text(0, 0, 'GAME OVER', { fontSize: '32px', fill: '#fff' });
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.headerText,
      this.zone,
    );

    this.menuButton = new Button(this, config.width / 2, config.height / 2 + 300, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    this.gameButton = new Button(this, config.width / 2, config.height / 2 + 200, 'blueButton1', 'blueButton2', 'Play again', 'Game');
  }
}