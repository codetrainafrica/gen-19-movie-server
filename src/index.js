const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const addMovieController = require("./controllers/addMovieController");
const getMoviesController = require("./controllers/getMovieController");
const deleteMovieController = require("./controllers/deleteMovieController");
const updateMovieController = require("./controllers/updateMovieController");

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get("/movies/:id?", getMoviesController);
server.delete("/movies/:id", deleteMovieController);
server.put("/movies/:id", updateMovieController);
server.post("/movies", addMovieController);

mongoose
  .connect(
    "mongodb+srv://tony:SYG4G0b8pe6LFWbv@gameserver.h0qzu.mongodb.net/moviesDB?retryWrites=true&w=majority"
  )
  .then(() => {
    server.listen(9000, () => {
      console.log("server running on port 9000");
    });
  });
