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
      <div id="phaser-game" className="relative" />
    </div>
  );
};

export default LudogamePgae;
