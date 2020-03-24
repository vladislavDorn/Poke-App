import React from "react";

import Pokemon from "./pokemonItem";

export default ({ data }) => {
  return (
    <div className="pokemon__list">
      {data.map((pokemon, index) => {
        return (
          <Pokemon
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            type={pokemon.types[0].type.name}
            key={index}
          />
        );
      })}
    </div>
  );
};
