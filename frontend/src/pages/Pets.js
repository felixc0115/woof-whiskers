import { Box, IconButton, Pagination, Paper } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import PetCard from "../components/PetCard";
import SearchIcon from "@mui/icons-material/Search";

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [searchZip, setSearchZip] = useState("30341");
  const [page, setPage] = useState("1");

  const zipCodeRef = useRef(null);

  useEffect(() => {
    getPets();
  }, [searchZip, page]);

  //async function that retrieves the access token from the api
  const getAccessToken = async () => {
    const response = await fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grant_type: "client_credentials",
        client_id: "oKBT7gT5BgczUV5x2hgFP1ArQe9bQz05gnfBTkBwfgfGYIUqmi",
        client_secret: "GHS5KAddqksyEthzYcIv8j1RMtIJc1C3Tepq4UMm",
      }),
    });
    const data = await response.json();
    return data.access_token;
  };

  //async function that uses the token retrieved from get_token to access the external API
  const getPets = async () => {
    const token = await getAccessToken();

    const response = await fetch(
      `https://api.petfinder.com/v2/animals?location=${searchZip}&page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data.animals);
    setPets(data.animals);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchZip(zipCodeRef.current.value);
  };

  return (
    <>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
        }}
      >
        <input
          sx={{ border: "none", outline: "none", width: "350px" }}
          // className="search-bar"
          ref={zipCodeRef}
          placeholder="Search..."
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px", color: "red" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <Box
        sx={{
          display: "flex",
          gap: "32px",
          flexWrap: "wrap",
          m: "32px 8px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pets?.map((pet) => {
          return <PetCard key={pet.id} pet={pet} />;
        })}
        <Pagination onChange={(e, page) => setPage(page)} count={10} />
      </Box>
    </>
  );
};

export default Pets;
