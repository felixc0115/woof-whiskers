import { Box, CssBaseline } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <Box>
      <CssBaseline />
      <NavBar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Root;
