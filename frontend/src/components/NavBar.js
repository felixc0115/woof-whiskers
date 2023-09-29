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
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          onClick={() => navigate("/")}
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Woof & Whiskers
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />

        <UserBox>
          {user ? (
            <>
              <Typography variant="span">{` welcome, ${user?.username}!`}</Typography>

              <Avatar
                sx={{ width: 30, height: 30 }}
                src="https://images.pexels.com/photos/3402575/pexels-photo-3402575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                onClick={handleOpenUserMenu}
              />
            </>
          ) : (
            <>
              <Button variant="container" onClick={() => navigate("/")}>
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
        anchorEl={anchorElUser}
        keepMounted
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MenuItem>
          <Link style={{ color: "black", textDecoration: "none" }} to="/pets">
            Explore
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/favorites"
          >
            Favorites
          </Link>
        </MenuItem>
        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
