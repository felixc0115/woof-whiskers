import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Built by Felix Chen
        </Typography>
        <Typography color="text.secondary" align="center">
          <Link to="resume">View my resume</Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
