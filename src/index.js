import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";
import Gallery from "./components/Pages/Gallery/Gallery";
import About from "./components/Pages/About";

import OurProcess from "./components/Pages/OurProcess";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Services",
    element: <Services />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Gallery",
    element: <Gallery />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Contact",
    element: <Contact />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/OurProcess",
    element: <OurProcess />,
    errorElement: <div>404 Not Found</div>,
  },

  {
    path: "/About",
    element: <About />,
    errorElement: <div>404 Not Found</div>,
  },
]);

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.3rem",
      fontWeight: 500,
    },
    body2: {
      fontSize: "1.3rem",
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: "#b29e85", //beige
      dark: "Tan", //dark background
      contrastText: "#fff",
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: {
    flexGrow: 1,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
