import axios from 'axios';

export const updateGame = async ({ board, gameId }) => {
  if (board.every((item) => item === null)) {
    return;
  }
  const data = JSON.stringify({ board, gameId });

  const headers = { 'Content-Type': 'application/json' };
  try {
    const response = await axios.post('http://localhost:3000/game', data, { headers });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getGameInfo = async ({ gameId }) => {
  const headers = { 'Content-Type': 'application/json' };
  try {
    const response = await axios.get(`http://localhost:3000/game/${gameId}`, { headers });
    return response;
  } catch (err) {
    console.log(err);
  }
};
