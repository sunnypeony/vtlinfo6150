import './Navigation.css';

function Navigation({ currentPage, onPageChange }) {
  return (
    <nav className="navigation" aria-label="Main navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a 
            href="#home" 
            className={`navigation__link ${currentPage === 'home' ? 'navigation__link--active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange('home');
            }}
          >
            Home
          </a>
        </li>
        <li className="navigation__item">
          <a 
            href="#about" 
            className={`navigation__link ${currentPage === 'about' ? 'navigation__link--active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange('about');
            }}
          >
            About
          </a>
        </li>
        <li className="navigation__item">
          <a 
            href="#contact" 
            className={`navigation__link ${currentPage === 'contact' ? 'navigation__link--active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange('contact');
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

