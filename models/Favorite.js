const mongoose = require("../dbs/connection");

const FavoriteSchema = new mongoose.Schema(
  {
    title: { type: String },
    artist: { type: String },
    time: { type: String },
  }

  // ,
  // { timestamps: true },
);

const Favorite = mongoose.model("favorites", FavoriteSchema);

module.exports = Favorite;
