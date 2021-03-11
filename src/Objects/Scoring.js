import Phaser from 'phaser';

export default class Scoring extends Phaser.GameObjects.Text {
  constructor(scene, x, y, score, style) {
    super(scene, x, y, score, style);
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
    // const text = `Your Score: ${this.score}`;
    this.setText(this.score);
  }
}