import React, { useState, useEffect } from 'react';
import Board from '../Board';
import { calculateWinner, generateUUID, updateGame, getGameInfo } from '../../utils';

const styles = {
  width: '200px',
  margin: '20px auto',
};

const emptyArray = Array(9).fill(null);

const Game = () => {
  const [board, setBoard] = useState(JSON.parse(localStorage.getItem('board')) || emptyArray);
  const [nextIs, setNextIs] = useState(localStorage.getItem('turn') || 'X');
  const [gameId, setGameId] = useState(localStorage.getItem('gameId') || generateUUID());
  const [gameInfo, setGameInfo] = useState(JSON.parse(localStorage.getItem('gameInfo')) || null);
  const winner = calculateWinner(board);

  const updateGameInfo = async () => {
    try {
      const response = await getGameInfo({ gameId });
      setGameInfo(response.data.board);
      localStorage.setItem('gameInfo', JSON.stringify(response.data.board));
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (i) => {
    const boardCopy = [...board]
    // if user click on occupied square or game is over, return nothing
    if (winner || boardCopy[i]) return;
    // put 'X' or 'O' on the clicked square
    boardCopy[i] = nextIs === 'X' ? 'X' : 'O';

    setBoard(boardCopy);
    setNextIs(nextIs !== 'X' ? 'X' : 'O');

    updateGameInfo();

    localStorage.setItem('turn', nextIs !== 'X' ? 'X' : 'O');
    localStorage.setItem('board', JSON.stringify(boardCopy));
    localStorage.setItem('gameId', gameId);
  };

  const cleanBoard = () => {
    setBoard(emptyArray);
    setGameId(generateUUID());
    setGameInfo(null);

    // turn is not need to be cleared because each game other than previous starts first
    localStorage.removeItem('board');
    localStorage.removeItem('gameId');
    localStorage.removeItem('gameInfo');
  };

  const renderGameInfo = () => (
    <>
    {winner==='draw' ? 
      'Draw! Start new game!' : 
      (winner ? 'Winner: ' + winner : 'Player ' + nextIs  + ' turn')}
    <button style={styles} onClick={cleanBoard}>
      {winner ? 'Start New Game' : 'Restart'}
    </button>
    </>
  );

  useEffect(() => {
    updateGame({ board, gameId })
  }, [board, gameId]);

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div>
        <p style={styles}>
          {renderGameInfo()}
        </p>
        <p>{!!gameInfo && JSON.stringify(gameInfo)}</p>
      </div>
    </>
  );
};

export default Game;
