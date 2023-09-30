import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendPetData } from "../store/pet-actions";

const PetCard = ({ pet }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [open, setOpen] = useState(false);

  const addToFavoritesHandler = () => {
    const favoritedPet = {
      pet_id: pet.id,
      name: pet.name,
      description: pet.description,
      pet_more_info_url: pet.url,
      pet_picture_url: pet?.primary_photo_cropped?.medium,
      city: pet.contact.address.city,
      state: pet.contact.address.state,
      favorited_by: user.username,
    };

    const token = JSON.parse(localStorage.getItem("user")).key;

    dispatch(sendPetData(favoritedPet, token));
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
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
        <Button onClick={() => setOpen(true)} size="small">
          Learn More
        </Button>
      </CardActions>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Typography
            variant="h6"
            component="h2"
            sx={{ textDecoration: "underline" }}
          >
            {pet.name}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            {" "}
            <span style={{ "font-weight": "bold" }}>Location:</span>{" "}
            {`${pet?.contact?.address?.city},${pet?.contact?.address?.state}` ||
              "No description provided"}
          </Typography>

          <Typography sx={{ mt: 2 }}>
            {" "}
            <span style={{ "font-weight": "bold" }}>Description:</span>{" "}
            {pet?.description || "No description provided"}
          </Typography>

          <Typography sx={{ mt: 2 }}>
            {" "}
            <span style={{ "font-weight": "bold" }}>Gender:</span>{" "}
            {pet?.gender || "No gender provided"}
          </Typography>

          <Typography sx={{ mt: 2 }}>
            {" "}
            <span style={{ "font-weight": "bold" }}>Primary Breed:</span>{" "}
            {pet?.breeds?.primary || "No breed provided"}
          </Typography>

          <Typography sx={{ mt: 2 }}>
            {" "}
            <span style={{ "font-weight": "bold" }}>Primary Color:</span>{" "}
            {pet?.colors?.primary || "No color provided"}
          </Typography>

          <Typography sx={{ mt: 2 }}>
            {" "}
            <span style={{ "font-weight": "bold" }}>Spayed/Neutered:</span>{" "}
            {pet?.attributes?.spayed_neutered === true ? "Yes" : "No"}
          </Typography>

          <Typography sx={{ mt: 2 }}>
            {" "}
            <span style={{ "font-weight": "bold" }}>Contact:</span>{" "}
            {pet?.contact?.email || "No contact info provided"}
          </Typography>
        </Box>
      </Modal>
    </Card>
  );
};

export default PetCard;
