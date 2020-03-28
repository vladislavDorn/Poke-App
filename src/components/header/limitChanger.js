import React from "react";
import "./style.scss";

import { limitData } from "./limitData";

export default ({
  limit = 20,
  limitChangerView = false,
  toggleLimitChanger,
  changeLimit
}) => {
  return (
    <div className="poke__header_limitchanger" onClick={toggleLimitChanger}>
      <span className="poke__header_default">{limit}</span>
      {limitChangerView ? (
        <ul className="poke__header_limitchange__list">
          {limitData.map(({ value }, index) => {
            if (value === limit) return null;
            return (
              <li className="poke__header_limitchange__item" onClick={changeLimit} key={index}>
                {value}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};
