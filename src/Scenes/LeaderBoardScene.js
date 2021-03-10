import Phaser from 'phaser';
// import Button from '../Objects/Button';
import api from '../Objects/api';
import 'regenerator-runtime';
import config from '../Config/config';
import Button from '../Objects/Button';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  // eslint-disable-next-line class-methods-use-this
  async create() {
    // eslint-disable-next-line no-console
    const scores = await api.readScores();
    const sortedScores = scores.result.sort((a, b) => b.score - a.scores);

    const form = document.querySelector('#form');
    if (form !== null) {
      form.style.display = 'none';
    }

    // eslint-disable-next-line no-unused-vars
    let rankingList = '';
    // eslint-disable-next-line no-unused-vars
    let count = 0;

    for (let i = 0; i < sortedScores.length; i += 1) {
      rankingList += `${sortedScores[i].score} --- ${sortedScores[i].user} \n`;
      count += i;
    }

    this.headerRankingText = this.add.text(0, 0, 'Score --- Player', { fontSize: '32px', fill: '#fff' });
    this.RankingText = this.add.text(0, 0, rankingList, { fontSize: '32px', fill: '#fff' });
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.headerRankingText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.RankingText,
      this.zone,
    );

    this.menuButton = new Button(this, config.width / 2, config.height / 2 + 300, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }
}
