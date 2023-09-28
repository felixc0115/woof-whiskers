import { createSlice } from "@reduxjs/toolkit";

const allFavoritedPets = createSlice({
  name: "allFavoritedPets",
  initialState: {
    favPets: [],
  },

  reducers: {
    replacePets(state, action) {
      state.pets = action.payload.pets;
    },
    addPet(state, action) {
      state.favPets.push(action.payload);
    },
  },
});

export const allPetActions = allFavoritedPets.actions;
export default allFavoritedPets.reducer;
