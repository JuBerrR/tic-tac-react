import axios from 'axios';

export const postGameInfo = async ({ board, gameId }) => {
  const data = JSON.stringify({ board, gameId });
  console.log(data);
  //fix api call
  const headers = { 'Content-Type': 'application/json' };
  // try {
  //   const response = await axios.post(SIGN_IN_ENDPOINT, data, { headers });
  //   return response;
  // } catch (err) {
  //   return {
  //     status: err.response.status,
  //     message: err.response.statusText,
  //   };
  // }
};

export const getGameInfo = async ({ gameId }) => {
  const data = JSON.stringify({ gameId });
  console.log(data);
  const headers = { 'Content-Type': 'application/json' };

  // return gameId;
  // try {
  //   const response = await axios.post('endpoint', data, { headers });
  //   return response;
  // } catch (err) {
  //   return {
  //     status: err.response.status,
  //     message: err.response.statusText,
  //   };
  // }
};