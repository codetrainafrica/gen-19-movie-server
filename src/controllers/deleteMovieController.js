const moviesModel = require("../models/movieModel");

const deleteMovieController = async (request, response) => {
  const id = request.params.id;

  const deletedMovie = await moviesModel.findOneAndDelete({ _id: id });

  response.send({
    message: "movie deleted",
    data: deletedMovie,
  });
};

module.exports = deleteMovieController;
