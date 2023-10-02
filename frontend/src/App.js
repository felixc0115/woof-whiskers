import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Root from "./pages/Root";
import Resume from "./pages/Resume";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Pets from "./pages/Pets";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.auth.user);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "", element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
        { path: "resume", element: <Resume /> },
        {
          path: "pets",
          element: user ? <Pets /> : <Navigate to="/login" />,
        },
        {
          path: "favorites",
          element: user ? <Favorites /> : <Navigate to="/login" />,
        },
      ],
    },
  ]);

  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  ); //RouterProvider allows for client side routing and ThemeProvider takes a theme prop and applies it to the entire React tree that it is wrapping around.
}

export default App;
