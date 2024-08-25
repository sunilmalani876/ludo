import Board from "../assets/Resources/background/ludo1.png";
import Phaser from "phaser";
import { COORDINATES_MAP, STEP_LENGTH } from "../constant";

export let playerPiecesElements = {}; // Export the variable for later initialization

export function setPiecePosition(player, piece, newPosition) {
  if (!playerPiecesElements[player] || !playerPiecesElements[player][piece]) {
    console.error(
      `Player element of given player: ${player} and piece: ${piece} not found`
    );
    return;
  }

  const [x, y] = COORDINATES_MAP[newPosition];
  const pieceElement = playerPiecesElements[player][piece];
  const top = y * STEP_LENGTH + "%";
  const left = x * STEP_LENGTH + "%";

  pieceElement.style.top = top;
  pieceElement.style.left = left;

  // console.log("top:", top + " " + "left:", left);
}

class LudoScene extends Phaser.Scene {
  constructor() {
    super({ key: "LudoScene" });
  }

  preload() {
    this.load.image("board", Board);
  }

  create() {
    const canvasWidth = this.sys.game.config.width;
    const canvasHeight = this.sys.game.config.height;
    const board = this.add.image(0, 0, "board");
    board.setOrigin(0, 0);
    board.setDisplaySize(canvasWidth, canvasHeight);

    // setPiecePosition("P1", 0, 0);
  }
}

export default LudoScene;
