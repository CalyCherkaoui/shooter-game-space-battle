import Phaser from 'phaser';
import logophaser from '../assets/zenva_logo.png';
import blueButton1img from '../assets/ui/blue_button02.png';
import blueButton2img from '../assets/ui/blue_button03.png';
import boxgrey from '../assets/ui/grey_box.png';
import boxcheck from '../assets/ui/blue_boxCheckmark.png';
import openingmusic from '../assets/sounds/battle-mus.mp3';
import skyBg from '../assets/sprites/space3.png';
import coingImg from '../assets/sprites/coin.png';
import bombImg from '../assets/sprites/bomb.png';
import explosionImg from '../assets/sprites/explosion.png';
import spaceShip from '../assets/sprites/jet.png';
import laserWepon from '../assets/sprites/laserBlue02.png';
import smokeJet from '../assets/sprites/whitePuff00.png';
import coinAudio from '../assets/sounds/coinhit.wav';
import gunAudio from '../assets/sounds/gunshot.wav';
import endAudio from '../assets/sounds/game-over.mp3';
import explosionAudio from '../assets/sounds/sndExplode0.wav';
import enemyJet from '../assets/sprites/sprEnemy0.png';
import enemyLaser from '../assets/sprites/sprLaserEnemy0.png';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    this.load.image('sky', skyBg);
    this.load.image('bomb', bombImg);
    this.load.image('coin', coingImg);

    this.load.image('smoke', smokeJet);
    this.load.audio('coinhitAudio', coinAudio);
    this.load.audio('gun-shotAudio', gunAudio);
    this.load.audio('endAudio', endAudio);
    this.load.audio('explosionAudio', explosionAudio);

    this.load.image('blueButton1', blueButton1img);
    this.load.image('blueButton2', blueButton2img);
    this.load.image('phaserLogo', logophaser);
    this.load.image('box', boxgrey);
    this.load.image('checkedBox', boxcheck);
    this.load.audio('bgMusic', [openingmusic]);

    this.load.spritesheet('explosion', explosionImg, {
      frameWidth: 80 / 5,
      frameHeight: 16,
    });

    this.load.spritesheet('laserWepon', laserWepon, {
      frameWidth: 13,
      frameHeight: 37,
    });

    this.load.spritesheet({
      key: 'spaceJet',
      url: spaceShip,
      frameConfig: {
        frameWidth: 494,
        frameHeight: 505,
      },
    });

    this.load.spritesheet('enemyJet', enemyJet, {
      frameWidth: 64 / 4,
      frameHeight: 16,
    });
    this.load.spritesheet('enemyLaser', enemyLaser, {
      frameWidth: 1,
      frameHeight: 6,
    });

    // add logo image
    this.add.image(400, 200, 'logo');

    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    // remove progress bar when complete
    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
  }

  ready() {
    this.scene.start('Title');
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}