import { useState } from "react";
import Reorder from "./Reorder";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);


  const increase = () => {
    setCount((c) => c + 1);
  };


  const decrease = () => {
    setCount((c) => Math.max(0, c - 1));
  };


  const handleReorder = () => {
    setCount(5);
  };

  return (
    <>
      <main className="app">
        <h1 className="app__title">Inventory</h1>

        <section className="inventory-row" aria-live="polite">
          <span className="inventory-row__label">Count:</span>
          <output className="inventory-row__count" aria-label="inventory count">
            {count}
          </output>

          <div
            className="inventory-row__buttons"
            role="group"
            aria-label="change inventory"
          >
            <button
              className="btn btn--decrease"
              onClick={decrease}
              disabled={!count}
              aria-disabled={!count}
              type="button"
            >
              −
            </button>

            <button
              className="btn btn--increase"
              onClick={increase}
              type="button"
            >
              +
            </button>
          </div>

          {count === 0 && <Reorder onReorder={handleReorder} />}
        </section>

        <p className="app__notes">
          Use the + / − buttons to change the inventory. When the count reaches
          0 the Reorder button appears (with a fade-in animation) and sets count
          to 5.
        </p>
      </main>
    </>
  );
}

export default App;
