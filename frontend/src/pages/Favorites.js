import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPetsData } from "../store/pet-actions";
import FavoritedPetCard from "../components/FavoritedPetCard";
import { Box } from "@mui/material";

const Favorites = () => {
  const user = useSelector((state) => state.auth.user);
  const favPets = useSelector((state) => state.allFavPets.favPets);
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("user")).key;

  useEffect(() => {
    dispatch(fetchAllPetsData(token));
  }, []);

  const userFavPets = favPets.filter(
    (pet) => pet.favorited_by === user.username
  );

  return (
    <Box
      sx={{
        display: "flex",
        gap: "32px",
        flexWrap: "wrap",
        m: "32px 8px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      {userFavPets?.map((pet) => (
        <FavoritedPetCard key={pet.id} pet={pet} />
      ))}
    </Box>
  );
};

export default Favorites;
