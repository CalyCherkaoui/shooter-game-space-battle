import Phaser from 'phaser';
import LeaderBoardScene from '../src/Scenes/LeaderBoardScene';

test('LeaderBoardScene should enherit from Phaser.Scene', () => {
  expect(LeaderBoardScene).toBeSubclassOf(Phaser.Scene);
});