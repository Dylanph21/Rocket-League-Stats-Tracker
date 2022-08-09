const {Client} = require('pg');
const Promise = require('bluebird');

const connection = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: "5432",
  database: "rl"
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to DB`))
  .catch(err => {
      console.log('Error connecting to DB', err)
    });