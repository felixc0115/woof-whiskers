import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Resume from "./pages/Resume";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Pets from "./pages/Pets";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "", element: <Login /> },
        { path: "signup", element: <SignUp /> },
        { path: "resume", element: <Resume /> },
        {
          path: "pets",
          element: <Pets />,
        },
        { path: "favorites", element: <Favorites /> },
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
