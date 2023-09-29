import { createSlice } from "@reduxjs/toolkit";

const allFavoritedPetsSlice = createSlice({
  name: "allFavoritedPets",
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
  },
});

export const allPetActions = allFavoritedPetsSlice.actions;
export default allFavoritedPetsSlice.reducer;
