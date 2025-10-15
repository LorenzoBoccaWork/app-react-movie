import './CardMedia.css';

interface CardMediaProps {
  type?: 'movie' | 'series';
}

// Definiamo le interfacce per i dati
interface MovieData {
  backdropPath: string;
  title: string;
  voteAverage: number;
  overview: string;
  genres: string;
  runtime: number;
}

interface SeriesData {
  backdropPath: string;
  name: string;
  voteAverage: number;
  overview: string;
  genres: string;
  numberOfSeasons: number;
}

function CardMedia({ type = 'movie' }: CardMediaProps) {
  // Dati statici per movie
  const movieData: MovieData = {
    backdropPath: 'https://via.placeholder.com/300x450/333/fff?text=Movie+Poster',
    title: 'Il Grande Film',
    voteAverage: 8.5,
    overview: 'Una storia avvincente che tiene lo spettatore incollato allo schermo dall\'inizio alla fine.',
    genres: 'Azione, Avventura, Drammatico',
    runtime: 142
  };

  // Dati statici per serie
  const seriesData: SeriesData = {
    backdropPath: 'https://via.placeholder.com/300x450/444/fff?text=Series+Poster',
    name: 'La Grande Serie',
    voteAverage: 9.2,
    overview: 'Una serie televisiva epica che esplora temi profondi attraverso personaggi complessi.',
    genres: 'Drama, Fantasy, Thriller',
    numberOfSeasons: 5
  };

  if (type === 'movie') {
    const data = movieData;
    return (
      <div className="card-media">
        <div className="card-image">
          <img src={data.backdropPath} alt={data.title} />
          <div className="card-rating">{data.voteAverage}</div>
        </div>
        <div className="card-content">
          <h3 className="card-title">{data.title}</h3>
          <div className="card-meta">
            <span className="card-runtime">{data.runtime} min</span>
          </div>
          <p className="card-genres">{data.genres}</p>
          <p className="card-overview">{data.overview}</p>
        </div>
      </div>
    );
  } else {
    const data = seriesData;
    return (
      <div className="card-media">
        <div className="card-image">
          <img src={data.backdropPath} alt={data.name} />
          <div className="card-rating">{data.voteAverage}</div>
        </div>
        <div className="card-content">
          <h3 className="card-title">{data.name}</h3>
          <div className="card-meta">
            <span className="card-seasons">{data.numberOfSeasons} stagioni</span>
          </div>
          <p className="card-genres">{data.genres}</p>
          <p className="card-overview">{data.overview}</p>
        </div>
      </div>
    );
  }
}

export default CardMedia;