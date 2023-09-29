import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPetsData } from "../store/pet-actions";

const Favorites = () => {
  const user = useSelector((state) => state.auth.user);
  const favPets = useSelector((state) => state.allFavoritedPets.favPets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPetsData());
  }, []);

  const fetchDataHandler = () => {
    console.log(user);
    dispatch(fetchAllPetsData(user.key));
  };

  return (
    <div>
      <button onClick={fetchDataHandler}>fetch data</button>
      {favPets && favPets.map((pet) => <p>{pet.name}</p>)}
    </div>
  );
};

export default Favorites;
