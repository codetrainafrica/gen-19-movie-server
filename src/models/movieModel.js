const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  releaseDate: String,
  rating: Number,
  description: String,
});

const moviesModel = mongoose.model("movies", movieSchema);
module.exports = moviesModel;
