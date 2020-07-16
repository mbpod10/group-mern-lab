const express = require("express");
const router = express.Router();
const Song = require("../models/Song");
const Favorite = require("../models/Favorite");

//router.get("/", (req, res) => res.send("This is root!"));

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

router.put("/:id/fav", (req, res) => {
  Song.findById(req.params.id, (error, song) => {
    if (error) console.log(error);
    else {
      Favorite.update(
        req.params.id,
        {
          $push: {
            favorites: song,
          },
        },
        { new: true },
        (error, songs) => {
          if (error) console.log(error);
          else res.json(songs);
        }
      );
    }
  });
});

module.exports = router;
