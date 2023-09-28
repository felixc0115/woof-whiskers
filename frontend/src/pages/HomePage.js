import { Box, Button, Grid, Input, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ height: "800px", width: "800px" }}>
      <Box sx={{ height: "500px" }}>
        {/* <img
          sx={{ height: "100%", maxWidth: "100%", "object-fit": "cover" }}
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="dogs"
        /> */}
      </Box>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          navigate("/pets");
        }}
      >
        <Stack direction="row" spacing={1} justifyContent={"center"}>
          <Input
            sx={{
              width: "100%",
              border: "1px solid black",
            }}
            placeholder="Try to submit with no text!"
            required
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default HomePage;
