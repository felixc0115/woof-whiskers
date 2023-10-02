import { Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  Toolbar,
  Button,
} from "@mui/material";
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
    setAnchorElUser(null);
    navigate("/");
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          onClick={() => navigate("/")}
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Woof & Whiskers
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        {!user ? (
          <Box>
            <Button variant="container" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button variant="container" onClick={() => navigate("/signup")}>
              Signup
            </Button>
          </Box>
        ) : (
          <Box sx={{ flexGrow: 0 }}>
            <Typography
              sx={{ mr: "8px" }}
              variant="span"
            >{` welcome, ${user?.username}!`}</Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="profile"
                  src="https://images.pexels.com/photos/3402575/pexels-photo-3402575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Link
                  onClick={handleCloseUserMenu}
                  style={{ color: "black", textDecoration: "none" }}
                  to="/"
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  onClick={handleCloseUserMenu}
                  style={{ color: "black", textDecoration: "none" }}
                  to="/pets"
                >
                  Explore
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  onClick={handleCloseUserMenu}
                  style={{ color: "black", textDecoration: "none" }}
                  to="/favorites"
                >
                  Favorites
                </Link>
              </MenuItem>
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
