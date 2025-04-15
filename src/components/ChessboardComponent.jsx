import React, { useState } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

const ChessboardComponent = () => {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState(game.fen()); // ✅ Track board position

  const handleMove = (sourceSquare, targetSquare) => {
    const gameCopy = new Chess(game.fen()); // create copy
    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    });

    if (move === null) return false;

    setGame(gameCopy);        // ✅ update game state
    setFen(gameCopy.fen());   // ✅ update board position
    return true;
  };

  const boardSize = Math.min(600, window.innerWidth * 0.9);

  return (
    <div className="chessboard-inner-container">
      <Chessboard
        position={fen}
        onPieceDrop={handleMove}
        boardWidth={boardSize}
      />
    </div>
  );
};

export default ChessboardComponent;