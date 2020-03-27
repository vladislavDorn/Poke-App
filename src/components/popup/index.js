import React from "react";
import "./style.scss";

export default ({ currentPoke, closePopup }) => {
  const {
    name,
    sprites,
    types,
    weight,
    height,
    base_experience,
    abilities
  } = currentPoke;
  return (
    <div className="popup__wrapper">
      <div className="popup__content">
        <div className="popup__content_closebtn" onClick={closePopup}></div>
        <div className="popup__image_block">
          <img
            src={sprites.front_default}
            alt={name}
            className="popup__image"
          />
          <img
            src={sprites.back_default}
            alt={currentPoke.name}
            className="popup__image"
          />
        </div>
        <div className="popup__info">
          <h2 className="popup__info_title">{name[0].toUpperCase() + name.slice(1)}</h2>
          <ul className="popup__info_list">
            <li className="popup__info_type">
              Type:{" "}
              <span className="popup__info_value">
                {types[0].type.name}
              </span>
            </li>
            <li className="popup__info_type">
              Weight:{" "}
              <span className="popup__info_value">{weight}</span>
            </li>
            <li className="popup__info_type">
              Height:{" "}
              <span className="popup__info_value">{height}</span>
            </li>
            <li className="popup__info_type">
              Base experience:{" "}
              <span className="popup__info_value">
                {base_experience}
              </span>
            </li>
            <li className="popup__info_type">
              Abilities:{" "}
              <span className="popup__info_value">
                {abilities.map((el, i) => {
                  if (i === abilities.length - 1) {
                    return el.ability.name;
                  } else return el.ability.name + ", ";
                })}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
