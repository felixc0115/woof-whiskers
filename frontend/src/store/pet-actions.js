import { allPetActions } from "./all-favorite-pets-slice";

export const fetchAllPetsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/api/v1", {
        method: "GET",
        headers: {},
      });

      if (!response.ok) {
        throw new Error("Could not fetch pets");
      }

      const data = await response.json();
      return data;
    };
    try {
      const petsData = await fetchData();
      dispatch(
        allPetActions.replacePets({
          pets: petsData,
        })
      );
    } catch (error) {
      console.error(error);
      alert("Fetching pet data failed");
    }
  };
};
