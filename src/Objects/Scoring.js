import Phaser from 'phaser';

export default class Scoring extends Phaser.GameObjects.Text {
  constructor(scene, x, y, score, style) {
    const scoreText = `Your Score: ${score}`;
    super(scene, x, y, scoreText, style);

    this.score = score;
  }

  setScore(score) {
    this.score = score;
    this.updateScoreText();
  }

  add(points) {
    this.setScore(this.score + points);
  }

  updateScoreText() {
    this.setText(`Your Score: ${this.score}`);
  }
}