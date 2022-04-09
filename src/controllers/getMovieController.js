const moviesModel = require("../models/movieModel");

const getMoviesController = async (request, response) => {
  const id = request.params.id;

  if (id) {
    const movie = await moviesModel.findById({ _id: id });
    response.send(movie);
  } else {
    const movies = await moviesModel.find();
    response.send(movies);
  }
};

module.exports = getMoviesController;
