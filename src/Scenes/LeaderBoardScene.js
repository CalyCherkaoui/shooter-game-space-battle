import Phaser from 'phaser';
import Button from '../Objects/Button';
import { readScore } from '../Objects/api';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  async create() {
    this.add.image(200, 200, 'sky').setScale(3);
    this.add.text(500, 200, 'LeaderBoard',
      {
        font: '30px monospace',
        fill: 0x30b1da,
      });

    const style = { fontSize: '16px', backgroundColor: '#a8dadc' };

    this.add.text(50, 0, 'POS NAME SCORE', style);
    // eslint-disable-next-line no-console
    this.score = await readScore().catch(err => console.error(err));

    this.sortScore = this.score.sort((a, b) => (a.score > b.score ? -1 : 1));

    this.menuButton = new Button(this, 500, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    for (let i = 0; i <= 9; i += 1) {
      this.add.text(100, 50 * (i + 1), `${i + 1} ${this.sortScore[i].user} ${this.sortScore[i].score} `, style);
    }
  }
}