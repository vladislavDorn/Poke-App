import React from "react";
import './style.scss'

export default props => {
  const { name, image, type } = props;
  return (
    <div className="pokemon__item">
      <img src={image} alt={name} className="pokemon__item_image"/>
      <div className="pokemon__item_info">
        <h1 className="pokemon__item_title">{name[0].toUpperCase() + name.slice(1)}</h1>
        <p className="pokemon__item_description">Type: {type}</p>
      </div>
    </div>
  );
};
