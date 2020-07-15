const mongoose = require("./dbs/connection");
const db = mongoose.connection;
const Song = require("./models/Song");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  await Song.deleteMany({});

  const songs = [
    { title: "Happy", artist: "Pharell Williams", time: "5:36" },
    { title: "Party Rock Anthem", artist: "LMFAO", time: "4:05" },
    { title: "Imagine", artist: "John Lennon", time: "2:50" },
    { title: "Call Me", artist: "Blondie", time: "6:19" },
    { title: "My Heart Will Go On", artist: "Celine Dion", time: "3:47" },
  ];

  await Song.insertMany(songs);
  console.log("Created some items!");
};
const run = async () => {
  await main();
  db.close();
};

run();
