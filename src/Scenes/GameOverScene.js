/* eslint-disable max-len */
import Phaser from 'phaser';
import api from '../Objects/api';
import Scoring from '../Objects/Scoring';
import Button from '../Objects/Button';
import config from '../Config/config';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  // preload() {
  //   this.load.html('nameform', '../assets/ui/loginform.html');
  // }

  create() {
    this.headerText = this.add.text(config.width / 2 - 50, 50, 'GAME OVER', { fontSize: '40px', fill: '#fff' });
    this.zone1 = this.add.zone(config.width / 2, config.height / 2 - 200, config.width, config.height);
    // eslint-disable-next-line max-len
    this.zone2 = this.add.zone(config.width / 2, config.height / 2 - 100, config.width, config.height);
    this.zone3 = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);
    this.model = this.sys.game.globals.model;

    // const scoreStyle = { fontSize: '32px', fill: '#fff' };
    const scoring = new Scoring(this, config.width / 2 - 50, 100, { fontSize: '32px', fill: '#fff' });
    // this.add.existing(scoring);
    this.scoreDisplay = scoring;
    this.scoreLabel = this.createScoreLabel(16, 16, this.model.score);
    this.login = this.add.text(0, 0, 'Log-in:', { fontSize: '25px', fill: '#fff' });

    Phaser.Display.Align.In.Center(
      this.headerText,
      this.zone1,
    );

    Phaser.Display.Align.In.Center(
      this.scoreLabel,
      this.zone2,
    );

    // this.form = this.add.dom().createFromHTML(login);

    const form = document.createElement('div');
    form.innerHTML = `
      <div id="form" style="background: aliceblue;z-index: 300;position: absolute;top: 418px;left: 272px;display: flex;">
        <input type="search" id="username" name="username" placeholder="Enter your name" aria-label="Search" required/>
        <button type="submit" value="Confirm" name="confirmButton" style="" id="submit"> Submit your Score</button>
      <div>
    `;
    document.body.appendChild(form);
    Phaser.Display.Align.In.Center(
      this.login,
      this.zone3,
    );

    const submitBtn = document.querySelector('#submit');

    // this.form = this.add.dom().createFromHTML(form);
    submitBtn.addEventListener('click', async (event) => {
      if (event.target.name === 'confirmButton') {
        const inputUsername = document.querySelector('#username');
        if (inputUsername.value !== '') {
          const input = inputUsername.value;
          await api.writeScore(input, this.model.score)
            // eslint-disable-next-line no-console
            .catch(err => console.error(err));
          // this.form.scene.scene.stop('GameOver');
          // this.form.scene.scene.start('Title');
        }
      }
    });

    this.menuButton = new Button(this, config.width / 2 - 100,
      config.height / 2 + 270, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    this.gameButton = new Button(this, config.width / 2 + 100,
      config.height / 2 + 270, 'blueButton1', 'blueButton2', 'Play again', 'Game');
  }

  createScoreLabel(x, y, score) {
    const style = { fontSize: '32px', color: '#fff' };
    const label = new Scoring(this, x, y, score, style);

    this.add.existing(label);

    return label;
  }
}