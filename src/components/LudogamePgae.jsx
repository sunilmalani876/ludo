/* eslint-disable react/no-unknown-property */
import Phaser from "phaser";
import { useEffect } from "react";
import LudoScene, {
  setPiecePosition,
  playerPiecesElements,
} from "../scene/Ludo-scene";
import { BASE_POSITIONS, PLAYERS } from "../constant";

const LudogamePgae = () => {
  const initializePlayerElements = () => {
    playerPiecesElements.P1 = Array.from(
      document.querySelectorAll('[player-id="P1"].player-piece')
    );
    playerPiecesElements.P2 = Array.from(
      document.querySelectorAll('[player-id="P2"].player-piece')
    );
  };

  const Position = () => {
    // console.log("Reset game");

    const currentPositions = BASE_POSITIONS;

    PLAYERS.forEach((player) => {
      [0, 1, 2, 3].forEach((piece) => {
        setPiecePosition(player, piece, currentPositions[player][piece]);
      });
    });
  };

  const config = {
    width: 450,
    height: 450,
    type: Phaser.AUTO,
    parent: "phaser-game",
    scene: LudoScene,
  };

  useEffect(() => {
    const game = new Phaser.Game(config);

    // Delay the initialization slightly to ensure DOM is ready
    requestAnimationFrame(() => {
      initializePlayerElements();
      Position(); // Call after DOM elements are referenced
    });

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div id="phaser-game" className="relative">
        <div className="player-pieces w-full h-full">
          {[0, 1, 2, 3].map((number, index) => (
            <div
              key={index}
              player-id="P1"
              piece={index}
              className={`player-piece bg-sky-500 absolute size-6 border-2 rounded-full border-black border-dashed translate-x-1`}
            />
          ))}
          {[0, 1, 2, 3].map((number, index) => (
            <div
              key={index}
              player-id="P2"
              className={`player-piece bg-green-500 absolute size-6 border-2 rounded-full border-black border-dashed translate-x-1`}
            />
          ))}
        </div>
        <div>
          <div
            className="w-[10.7rem] h-[10.7rem] border-[2.1rem] border-neutral-100/35 absolute bottom-2.5 left-2.5"
            player-id="P1"
          ></div>
          <div
            className="w-[10.7rem] h-[10.7rem] border-[2.1rem] border-neutral-100/35 absolute top-2.5 right-2.5"
            player-id="P2"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LudogamePgae;
