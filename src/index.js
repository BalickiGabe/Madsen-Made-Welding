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
    fontFamily: ["Nunito", "sans-serif"].join(","),
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: "#b29e85", //beige
      dark: "tan", //dark background
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
