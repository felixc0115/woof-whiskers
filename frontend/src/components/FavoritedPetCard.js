import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removePetData } from "../store/pet-actions";

const FavoritedPetCard = ({ pet }) => {
  const dispatch = useDispatch();

  const removeFromFavoritesHandler = () => {
    const token = JSON.parse(localStorage.getItem("user")).key;

    console.log(token);
    console.log(pet);
    dispatch(removePetData(pet.pet_id, token));
  };

  return (
    <Card sx={{ width: "300px", height: "500px", position: "relative" }}>
      <CardMedia
        sx={{ height: 300 }}
        image={
          pet?.pet_picture_url || "https://fakeimg.pl/600x400?text=No+Image"
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
        <Button onClick={removeFromFavoritesHandler} size="small">
          Remove
        </Button>
        <Button size="small">
          <a href={pet.url}>Learn More</a>
        </Button>
      </CardActions>
    </Card>
  );
};

export default FavoritedPetCard;
