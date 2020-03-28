import React from "react";
import './style.scss'

export default ({nextPoke, prevPoke}) => {
  return (
    <div className="pagination__group">
      <button className="pagination__btn" onClick={prevPoke}>{"<"}</button>
      <button className="pagination__btn" onClick={nextPoke}>{">"}</button>
    </div>
  );
};
