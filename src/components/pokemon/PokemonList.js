import React from "react";

import Pokemon from "./pokemonItem";

export default ({ data, openPopup }) => {
  return (
    <div className="pokemon__list">
      {data.map((pokemon, index) => {
        return (
          <Pokemon
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            type={pokemon.types[0].type.name}
            openPopup={openPopup}
            key={index}
          />
        );
      })}
    </div>
  );
};
