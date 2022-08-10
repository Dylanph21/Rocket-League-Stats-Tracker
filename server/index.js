require('dotenv').config();
const express = require('express');
const app = express();
const handlers = require('./handlers.js')
app.use(express.json());
const db = require('../database/db.js')

app.use(express.static('client/dist'))


const PORT = 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);

app.get('/ranks/:player', function(req, res) {
  // console.log(req.params)
    let playerName = req.params.player;
    let fqData;
    let fqData2;
    handlers.getPlayerRanks(req.params.player)
    .then((data) => {

      // let check = (player) => {
      //   return db.getOne(player);
      // }
      // let value = check(playerName);
      // db.save(data.data.ranks, playerName)
      fqData = data.data.ranks;
      fqData2 = data.data

      return db.getOne(playerName)
    })
    .then(data1 => {
      if (data1 === null) {
        res.status(200).json(fqData2);
        db.save(fqData, playerName)
      } else {
        let dataArr = [fqData2, data1];
        res.status(200).json(dataArr);
      }
      // console.log('The data: ', data1);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Internal Server Error'})
    })
});

app.get('/tournaments/:region', function(req, res) {
  // console.log(req.params)
    handlers.getTourneys(req.params.region)
    .then((data) => {
      res.status(200).json(data.data);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Internal Server Error'})
    })
});

app.get('/news', function(req, res) {
  handlers.getNews(req.params.region)
    .then((data) => {
      res.status(200).json(data.data);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Internal Server Error'})
    })
});

app.get('/stat/:player/:stat', (req, res) => {
  // console.log(req.params.player, req.params.stat)
  handlers.getStats(req.params.player, req.params.stat)
    .then((data) => {
      res.status(200).json(data.data);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Internal Server Error'})
    })
});

app.get('/titles/:player', (req, res) => {
  // console.log(req.params.player)
  handlers.getTitles(req.params.player)
    .then((data) => {
      res.status(200).json(data.data);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Internal Server Error'})
    })
});