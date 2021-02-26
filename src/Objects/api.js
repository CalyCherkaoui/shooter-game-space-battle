import 'regenerator-runtime';

const fetch = require('node-fetch');

const api = (() => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ObtnnnA6KkTqmbDXfbxz/scores/';
  const writeScore = async (userLogin, score) => {
    const scoreData = { user: userLogin, score: Number(score) };
    const data = {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(scoreData),
    };
    const response = await fetch(url, data);
    const result = await response.json();
    return result;
  };
  const readScores = async () => {
    const data = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, data);
    const scores = await response.json();
    return scores;
  };

  return { writeScore, readScores };
})();

export default api;