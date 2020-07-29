import axios from 'axios';

export const createGame = async ({ board, gameId }) => {
  if (board.every(item => item === null )) {
    return;
  }
  console.log(board);
  const data = JSON.stringify({ board, gameId });
  console.log(data);

  //fix api call
  const headers = { 'Content-Type': 'application/json' };
  try {
    const response = await axios.post('http://localhost:3000/game', data, { headers });
    return response;
  } catch (err) {
    console.log(err);
    return {
      status: err.response.status,
      message: err.response.statusText,
    };
  }
};

export const updateGameInfo = async ({ board, gameId }) => {
  if (board.every(item => item === null )) {
    return;
  }
  console.log(board);
  const data = JSON.stringify({ board, gameId });
  console.log(data);

  //fix api call
  const headers = { 'Content-Type': 'application/json' };
  try {
    const response = await axios.put('http://localhost:3000/game', data, { headers });
    return response;
  } catch (err) {
    console.log(err);
    return {
      status: err.response.status,
      message: err.response.statusText,
    };
  }
};

export const getGameInfo = async ({ gameId }) => {
  const data = JSON.stringify({ gameId });
  console.log(data);
  const headers = { 'Content-Type': 'application/json' };
  // fix api call
  try {
    const response = await axios.post('endpoint', data, { headers });
    return response;
  } catch (err) {
    return {
      status: err.response.status,
      message: err.response.statusText,
    };
  }
};