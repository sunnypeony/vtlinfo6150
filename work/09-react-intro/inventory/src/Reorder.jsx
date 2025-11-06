import "./reorder.css";

function Reorder({ onReorder }) {
  return (
    <div className="reorder">
      <button
        className="btn btn--reorder reorder__button"
        onClick={() => {
          onReorder();
        }}
        type="button"
      >
        Reorder
      </button>
    </div>
  );
}

export default Reorder;
