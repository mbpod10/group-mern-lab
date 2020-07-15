const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const songsController = require("./controllers/songs");
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

app.use("/api/songs", songsController);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
