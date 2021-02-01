import 'phaser';
import logophaser from '../assets/zenva_logo.png';
import blueButton1img from '../assets/ui/blue_button02.png';
import blueButton2img from '../assets/ui/blue_button03.png';
import boxgrey from '../assets/ui/grey_box.png';
import boxcheck from '../assets/ui/blue_boxCheckmark.png';
import openingmusic from '../assets/TownTheme.mp3';
 
export default class PreloaderScene extends Phaser.Scene {
  constructor () {
    super('Preloader');
  }
 
  preload () {
    // add logo image
    this.add.image(400, 200, 'logo');
    // display progress bar
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    var width = this.cameras.main.width;
    var height = this.cameras.main.height;

    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading the game...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    
    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);

    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar , We listen for the progress event, and use it to update the progress bar and the progress bar percentage.
    this.load.on('progress', (value) => {
        percentText.setText(parseInt(value * 100) + '%');
        progressBar.clear();
        progressBar.fillStyle(0xffffff, 1);
        progressBar.fillRect(250, 280, 300 * value, 30);
      });
  
    // update file progress text
    this.load.on('fileprogress', (file) => {
        assetText.setText('Loading asset: ' + file.key);
      });
  
    // remove progress bar when complete
    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    }.bind(this));

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
  
    // load assets needed in our game
    this.load.image('phaserLogo', logophaser)
    this.load.image('blueButton1', blueButton1img);
    this.load.image('blueButton2', blueButton2img);
    this.load.image('box', boxgrey);
    this.load.image('checkedBox', boxcheck);
    this.load.audio('bgMusic', [openingmusic]);

  }
 
  create () {
  }

  init () {
    this.readyCount = 0;
  }
   
  ready () {
    this.scene.start('Title');
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
};