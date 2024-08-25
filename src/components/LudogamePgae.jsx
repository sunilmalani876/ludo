/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import Phaser from "phaser";
import { useEffect, useRef } from "react";
import LudoScene from "../scene/Ludo-scene";
import { useLudo } from "../context/ludoContect";

const LudogamePgae = () => {
  const pieceRefs = useRef({});
  const { getPiece, setPiecePosition } = useLudo();

  const config = {
    width: 550,
    height: 550,
    type: Phaser.AUTO,
    parent: "phaser-game",
    scene: LudoScene,
  };

  useEffect(() => {
    const game = new Phaser.Game(config);

    getPiece(pieceRefs.current);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div id="phaser-game" className="relative">
        <div className="w-full h-full">
          {/* player 1 */}
          {[
            {
              bottom: "8.1rem",
              left: "68px",
            },
            {
              bottom: "8.1rem",
              left: "8.2rem",
            },
            {
              bottom: "4.5rem",
              left: "68px",
            },
            {
              bottom: "4.5rem",
              left: "8.2rem",
            },
          ].map(({ bottom, left }, index) => (
            <div
              // onClick={() => setPiecePosition("P1", index, 1)}
              // ref={(el) => (pieceRefs.current[index] = el)}
              key={index}
              player-id="P1"
              className={`bg-sky-500 absolute size-8 border-2 rounded-full border-black border-dashed`}
              style={{
                bottom,
                left,
              }}
            />
          ))}

          {/* player 2 */}
          {[
            {
              top: "8.1rem",
              right: "68px",
            },
            {
              top: "8.1rem",
              right: "8.2rem",
            },
            {
              top: "4.5rem",
              right: "68px",
            },
            {
              top: "4.5rem",
              right: "8.2rem",
            },
          ].map(({ top, right }, index) => (
            <div
              // ref={(el) => (pieceRefs.current[index] = el)}
              key={index}
              player-id="P2"
              // piece={piece}
              className={`bg-green-500 absolute size-8 border-2 rounded-full border-black border-dashed`}
              style={{
                top,
                right,
              }}
            />
          ))}
        </div>

        {/* player bases */}
        <div>
          <div
            className="w-[13.2rem] h-[13.2rem] border-[2.1rem] border-neutral-100/35 absolute bottom-2.5 left-2.5"
            player-id="P1"
          ></div>
          <div
            className="w-[13.2rem] h-[13.2rem] border-[2.1rem] border-neutral-100/35 absolute top-2.5 right-2.5"
            player-id="P2"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LudogamePgae;
