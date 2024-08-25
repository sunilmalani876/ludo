/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { COORDINATES_MAP, STEP_LENGTH } from "../constant";
import { createContext, useContext, useEffect, useState } from "react";

export const LudoContext = createContext();

export const LudoContextProvider = ({ children }) => {
  const [game, setGame] = useState(null);
  const [playerPiece, setPlayerPiece] = useState(null);

  const getPiece = (piece) => {
    return piece;
  };

  const setPiecePosition = (playerId, pieceId, newPosition) => {
    console.log(
      "playerId" + playerId + "pieceId" + pieceId + "newPosition" + newPosition
    );

    if (!Allpiece) {
      console.error(
        `Player element of given player: ${playerId} and piece: ${pieceId} not found`
      );
      return;
    }

    const Allpiece = getPiece();

    const [x, y] = COORDINATES_MAP[newPosition];

    const pieceElement = Allpiece[playerId][pieceId];
    const left = y * STEP_LENGTH + "%";
    const top = x * STEP_LENGTH + "%";
    console.log("left" + left + " " + "top" + top);
  };

  return (
    <LudoContext.Provider value={{ getPiece, setPiecePosition }}>
      {children}
    </LudoContext.Provider>
  );
};

export const useLudo = () => {
  const context = useContext(LudoContext);

  if (context === undefined)
    throw new Error("useLudo must be used within a LudoContextProvider");

  return context;
};
