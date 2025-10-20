import './Header.css';
interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

function Button({ text, onClick, disabled }: ButtonProps) {
    return (
      <button onClick={onClick} disabled={disabled} className="search-button">
        {text}
      </button>
    );
  }
  
export default Button;