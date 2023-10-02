import { allPetActions } from "./all-favorite-pets-slice";

export const fetchAllPetsData = (token) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/api/v1/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Could not fetch pets");
      }
      console.log(response);
      const data = await response.json();
      console.log(data);
      return data;
    };
    try {
      const petsData = await fetchData();
      console.log(petsData);
      dispatch(allPetActions.replacePets(petsData));
    } catch (error) {
      console.error(error);
      alert("Fetching pet data failed");
    }
  };
};

export const sendPetData = (newPet, token) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:8000/api/v1/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(newPet),
      });
      if (!response.ok) {
        throw new Error("Sending pet data failed");
      }
    };
    try {
      await sendRequest();
      dispatch(allPetActions.addPet(newPet));
    } catch (error) {
      console.error(error);
      alert("Pet already added to favorites.");
    }
  };
};

export const removePetData = (petID, token) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(`http://localhost:8000/api/v1/${petID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Deleting pet data failed");
      }
    };
    try {
      await sendRequest();
      dispatch(allPetActions.removePet(petID));
    } catch (error) {
      console.error(error);
      alert("Deleting pet data failed");
    }
  };
};
