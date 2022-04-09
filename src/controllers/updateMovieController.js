const moviesModel = require("../models/movieModel");

const updateMovieController = async (request, response) => {
  const id = request.params.id;

  const updatedDetails = request.body;

  const movie = await moviesModel.findByIdAndUpdate(
    { _id: id },
    updatedDetails
  );

  response.send({
    message: "movie updated",
    data: movie,
  });
};

module.exports = updateMovieController;
