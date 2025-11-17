import './HomePage.css';

function HomePage() {
  return (
    <main id="main-content" className="home-page">
      <div className="container">
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of your React single-page application. You can add your content here.</p>
        <section className="home-page__section">
          <h2>Features</h2>
          <p>Your application includes the following features:</p>
          <ul className="home-page__feature-list">
            <li>Responsive design</li>
            <li>Accessibility support</li>
            <li>Form validation</li>
            <li>Multiple page routing</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default HomePage;

