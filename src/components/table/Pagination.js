import "./pagination.css";

function Pagination(props) {
  const { pages, currentPage, setActivePage } = props;
  const changePage = (val) => {
    if (val >= 1 && val <= pages) setActivePage(val);
  };
  return (
    <div className="container d-flex">
      <button
        className="navigatorButton"
        onClick={() => changePage(currentPage - 1)}
      >
        Previous
      </button>
      <input
        className="page-input"
        value={currentPage}
        onChange={(e) => changePage(e.target.value)}
        type="number"
        min="1"
        max={pages}
      />
      <p>/ {pages}</p>
      <button
        className="navigatorButton"
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
