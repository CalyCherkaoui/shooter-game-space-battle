import Phaser from 'phaser';
import BootScene from '../src/Scenes/BootScene';

test('BootScene should enherit from Phaser.Scene', () => {
  expect(BootScene).toBeSubclassOf(Phaser.Scene);
});