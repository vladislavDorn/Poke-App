import React from "react";
import "./style.scss";

import LimitChanger from "./limitChanger";

export default ({
  toggleLimitChanger,
  limit,
  limitChangerView,
  changeLimit
}) => {
  return (
    <header className="poke__header">
      <div className="container">
        <div className="poke__header_list">
          <div className="poke__header_item">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
              className="poke__header_logo"
              alt="Poke logo"
            />
          </div>
          <div className="poke__header_item">
            <LimitChanger
              limitChangerView={limitChangerView}
              limit={limit}
              toggleLimitChanger={toggleLimitChanger}
              changeLimit={changeLimit}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
