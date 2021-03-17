import Phaser from 'phaser';
import GameOverScene from '../src/Scenes/GameOverScene';

test('BootScene should enherit from Phaser.Scene', () => {
  expect(GameOverScene).toBeSubclassOf(Phaser.Scene);
});