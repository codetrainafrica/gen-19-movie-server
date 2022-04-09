const moviesModel = require("../models/movieModel");

const addMovieController = async (request, response) => {
  const movie = request.body;

  const model = new moviesModel(movie);
  await model.save();

  response.send({
    message: "successfully added",
    data: movie,
  });
};

module.exports = addMovieController;
