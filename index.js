const express = require('express');
require("dotenv").config();
const morganBody = require("morgan-body")
const morgan = require('morgan')
let app = express();
const db = require("./src/models"); 
const fs = require("fs");
const routes = require('./src/routes');
const cors = require('cors')
var corsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions)) 
app.use('/', routes)

const seeds = fs.readFileSync("./config/seeding.sql", {
  encoding: "utf-8"
})



let port = 8000


db.sequelize.sync()
.then(() => {
  console.log("Synced db.");
})
.catch((err) => {
  console.log("Failed to sync db: " + err.message);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}..`)
});