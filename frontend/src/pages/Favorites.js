import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPetsData } from "../store/pet-actions";
import FavoritedPetCard from "../components/FavoritedPetCard";
import { Box, Typography } from "@mui/material";

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
    <Box sx={{ mb: "120px" }}>
      <Typography
        variant="h1"
        sx={{ textAlign: "center", fontSize: "50px", mt: "16px" }}
      >
        Favorites
      </Typography>
      {userFavPets.length === 0 && (
        <Typography sx={{ textAlign: "center", fontSize: "20px", mt: "16px" }}>
          There are currently no favorited pets.{" "}
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          gap: "32px",
          flexWrap: "wrap",
          m: "32px 16px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        {userFavPets?.map((pet) => (
          <FavoritedPetCard key={pet.pet_id} pet={pet} />
        ))}
      </Box>
    </Box>
  );
};

export default Favorites;
