import { Box, Modal, Typography } from "@mui/material";
import React from "react";

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

const LearnMoreModal = ({ pet, setOpen, open }) => {
  return (
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
          <span style={{ fontWeight: "bold" }}>Location:</span>{" "}
          {`${pet?.contact?.address?.city}, ${pet?.contact?.address?.state}` ||
            `${pet.city}, ${pet.state}` ||
            "No location provided"}
        </Typography>

        <Typography sx={{ mt: 2 }}>
          {" "}
          <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
          {pet?.description || "No description provided"}
        </Typography>

        <Typography sx={{ mt: 2 }}>
          {" "}
          <span style={{ fontWeight: "bold" }}>Gender:</span>{" "}
          {pet?.gender || "No gender provided"}
        </Typography>

        <Typography sx={{ mt: 2 }}>
          {" "}
          <span style={{ fontWeight: "bold" }}>Primary Breed:</span>{" "}
          {pet?.breeds?.primary || "No breed provided"}
        </Typography>

        <Typography sx={{ mt: 2 }}>
          {" "}
          <span style={{ fontWeight: "bold" }}>Primary Color:</span>{" "}
          {pet?.colors?.primary || "No color provided"}
        </Typography>

        <Typography sx={{ mt: 2 }}>
          {" "}
          <span style={{ fontWeight: "bold" }}>Spayed/Neutered:</span>{" "}
          {pet?.attributes?.spayed_neutered === true ? "Yes" : "No"}
        </Typography>

        <Typography sx={{ mt: 2 }}>
          {" "}
          <span style={{ fontWeight: "bold" }}>Contact:</span>{" "}
          {pet?.contact?.email || "No contact info provided"}
        </Typography>
      </Box>
    </Modal>
  );
};

export default LearnMoreModal;
