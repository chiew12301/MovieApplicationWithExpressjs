//import service layer
const movieService = require('./movieservice');

const getMovies = (done) => {
//call service method getMovies method
  return movieService.getMovies(done);
}

const getMovieById = (movieId, done) => {
    //call service method getMovieById method
  return movieService.getMovieById(movieId,done);
}

const saveMovieDetails = (movieDetails, done) => {
  //call service method saveMovieDetails method
  return movieService.saveMovieDetails(movieDetails, done);
}

const updateMovieDetails = (movieId, movieDetails, done) => {
  //call service method updateMovieDetails method
  return movieService.updateMovieDetails(movieId, movieDetails, done);
}

const deleteMovieById = (movieId, done) => {
  //call service method deleteMovieById method
  return movieService.deleteMovieById(movieId, done);
}

module.exports = {
  getMovies, getMovieById, saveMovieDetails, updateMovieDetails, deleteMovieById
}
