import './App.css';
import Header from './components/Header';
import HeroMedia from './components/HeroMedia';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <HeroMedia sectionTitle="Trending movies" />
        <HeroMedia sectionTitle="Trending series" />
        <HeroMedia sectionTitle="Ultime uscite movie" />
        <HeroMedia sectionTitle="Movie più votati" />
      </main>
    </div>
  );
}

export default App;