import { Favorite, Pets, Support } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const sectionItems = [
  {
    id: 1,
    icon: <Pets sx={{ fontSize: 100 }} color="primary" />,
    reason: "Companionship",
    sentence:
      "Pets offer companionship and provide emotional support, reducing loneliness and offering love.",
  },
  {
    id: 2,
    icon: <Favorite sx={{ fontSize: 100 }} color="primary" />,
    reason: "Health Benefits",
    sentence:
      "Pet interactions lower stress, boost happiness chemicals, and promote exercise for better health.",
  },
  {
    id: 3,
    reason: "Rescuing and Saving Pet Lives",
    icon: <Support sx={{ fontSize: 100 }} color="primary" />,
    sentence:
      "Adoption gives shelter animals a second chance, enriching both your life and theirs.",
  },
];

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          minHeight: "500px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={6}
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: "1300px",
            padding: "50px",
          }}
        >
          <Grid item xs={12} md={7}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{ paddingBottom: "15px" }}
            >
              Unleash Your Inner Hero – Adopt Today!
            </Typography>
            <Typography
              variant="h6"
              sx={{ opacity: "0.4", paddingBottom: "30px" }}
            >
              By opening your heart and home to one of these extraordinary pets,
              you're not just adopting a companion; you're embarking on a
              journey of love, loyalty, and shared adventures. Together, you'll
              write a story filled with laughter, comfort, and boundless joy.
            </Typography>
            {!user && (
              <Button
                variant="contained"
                color="primary"
                sx={{ width: "200px", fontSize: "16px" }}
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            )}
          </Grid>
          <Grid item xs={12} md={5}>
            <img
              src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="pets"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, minHeight: "400px" }}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            minHeight: "500px",
          }}
        >
          {sectionItems.map((item) => (
            <Grid
              item
              xs={12}
              md={3.5}
              minHeight={300}
              key={item.id}
              sx={{
                backgroundColor: "#f2f0f1",
                textAlign: "center",
                padding: "30px",
                width: "200px",
                borderRadius: "10px",
                margin: "10px",
              }}
            >
              {item.icon}
              <Typography variant="h6" sx={{ pb: "6px", fontSize: "16px" }}>
                {item.reason}
              </Typography>
              <Typography>{item.sentence}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          minHeight: "400px",
          alignItems: "center",
          justifyContent: "center",
          margin: "30px 0px 100px 0px",
        }}
      >
        <Grid
          container
          spacing={6}
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: "1300px",
            padding: "50px",
          }}
        >
          <Grid item xs={12} md={5}>
            <img
              src="https://images.unsplash.com/photo-1594005374167-5fd900fb82c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2637&q=80"
              alt="pet"
              style={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{ paddingBottom: "15px" }}
            >
              Finding the Perfect Companion
            </Typography>
            <Typography
              sx={{ opacity: "0.7", paddingBottom: "30px", fontSize: "18px" }}
            >
              To find the perfect pet, start by assessing your lifestyle and
              living space. Consider factors like size, exercise needs, and
              compatibility with existing pets. Decide whether you prefer a
              specific breed or are open to adoption. Spend quality time with
              potential pets to gauge their temperament and suitability. Ask
              about their history and any special needs. Trust your instincts
              and choose the pet that resonates with you and fits your
              lifestyle. Remember, the perfect pet brings joy and companionship
              to your life.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
