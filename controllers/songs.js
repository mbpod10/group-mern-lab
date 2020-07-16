const express = require("express");
const router = express.Router();
const Song = require("../models/Song");

//all songs
router.get("/", (req, res) => {
  Song.find({}, (error, songs) => {
    if (error) console.log(error);
    else res.json(songs);
  });
});

//favorites
router.get("/favorites", (req, res) => {
  Favorite.find({}, (error, songs) => {
    if (error) console.log(error);
    else res.json(songs);
  });
});

// song by id
router.get("/:id", (req, res) => {
  Song.findById(req.params.id, (error, song) => {
    if (error) console.log(error);
    else res.json(song);
  });
});
//post new song
router.post("/", (req, res) => {
  Song.create(req.body, (error, song) => {
    if (error) console.log(error);
    else res.json(song);
  });
});

//update
router.put("/:id", (req, res) => {
  Song.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (error, song) => {
      if (error) console.log(error);
      else res.json(song);
    }
  );
});

//delete
router.delete("/:id", (req, res) => {
  Song.findByIdAndRemove(req.params.id, (error, song) => {
    if (error) console.log(error);
    else res.json(song);
  });
});

//change from false to true
router.put("/:id/fav", (req, res) => {
  Song.findOneAndUpdate(
    { _id: req.params.id },
    { isFavorite: true },
    { new: true },
    (error, song) => {
      if (error) console.log(error);
      else res.json(song);
    }
  );
});

//add to favs
router.put("/:id/fav", (req, res) => {
  Song.findOneAndUpdate(
    { _id: req.params.id },
    { isFavorite: true },
    { new: true },
    (error, song) => {
      if (error) console.log(error);
      else res.json(song);
    }
  );
});
// remove favs
router.put("/:id/fav/remove", (req, res) => {
  Song.findOneAndUpdate(
    { _id: req.params.id },
    { isFavorite: false },
    { new: true },
    (error, song) => {
      if (error) console.log(error);
      else res.json(song);
    }
  );
});

module.exports = router;
