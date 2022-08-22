const axios = require('axios');
require('dotenv').config();

let getPlayerRanks = (player) => {

  const options = {
    method: 'GET',
    url: `https://rocket-league1.p.rapidapi.com/ranks/${player}`,
    headers: {
      'X-RapidAPI-Key': `${process.env.RAPIDAPI_KEY}`,
      'X-RapidAPI-Host': `${process.env.RAPIDAPI_HOST}`
    }
  };
  return axios(options);

}

let getTourneys = (region) => {

  const options = {
    method: 'GET',
    url: `https://rocket-league1.p.rapidapi.com/tournaments/${region}`,
    headers: {
      'X-RapidAPI-Key': `${process.env.RAPIDAPI_KEY}`,
      'X-RapidAPI-Host': `${process.env.RAPIDAPI_HOST}`
    }
  };

  return axios(options);
}

let getNews = () => {

  const options = {
    method: 'GET',
    url: 'https://rocket-league1.p.rapidapi.com/news',
    headers: {
      'X-RapidAPI-Key': `${process.env.RAPIDAPI_KEY}`,
      'X-RapidAPI-Host': `${process.env.RAPIDAPI_HOST}`
    }
  };

  return axios(options);
}

let getStats = (player, stat) => {
  const options = {
    method: 'GET',
    url: `https://rocket-league1.p.rapidapi.com/stat/${player}/${stat}`,
    headers: {
      'X-RapidAPI-Key': `${process.env.RAPIDAPI_KEY}`,
      'X-RapidAPI-Host': `${process.env.RAPIDAPI_HOST}`
    }
  };
  return axios(options);
}

let getTitles = (player) => {
  const options = {
    method: 'GET',
    url: `https://rocket-league1.p.rapidapi.com/titles/${player}`,
    headers: {
      'X-RapidAPI-Key': `${process.env.RAPIDAPI_KEY}`,
      'X-RapidAPI-Host': `${process.env.RAPIDAPI_HOST}`
    }
  };
  return axios(options)
}

module.exports = {
  getPlayerRanks,
  getTourneys,
  getNews,
  getStats,
  getTitles,
};