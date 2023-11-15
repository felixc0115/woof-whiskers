import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "8px",
        justifyContent: "center",
        backgroundColor: "#f2f0f1",
        flexDirection: "column",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography sx={{ opacity: "0.4" }}>Built by Felix Chen</Typography>
    </Box>
  );
};

export default Footer;
