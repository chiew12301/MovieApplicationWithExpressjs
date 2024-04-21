
//import all the modules required 
const express = require('express');
const movieController = require('./moviecontroller');
const router = express.Router();
/**
 * API to get the details of all movies
 * EFFECTIVE URL: GET /api/v1/movies
 */
router.get("/", (req, res) => {
  try {
    // Call controller method to get all movies
    movieController.getMovies((err, results) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
/**
 * API to get the details of specific movie
 * EFFECTIVE URL: GET /api/v1/movie/:movieId
 */
//
router.get("/:movieId", (req, res) => {
  try {
    const movieId = req.params.movieId;
    // Call controller method to get a movie by id
    movieController.getMovieById(movieId, (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else if (!results) {
        res.status(404).json({ error: 'Movie not found' });
      } else {
        res.json(results);
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * API to save new movie
 * EFFECTIVE URL: POST /api/v1/movies
 */
router.post("/", (req, res) => {
  try {
    const movieDetails = req.body;
    // Call controller method to save movie details
    movieController.saveMovieDetails(movieDetails, (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json(results);
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * API to edit movie detail
 * EFFECTIVE URL: PATCH /api/v1/movies/:movieId
 */
router.patch("/:movieId", (req, res) => {
  try {
    const movieId = req.params.movieId;
    const movieDetails = req.body;
    // Call controller method to update movie details
    movieController.updateMovieDetails(movieId, movieDetails, (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else if (!results) {
        res.status(404).json({ error: 'Movie not found' });
      } else {
        res.json(results);
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * API to delete movie
 * EFFECTIVE URL: DELETE /api/v1/movies/:movieId
 */
router.delete("/:movieId", (req, res) => {
  try {
    const movieId = req.params.movieId;
    // Call controller method to delete movie
    movieController.deleteMovieById(movieId, (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else if (!results) {
        res.status(404).json({ error: 'Movie not found' });
      } else {
        res.json({ message: 'Movie deleted successfully' });
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
