
import Button from './Button';
import './Header.css';

function Header({ setPage, openModal }) {
  return (
    <header>
      <h1>React Components Demo</h1>
      <nav className="header__nav">
        <Button visual="link" onClick={() => setPage('home')}>Home</Button>
        <Button visual="link" onClick={() => setPage('cards')}>Cards</Button>
        <Button visual="link" onClick={() => setPage('panels')}>Panels</Button>
        <Button visual="button" onClick={openModal}>Open Modal</Button>
      </nav>
    </header>
  );
}

export default Header;
