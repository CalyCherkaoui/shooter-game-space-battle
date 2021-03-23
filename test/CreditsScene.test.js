import Phaser from 'phaser';
import CreditsScene from '../src/Scenes/CreditsScene';

test('BootScene should enherit from Phaser.Scene', () => {
  expect(CreditsScene).toBeSubclassOf(Phaser.Scene);
});