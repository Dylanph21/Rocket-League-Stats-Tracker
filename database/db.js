const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/rl').then(() => {
  console.log('Connected to Mongo');
}).catch((err) => {
  console.log(err)
});

let PlayermmrSchema = new mongoose.Schema({
  playername: String,
  duel: Number,
  doubles: Number,
  standard: Number,
  hoops: Number,
  rumble: Number,
  dropshot: Number,
  snowday: Number
});

let Playermmrs = mongoose.model('Playermmr', PlayermmrSchema);

const save = (playerRatings, playerName) => {
  // console.log('DBSide save: ', playerRatings, playerName);
  let dataStruc = {
    playername: playerName,
    duel: playerRatings[0].mmr,
    doubles: playerRatings[1].mmr,
    standard: playerRatings[2].mmr,
    hoops: playerRatings[3].mmr,
    rumble: playerRatings[4].mmr,
    dropshot: playerRatings[5].mmr,
    snowday: playerRatings[6].mmr
  }
  return Playermmrs.create(dataStruc);
}

const getOne = (playerName) => {
  let nameObj = {playername: playerName}
  return Playermmrs.findOne(nameObj)
}

module.exports = {
  save,
  getOne,
}