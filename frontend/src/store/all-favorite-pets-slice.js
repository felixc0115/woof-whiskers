import { createSlice } from "@reduxjs/toolkit";

const allFavoritedPetsSlice = createSlice({
  name: "allFavPets",
  initialState: {
    favPets: [],
  },

  reducers: {
    replacePets(state, action) {
      state.favPets = [...action.payload];
    },
    addPet(state, action) {
      state.favPets.push(action.payload);
    },
    removePet(state, action) {
      const updatedFavPets = state.favPets.filter(
        (pet) => pet.pet_id !== action.payload
      );
      state.favPets = updatedFavPets;
    },
  },
});

export const allPetActions = allFavoritedPetsSlice.actions;
export default allFavoritedPetsSlice.reducer;
