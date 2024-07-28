import React from 'react';
import { Link } from 'react-router-dom';
const movies = [
  { id: 1, name: 'Movie 1', image: 'https://4kwallpapers.com/images/walls/thumbs_2t/17165.jpg' },
  { id: 2, name: 'Movie 2', image: 'https://www.theweek.in/content/dam/week/news/entertainment/images/2024/2/20/goat-life.jpg' },
  { id: 3, name: 'Movie 3', image: 'https://images.filmibeat.com/webp/320x392/img/popcorn/trending_news/shahidkapoorsdevareleasedatelocked-8504-1721377873.jpg' },
  { id: 4, name: 'Movie 4', image: 'https://images.filmibeat.com/webp/320x392/img/popcorn/trending_news/phiraayihasseendillrubawillpremiereonaug9th-8492-1721033938.jpg'},

];
function MovieList() {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-item">
          <img src={movie.image} alt={movie.name} />
          <h2>{movie.name}</h2>
          <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
