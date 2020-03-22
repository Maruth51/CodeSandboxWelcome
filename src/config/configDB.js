const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", err => {
  console.log(err);
});
db.once("open", () => {
  console.log("!connected to Mongo");
});

module.exports = db;
