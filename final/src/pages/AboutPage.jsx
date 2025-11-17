import './AboutPage.css';

function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      <div className="container">
        <h1>About Us</h1>
        <section className="about-page__section">
          <h2>Project Introduction</h2>
          <p>This is a single-page application built with React, demonstrating modern web development best practices.</p>
        </section>
        <section className="about-page__section">
          <h2>Technology Stack</h2>
          <ul className="about-page__tech-list">
            <li>React - UI framework</li>
            <li>Vite - Build tool</li>
            <li>HTML5 - Semantic markup</li>
            <li>CSS3 - Styling and layout</li>
            <li>JavaScript ES6+ - Interactive logic</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default AboutPage;

