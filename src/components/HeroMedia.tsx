import './HeroMedia.css';
import CardMedia from './CardMedia';

interface HeroMediaProps {
  sectionTitle?: string;
}

function HeroMedia({ sectionTitle = 'Sezione Media' }: HeroMediaProps) {
  return (
    <section className="hero-media">
      <h2 className="hero-media-title">{sectionTitle}</h2>
      <div className="hero-media-grid">
        <CardMedia type="movie" />
        <CardMedia type="series" />
        <CardMedia type="movie" />
        <CardMedia type="series" />
      </div>
    </section>
  );
}

export default HeroMedia;