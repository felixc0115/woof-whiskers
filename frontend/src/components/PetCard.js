import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { allPetActions } from "../store/all-favorite-pets-slice";
import { useSelector, useDispatch } from "react-redux";
import { sendPetData } from "../store/pet-actions";

const PetCard = ({ pet }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const addToFavoritesHandler = (e) => {
    e.stopPropagation();
    const favoritedPet = {
      pet_id: pet.id,
      name: pet.name,
      description: pet.description,
      pet_more_info_url: pet.url,
      pet_picture_url: pet.primary_photo_cropped.medium,
      city: pet.contact.address.city,
      state: pet.contact.address.state,
      favorited_by: user.username,
    };
    dispatch(sendPetData(favoritedPet, user.key));
  };

  return (
    <Card sx={{ width: "300px", height: "500px", position: "relative" }}>
      <CardMedia
        sx={{ height: 300 }}
        image={
          pet?.primary_photo_cropped?.medium ||
          "https://fakeimg.pl/600x400?text=No+Image"
        } //the ? in the pet?.primary_photo_cropped?.medium is called optional chaining and checks if the left of the question mark is null and if so returns undefined
        title="animal"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pet.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pet?.description || "No description provided"}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: "absolute", bottom: 0 }}>
        <Button onClick={addToFavoritesHandler} size="small">
          Favorite
        </Button>
        <Button size="small">
          <a href={pet.url}>Learn More</a>
        </Button>
      </CardActions>
    </Card>
  );
};

export default PetCard;
