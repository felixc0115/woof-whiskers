import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favePets = useSelector((state) => state.allFavoritedPets);

  return (
    <div>
      {favePets.map((pet) => (
        <p>{pet.name}</p>
      ))}
    </div>
  );
};

export default Favorites;
