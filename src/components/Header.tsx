import Button from './Button';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">MediaApp</div>
        <form className="search-form">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Cerca film o serie..." 
          />
          <Button text="Cerca"  disabled={false}  />
        </form>
      </div>
    </header>
  );
}

export default Header;