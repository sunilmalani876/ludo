import Board from "../assets/Resources/background/ludo1.png";
// import Blue_Token from "../assets/Resources/ui/Tokens/Blue_Token.png";
import Phaser from "phaser";

class LudoScene extends Phaser.Scene {
  constructor() {
    super({ key: "LudoScene" });
  }

  preload() {
    this.load.image("board", Board);
    // this.load.image("blue_token", Blue_Token);
  }

  create() {
    // Get the width and height of the canvas
    const canvasWidth = this.sys.game.config.width;
    const canvasHeight = this.sys.game.config.height;
    // Add the board image to the scene
    const board = this.add.image(0, 0, "board");
    // Set the origin to the top-left corner (0,0)
    board.setOrigin(0, 0);
    // Scale the image to fit within the canvas dimensions
    board.setDisplaySize(canvasWidth, canvasHeight);

    // Add a blue token to the scene
    // this.add.image(85, 460, "blue_token").scale = 0.5;
  }
}

export default LudoScene;
