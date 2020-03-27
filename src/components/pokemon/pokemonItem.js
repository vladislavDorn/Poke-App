import React from "react";
import './style.scss'

import { typeData } from './typeData'

export default props => {
  const { name, image, type, id, openPopup } = props;
  return (
    <div className={`pokemon__item ${typeData[type]}`}>
      <img src={image} alt={name} className="pokemon__item_image"/>
      <div className="pokemon__item_info">
        <h1 className="pokemon__item_title">{name[0].toUpperCase() + name.slice(1)}</h1>
        <button className="pokemon__item_btn" data-id={id} onClick={openPopup}>Learn more</button>
      </div>
    </div>
  );
};
