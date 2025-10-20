import './CardMedia.css';

interface CardMediaProps {
  backdropPath: string;
  title?: string;
  name?: string;
  voteAverage: number;
  overview: string;
  genres: string;
  runtime?: number;
  numberOfSeasons?: number;
}

function CardMedia({ 
  backdropPath, 
  title, 
  name, 
  voteAverage, 
  overview, 
  genres, 
  runtime, 
  numberOfSeasons 
}: CardMediaProps) {
  const isMovie = !!title && !!runtime;
  
  return (
    <div className="card-media">
      <div className="card-image">
        <img src={backdropPath} alt={isMovie ? title : name} />
        <div className="card-rating">{voteAverage}</div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{isMovie ? title : name}</h3>
        <div className="card-meta">
          <span className={isMovie ? 'card-runtime' : 'card-seasons'}>
            {isMovie ? `${runtime} min` : `${numberOfSeasons} stagioni`}
          </span>
        </div>
        <p className="card-genres">{genres}</p>
        <p className="card-overview">{overview}</p>
      </div>
    </div>
  );
}

export default CardMedia;