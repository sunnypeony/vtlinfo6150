
import Button from '../components/Button';
import './CardsPage.css';

function CardsPage({ setPage }) {
  return (
    <section className="cards">
      <h2>Cards Gallery</h2>
      <div className="card-grid">
        <div className="card">
          <h3>Linked Card</h3>
          <p>This card links to the Panels page.</p>
          <Button visual="link" onClick={() => setPage('panels')}>Go to Panels</Button>
        </div>
        <div className="card">
          <h3>Static Card</h3>
          <p>Just some content without navigation.</p>
        </div>
        <div className="card">
          <h3>Another Card</h3>
          <p>Displays flexible layout and reusable styles.</p>
        </div>
      </div>
    </section>
  );
}

export default CardsPage;
