import { v4 as uuidv4 } from 'uuid';

const generateUUID = () => uuidv4();

const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const isFull = squares.every(square => square !== null );
  let winner = undefined;

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winner = squares[a];
    } else if (!winner && isFull) {
      winner = 'draw';
    } 
  }

  return winner;
}

export { calculateWinner, generateUUID }