import React from 'react';
import { Link, useParams } from 'react-router-dom';

const movies = [
  { 
    id: 1, 
    name: 'Movie 1', 
    description: 'Kalki 2898 – A.D is an Indian epic mythological-science fiction dystopian film written and directed by Nag Ashwin and produced by C. Aswani Dutt of Vyjayanthi Movies. The film stars an ensemble cast featuring Prabhas, Amitabh Bachchan, Kamal Haasan, Deepika Padukone, and Disha Patani.', 
    image: 'https://4kwallpapers.com/images/walls/thumbs_2t/17165.jpg' 
  },
  { 
    id: 2, 
    name: 'Movie 2', 
    description: "The Goat Life (2024), directed by Blessy and based on Benyamin's novel, tells the real-life story of Najeeb Muhammad, an Indian migrant worker. Seeking better opportunities in Saudi Arabia, Najeeb finds himself trapped in a slave-like existence, herding goats in the desert under harsh conditions. The film stars Prithviraj Sukumaran as Najeeb and features music by A.R. Rahman.", 
    image: 'https://www.theweek.in/content/dam/week/news/entertainment/images/2024/2/20/goat-life.jpg' 
  },

  { 
    id: 3, 
    name: 'Movie 3', 
    description: "**Deva** is a gripping action-drama that follows the journey of Deva, a fearless young man who rises from the streets to become a powerful figure in the underworld. With intense action sequences and a heart-wrenching storyline, the film delves into themes of loyalty, revenge, and redemption, showcasing the struggles and triumphs of Deva's tumultuous life.", 
    image: 'https://images.filmibeat.com/webp/320x392/img/popcorn/trending_news/shahidkapoorsdevareleasedatelocked-8504-1721377873.jpg' 
  },

  { 
    id: 4, 
    name: 'Movie 4', 
    description: "**Phir Aayi Haseen Dilruba** is a captivating romantic thriller that weaves a tale of love, betrayal, and mystery. When a charismatic woman re-enters the life of a troubled writer, old passions are reignited, and dark secrets resurface. As their rekindled romance intensifies, a series of unexpected twists and turns keep the audience on the edge of their seats, questioning the true intentions of each character.", 
    image: 'https://images.filmibeat.com/webp/320x392/img/popcorn/trending_news/phiraayihasseendillrubawillpremiereonaug9th-8492-1721033938.jpg' 
  },
];

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));
  
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <img src={movie.image} alt={movie.name} />
      <h2>{movie.name}</h2>
      <p>{movie.description}</p>
      <Link to={`/book/${movie.id}`}>Book Seat</Link>
    </div>
  );
}

export default MovieDetails;
