import './App.css';
import CardMedia from './components/CardMedia';
import Header from './components/Header';
import HeroMedia from './components/HeroMedia';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <HeroMedia type="movie" sectionTitle="Trending movies" />
        <HeroMedia type="series" sectionTitle="Trending series" />
        <HeroMedia type="movie"sectionTitle="Ultime uscite movie" />
        <HeroMedia type="movie"sectionTitle="Movie più votati" />
      </main>
    </div>
  );
}

export default App;