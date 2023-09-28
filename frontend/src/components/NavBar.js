import styled from "@emotion/styled";
import { Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Button,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { StyledToolbar, UserBox } from "../styles/style";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/login");
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          onClick={() => navigate("/")}
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Furry Pet Finder
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />

        <UserBox>
          {user ? (
            <>
              <Typography variant="span">{` welcome, ${user?.username}!`}</Typography>

              <Avatar
                sx={{ width: 30, height: 30 }}
                src="https://images.pexels.com/photos/3402575/pexels-photo-3402575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                onClick={() => {
                  setOpen(true);
                }}
              />
              <Button onClick={logoutHandler} variant="outline">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="container" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button variant="container" onClick={() => navigate("/signup")}>
                Signup
              </Button>
            </>
          )}
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open} //this determines the state of the menu bar because it is assigned the open state.
        onClose={() => setOpen(false)} //Allows you to click anywhere (outside of the element that triggers the menu to open) to close
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>
          <Link to="/favorites">Favorites</Link>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
