import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Your App Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

