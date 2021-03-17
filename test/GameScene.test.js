import Phaser from 'phaser';
import GameScene from '../src/Scenes/GameScene';

test('GameScene should enherit from Phaser.Scene', () => {
  expect(GameScene).toBeSubclassOf(Phaser.Scene);
});