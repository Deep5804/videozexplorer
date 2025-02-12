import React from "react";
import "../App.css"; // Import CSS

const Pagination = ({ page, setPage }) => {
  return (
    <div className="pagination">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <span style={{ padding: "8px 15px", fontSize: "16px" }}>Page {page}</span>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
