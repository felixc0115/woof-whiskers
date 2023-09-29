import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import favPetReducer from "./all-favorite-pets-slice";

const rootReducer = combineReducers({
  auth: authReducer,
  allFavPets: favPetReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
