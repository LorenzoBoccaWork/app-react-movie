import './HeroMedia.css';
import CardMedia from './CardMedia';

interface HeroMediaProps {
  sectionTitle?: string;
  type: 'movie' | 'series';
  itemsCount?: number;
}

function HeroMedia({ sectionTitle = 'Sezione Media', type, itemsCount = 4 }: HeroMediaProps) {
  // Dati statici per movie
  const movieData = {
    backdropPath: 'https://via.placeholder.com/300x450/333/fff?text=Movie+Poster',
    title: 'Il Grande Film',
    voteAverage: 8.5,
    overview: 'Una storia avvincente che tiene lo spettatore incollato allo schermo dall\'inizio alla fine.',
    genres: 'Azione, Avventura, Drammatico',
    runtime: 142
  };

  // Dati statici per serie
  const seriesData = {
    backdropPath: 'https://via.placeholder.com/300x450/444/fff?text=Series+Poster',
    name: 'La Grande Serie',
    voteAverage: 9.2,
    overview: 'Una serie televisiva epica che esplora temi profondi attraverso personaggi complessi.',
    genres: 'Drama, Fantasy, Thriller',
    numberOfSeasons: 5
  };

  const data = type === 'movie' ? movieData : seriesData;
  const items = Array.from({ length: itemsCount });

  return (
    <section className="hero-media">
      <h2 className="hero-media-title">{sectionTitle}</h2>
      <div className="hero-media-grid">
        {items.map((_, index) => (
          <CardMedia key={index} {...data} />
        ))}
      </div>
    </section>
  );
}

export default HeroMedia;