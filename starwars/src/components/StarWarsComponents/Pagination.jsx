import React from "react";
import "./StarWars.css";

const Pagination = props => {
  return (
    <div>
      <button onClick={props.handlePaginationPrev} className="next-button">
        Previous Page
      </button>
      <button onClick={props.handlePaginationNext} className="next-button">
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
