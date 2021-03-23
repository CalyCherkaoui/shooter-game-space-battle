import Phaser from 'phaser';
import InstructionsScene from '../src/Scenes/InstructionsScene';

test('InstructionsScene should enherit from Phaser.Scene', () => {
  expect(InstructionsScene).toBeSubclassOf(Phaser.Scene);
});