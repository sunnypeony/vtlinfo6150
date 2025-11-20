import '../styles/components/Logo.css';

function Logo({ onNavigateHome }) {
  return (
    <button
      type="button"
      onClick={onNavigateHome}
      className="logo-button"
      aria-label="Navigate to home page"
    >
      <img
        src="/images/logo.jpg"
        alt="Logo"
        className="logo-image"
      />
    </button>
  );
}

export default Logo;

