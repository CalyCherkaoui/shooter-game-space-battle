import 'regenerator-runtime';

const key = 'ObtnnnA6KkTqmbDXfbxz';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/ `;

const fetch = require('node-fetch');

const writeScore = async (userLogin, score) => {
  const scoreData = { userLogin, score };
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

const readScore = async () => {
  const data = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(url, data);
  const scores = await response.json();
  return scores.result;
};

export { writeScore, readScore };