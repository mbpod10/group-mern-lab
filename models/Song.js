const mongoose = require("../dbs/connection");

const SongSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  time: { type: String, required: true },
  isFavorite: { type: Boolean, default: false },
});

const Song = mongoose.model("song", SongSchema);

module.exports = Song;
